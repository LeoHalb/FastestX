import { ExpoLeaflet } from 'expo-leaflet'
import { ActivityIndicator, View } from 'react-native'

const mapLayers = [{
    attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    baseLayerIsChecked: true,
    baseLayerName: 'OpenStreetMap',
    layerType: 'TileLayer',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
}]

const mapOptions = {
    attributionControl: false,
    zoomControl: false,
}

const initialPosition = {
    lat: 51.4545,
    lng: 2.5879,
}

// https://github.com/Dean177/expo-leaflet/blob/master/expo-leaflet/readme.md
// pipeline fails because of dependencies :(

export const ActivityMap = () => {

    return (
        <View style={{width: "100%", height: 260}}>
            <ExpoLeaflet
                loadingIndicator={() => <ActivityIndicator />}
                onMessage={() => {}}
                mapCenterPosition={initialPosition}
                mapLayers={mapLayers}
                mapOptions={mapOptions}
                zoom={7}
            />
        </View>
    )

}