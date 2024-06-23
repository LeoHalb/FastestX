import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Pressable,
    TextInput,
    LayoutAnimation
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Activity from "./Activity.js";

export default function Feed(props) {

    const [activities, setActivities] = useState([]);
    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [distanceMeasure, setDistanceMeasure] = useState('1000')
    const [timeMeasure, setTimeMeasure] = useState('')

    useEffect(() => {
        if (props.credentials.accessToken !== undefined) {
            getActivities(false)
        }
    }, [props.credentials])

    async function getActivities(refresh) {
        refresh ?
            setRefreshing(true) :
            setLoading(true)
        fetch(`https://www.strava.com/api/v3/athlete/activities?access_token=${props.credentials.accessToken}&per_page=10&page=${refresh ? 1 : page}`)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((el) => el.isExpanded = false)
                setActivities(refresh ? data : activities.concat(data))
                setPage(page + 1)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setRefreshing(false)
                setLoading(false)
            })
    }

    const renderItem = ({item}) => {
        return (
            <Activity activity={item} distanceMeasure={distanceMeasure} timeMeasure={timeMeasure} credentials={props.credentials}/>
        )
    }

    return (
        <>
            {(loading && activities.length === 0) ?
                <ActivityIndicator style={{marginTop: 16}} size='large' color="black"/>:
                <FlatList
                    style={{alignSelf: "center", width: "100%", maxWidth: 700}}
                    data={activities}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    keyboardDismissMode={'onDrag'}
                    onRefresh={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                        getActivities(true)
                    }}
                    refreshing={refreshing}
                    ListHeaderComponent={
                        <View style={styles.item}>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 24}}>Distance [m]</Text>
                                <TextInput
                                    style={styles.input}
                                    contextMenuHidden={true}
                                    selectionColor='#fc5200'
                                    inputMode={"numeric"}
                                    onChangeText={text => {
                                        var number = text.replace(/[^0-9]/g, '')
                                        isNaN(number) ?
                                            setDistanceMeasure(0) :
                                            setTimeMeasure('')
                                        setDistanceMeasure(number)
                                    }}
                                    value={distanceMeasure.toString()}
                                />
                            </View>
                            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 5}}>
                                <Text style={{fontSize: 24}}>Time [s]</Text>
                                <TextInput
                                    style={styles.input}
                                    contextMenuHidden={true}
                                    selectionColor='#fc5200'
                                    inputMode={"numeric"}
                                    onChangeText={text => {
                                        var number = text.replace(/[^0-9]/g, '')
                                        isNaN(number) ?
                                            setTimeMeasure('') :
                                            setDistanceMeasure('')
                                        setTimeMeasure(number)
                                    }}
                                    value={timeMeasure.toString()}
                                />
                            </View>
                        </View>
                    }
                    ListFooterComponent={
                        <Pressable
                            style={[styles.item, {marginBottom: 16, alignItems: "center"}]}
                            onPress={() => {
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                                getActivities(false)
                            }}
                        >
                            {loading ?
                                <ActivityIndicator style={{marginTop: 14, marginBottom: 14}} color="black"/> :
                                <View style={{flexDirection: "row", marginTop: 8, marginBottom: 8}}>
                                    <Ionicons name="reload-circle" size={28} color="black"/>
                                    <Text style={{fontSize: 24}}> Load more</Text>
                                </View>
                            }
                        </Pressable>
                    }
                />
            }
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 16,
        marginTop: 16,
        backgroundColor: "#fc5200",
        borderRadius: 20,
        padding: 16,
        elevation: 2,
        boxShadowColor: "#000",
        boxShadowOffset: {
            width: 0,
            height: 2
        },
        boxShadowOpacity: 0.25,
        boxShadowRadius: 4,
    },
    input: {
        backgroundColor: "white",
        width: 100,
        fontSize: 24,
        textAlign: "center",
        borderRadius: 10
    },
});
  