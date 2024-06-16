import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  LayoutAnimation
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import {ActivityMap} from "./ActivityMap";
// import { ActivityMap } from './ActivityMap'

export default function Activity(props) {

	useEffect(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setExpanded(false)
		setFastestDistance('')
		setDistanceMeasure(props.distanceMeasure)
		setTimeMeasure(props.timeMeasure)
		setLoading(false)
	}, [props.distanceMeasure, props.timeMeasure])

	const [fastestDistance, setFastestDistance] = useState('')
	const [loading, setLoading] = useState(false)
	const [expanded, setExpanded] = useState(false)
	const [distanceMeasure, setDistanceMeasure] = useState('1000')
	const [timeMeasure, setTimeMeasure] = useState('')

	async function findFastestDistance() {
		const trivial_winner = {
			start: {distance: 0, time: 0},
			end: {distance: 0, time: 0},
			distance: 0,
			time: 999999999999999,
			heartrate: 0,
			elevation: {gain: 0, loss: 0},
			range: {start: 0, end: 0}
		}

		if (distanceMeasure === 0 || timeMeasure === 0) {
			setFastestDistance(trivial_winner)
		} else if (!fastestDistance && distanceMeasure !== '0' && distanceMeasure !== '' && loading === false) {
			setLoading(true)
			const streams = await getStreams(props.activity.id)
			const altitudeStream = streams.altitude?.data
			const distanceStream = streams.distance?.data
			const timeStream = streams.time?.data
			const heartrateStream = streams.heartrate?.data
			let fastestSegment = trivial_winner

			props.activity.total_elevation_gain = Math.round(altitudeStream?.reduce((acc, curr, id, arr) => curr > arr[id - 1] ? acc + curr - arr[id - 1] : acc + 0, 0))
			props.activity.total_elevation_loss = Math.round(altitudeStream?.reduce((acc, curr, id, arr) => curr < arr[id - 1] ? acc + arr[id - 1] - curr : acc + 0, 0))

			if (distanceMeasure >= props.activity.distance) {
				setFastestDistance(undefined)
				return
			}

			if (distanceStream && timeStream) {
				const distanceStreamUpperLimit = distanceStream.slice(-1) - distanceMeasure

				for (let i = 0; distanceStream[i] < distanceStreamUpperLimit; i++) {
					const j = distanceStream.indexOf(distanceStream.slice(i).find(el => el - distanceStream[i] >= distanceMeasure))
					if(j !== -1) {
						const currentSegment = {
							distance: Math.round((distanceStream[j] - distanceStream[i]) * 10) / 10,
							time: timeStream[j] - timeStream[i],
							range: {start: i, end: j}
						}

						if (currentSegment.time < fastestSegment.time || (currentSegment.time === fastestSegment.time && currentSegment.distance > fastestSegment.distance)) {
							fastestSegment = currentSegment
						}
					}
				}

				if (fastestSegment) {
					fastestSegment.start = {distance: distanceStream[fastestSegment.range.start], time: timeStream[fastestSegment.range.start]}
					fastestSegment.end = {distance: distanceStream[fastestSegment.range.end], time: timeStream[fastestSegment.range.end]}
					fastestSegment.pace = timeInHoursAndMinutes(Math.round((1000 / (distanceStream[fastestSegment.range.end] - distanceStream[fastestSegment.range.start])) * (timeStream[fastestSegment.range.end] - timeStream[fastestSegment.range.start])))
					fastestSegment.heartrate = Math.round(heartrateStream?.slice(fastestSegment.range.start, fastestSegment.range.end + 1).reduce((acc, curr) => acc + curr, 0) / heartrateStream?.slice(fastestSegment.range.start, fastestSegment.range.end + 1).length)

					const relevantAltitudeStream = altitudeStream?.slice(fastestSegment.range.start, fastestSegment.range.end + 1)
					fastestSegment.elevation = {
						gain: Math.round(relevantAltitudeStream?.reduce((acc, curr, id, arr) => curr > arr[id - 1] ? acc + curr - arr[id - 1] : acc + 0, 0)),
						loss: Math.round(relevantAltitudeStream?.reduce((acc, curr, id, arr) => curr < arr[id - 1] ? acc + arr[id - 1] - curr : acc + 0, 0))
					}
				}

				setLoading(false)
				LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
				setFastestDistance(fastestSegment === trivial_winner ? undefined : fastestSegment)
			} else {
				setFastestDistance(undefined)
			}
		} else if (!fastestDistance && timeMeasure !== '0' && timeMeasure !== '' && loading === false) {
			setLoading(true)
			const streams = await getStreams(props.activity.id)
			const altitudeStream = streams.altitude?.data
			const distanceStream = streams.distance?.data
			const timeStream = streams.time?.data
			const heartrateStream = streams.heartrate?.data
			let fastestSegment = trivial_winner

			props.activity.total_elevation_gain = Math.round(altitudeStream?.reduce((acc, curr, id, arr) => curr > arr[id - 1] ? acc + curr - arr[id - 1] : acc + 0, 0))
			props.activity.total_elevation_loss = Math.round(altitudeStream?.reduce((acc, curr, id, arr) => curr < arr[id - 1] ? acc + arr[id - 1] - curr : acc + 0, 0))

			if (timeMeasure >= props.activity.elapsed_time) {
				setFastestDistance(undefined)
				return
			}

			if (distanceStream && timeStream) {
				const timeStreamUpperLimit = timeStream.slice(-1) - timeMeasure

				for (let i = 0; timeStream[i] < timeStreamUpperLimit; i++) {
					const j = timeStream.indexOf(timeStream.slice(i).find(el => el - timeStream[i] >= timeMeasure))
					if(j !== -1) {
						const currentSegment = {
							distance: Math.round((distanceStream[j] - distanceStream[i]) * 10) / 10,
							time: timeStream[j] - timeStream[i],
							range: {start: i, end: j}
						}

						if (currentSegment.time < fastestSegment.time || (currentSegment.time === fastestSegment.time && currentSegment.distance > fastestSegment.distance)) {
							fastestSegment = currentSegment
						}
					}
				}

				if (fastestSegment) {
					fastestSegment.start = {distance: distanceStream[fastestSegment.range.start], time: timeStream[fastestSegment.range.start]}
					fastestSegment.end = {distance: distanceStream[fastestSegment.range.end], time: timeStream[fastestSegment.range.end]}
					fastestSegment.pace = timeInHoursAndMinutes(Math.round((1000 / (distanceStream[fastestSegment.range.end] - distanceStream[fastestSegment.range.start])) * (timeStream[fastestSegment.range.end] - timeStream[fastestSegment.range.start])))
					fastestSegment.heartrate = Math.round(heartrateStream?.slice(fastestSegment.range.start, fastestSegment.range.end + 1).reduce((acc, curr) => acc + curr, 0) / heartrateStream?.slice(fastestSegment.range.start, fastestSegment.range.end + 1).length)

					const relevantAltitudeStream = altitudeStream?.slice(fastestSegment.range.start, fastestSegment.range.end + 1)
					fastestSegment.elevation = {
						gain: Math.round(relevantAltitudeStream?.reduce((acc, curr, id, arr) => curr > arr[id - 1] ? acc + curr - arr[id - 1] : acc + 0, 0)),
						loss: Math.round(relevantAltitudeStream?.reduce((acc, curr, id, arr) => curr < arr[id - 1] ? acc + arr[id - 1] - curr : acc + 0, 0))
					}
				}

				setLoading(false)
				LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
				setFastestDistance(fastestSegment === trivial_winner ? undefined : fastestSegment)
			} else {
				setFastestDistance(undefined)
			}
		}
	}
	
	function timeInHoursAndMinutes(time) {
		const hours = Math.floor(time / 3600)
		let rest = time - hours * 3600
		const minutes = Math.floor(rest / 60)
		rest = time - minutes * 60 - hours * 3600
		const seconds = rest < 10 ? `0${rest}` : rest
		return `${hours !== 0 ? `${hours}:` < 10 ? `0${hours}:` : `${hours}:` : ''}${minutes < 10 ? `0${minutes}` : minutes}:${seconds} ${hours > 0 ? 'h' : 'min'}`
	}

	const updateLayout = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setExpanded(!expanded)
	};

	async function getStreams(id) {
		return fetch(`https://www.strava.com/api/v3/activities/${id}/streams?access_token=${props.credentials.accessToken}&keys=time,distance,heartrate,altitude&key_by_type=true`)
			.then((res) => res.json())
	}

	function DrawDistance() {
		if (fastestDistance === undefined || distanceMeasure === '0' || timeMeasure === '0') {
			return (
				<View style={styles.modalContainer}>
					<View 
						style={[styles.modalLine, {justifyContent: "space-evenly"}]}
					>
						<View>
							{!isNaN(props.activity.elapsed_time) && props.activity.elapsed_time !== 0 &&
								<Ionicons
									style={{textAlign: "center", alignSelf: "center"}}
									name="timer" 
									size={28}
								/>
							}
							{!isNaN(props.activity.distance) && props.activity.distance !== 0 &&
								<MaterialCommunityIcons
									style={{textAlign: "center", alignSelf: "center"}}
									name="map-marker-distance" 
									size={28}
								/>
							}
							{!isNaN(props.activity.average_speed) && props.activity.average_speed !== 0 &&
								<>
									<Text
										style={{display: "flex", textAlign: "center", alignSelf: "center", fontSize: 22, fontWeight: 'bold'}}
									>
										[min/km]
									</Text>
									<Text
										style={{display: "flex", textAlign: "center", alignSelf: "center", fontSize: 22, fontWeight: 'bold'}}
									>
										[km/h]
									</Text>
								</>
							}
							{!isNaN(props.activity.average_heartrate) && props.activity.average_heartrate !== 0 &&
								<Text
									style={{display: "flex", textAlign: "center", alignSelf: "center", fontSize: 22, fontWeight: 'bold'}}
								>
									[bpm]
								</Text>
							}
							{!isNaN(props.activity.total_elevation_gain) && props.activity.total_elevation_gain !== 0 &&
								<Text
									style={{display: "flex", textAlign: "center", alignSelf: "center", fontSize: 22, fontWeight: 'bold'}}
								>
									[m]
								</Text>
							}
						</View>
						<View>
							{!isNaN(props.activity.elapsed_time) && props.activity.elapsed_time !== 0 &&
								<Text 
									style={[
										styles.name, 
										{textAlign: "center"}
									]}
								>
									{`${timeInHoursAndMinutes(props.activity.elapsed_time)}`}
								</Text>	
							}
							{!isNaN(props.activity.distance) && props.activity.distance !== 0 &&
								<Text 
									style={[
										styles.name, 
										{textAlign: "center"}
									]}
								>
									{`${Math.round(props.activity.distance / 10) / 100} km`}
								</Text>
							}
							{!isNaN(props.activity.average_speed) && props.activity.average_speed !== 0 &&
								<>
									<Text 
										style={[
											styles.name, 
											{textAlign: "center"}
										]}
									>
										{`${timeInHoursAndMinutes(Math.round(1000 / props.activity.average_speed)).replace(' min', '').replace(' h', '')}`}
									</Text>
									<Text 
										style={[
											styles.name, 
											{textAlign: "center"}
										]}
									>
										{`${Math.round(props.activity.average_speed * 3.6 * 10) / 10}`}
									</Text>
								</>
							}
							{!isNaN(props.activity.average_heartrate) && props.activity.average_heartrate !== 0 &&
								<Text 
									style={[
										styles.name, 
										{textAlign: "center"}
									]}
								>
									{`${Math.round(props.activity.average_heartrate)}`}
								</Text>
							}
							{!isNaN(props.activity.total_elevation_gain) && props.activity.total_elevation_gain !== 0 &&
								<Text 
									style={[
										styles.name, 
										{textAlign: "center"}
									]}
								>
									{`+${props.activity.total_elevation_gain} / -${props.activity.total_elevation_loss}`}
								</Text>
							}
						</View>
					</View>
				</View>
			)
		} else if (fastestDistance) {
			return (
				<View style={styles.modalContainer}>
					<View style={[styles.modalLine, {display: "flex"}]}>
						<Text 
							style={[
								styles.name,
								{flex: 1, marginRight: "auto"}
							]}
						>
							{`${fastestDistance.distance} m`}
						</Text>
						<MaterialCommunityIcons
							style={{display: "flex", alignItems: "center"}} 
							name="map-marker-distance"
							size={28}
						/>
						<Text
							style={[
								styles.name,
								{textAlign: "right", flex: 1, marginLeft: "auto"}
							]}
						>
							{`${Math.round(props.activity.distance / 10) / 100} km`}
						</Text>
					</View>
					<View style={[styles.modalLine, {display: "flex"}]}>
						<Text 
							style={[
								styles.name,
								{flex: 1, marginRight: "auto"}
							]}
						>
							{`${timeInHoursAndMinutes(fastestDistance.time)}`}
						</Text>
						<Ionicons
							style={{display: "flex", alignItems: "center"}} 
							name="timer"
							size={28}
						/>
						<Text
							style={[
								styles.name,
								{textAlign: "right", flex: 1, marginLeft: "auto"}
							]}
						>
							{`${timeInHoursAndMinutes(props.activity.elapsed_time)}`}
						</Text>
					</View>
					<View style={[styles.modalLine, {display: "flex"}]}>
						<Text 
							style={[
								styles.name,
								{flex: 1, marginRight: "auto"}
							]}
						>
							{`${fastestDistance.pace.replace(' min', '').replace(' h', '')}`}
						</Text>
						<Text
							style={{display: "flex", alignItems: "center", fontSize: 22, fontWeight: 'bold'}}
						>
							[min/km]
						</Text>
						<Text
							style={[
								styles.name,
								{textAlign: "right", flex: 1, marginLeft: "auto"}
							]}
						>
							{`${timeInHoursAndMinutes(Math.round(1000 / props.activity.average_speed)).replace(' min', '').replace(' h', '')}`}
						</Text>
					</View>
					<View style={[styles.modalLine, {display: "flex"}]}>
						<Text 
							style={[
								styles.name,
								{flex: 1, marginRight: "auto"}
							]}
						>
							{`${Math.round((fastestDistance.end.distance - fastestDistance.start.distance) / (fastestDistance.end.time - fastestDistance.start.time) * 3.6 * 10) / 10}`}
						</Text>
						<Text
							style={{display: "flex", alignItems: "center", fontSize: 22, fontWeight: 'bold'}}
						>
							[km/h]
						</Text>
						<Text
							style={[
								styles.name,
								{textAlign: "right", flex: 1, marginLeft: "auto"}
							]}
						>
							{`${Math.round(props.activity.average_speed * 3.6 * 10) / 10}`}
						</Text>
					</View>
					{!isNaN(fastestDistance.heartrate) &&
						<View style={[styles.modalLine, {display: "flex"}]}>
							<Text 
								style={[
									styles.name,
									{flex: 1, marginRight: "auto"}
								]}
							>
								{`${fastestDistance.heartrate}`}
							</Text>
							<Text
								style={{display: "flex", alignItems: "center", fontSize: 22, fontWeight: 'bold'}}
							>
								[bpm]
							</Text>
							<Text
								style={[
									styles.name,
									{textAlign: "right", flex: 1, marginLeft: "auto"}
								]}
							>
								{`${Math.round(props.activity.average_heartrate)}`}
							</Text>
						</View>
					}
					{!isNaN(fastestDistance.elevation.gain) && !isNaN(fastestDistance.elevation.loss) &&
						<View style={[styles.modalLine, {display: "flex"}]}>
							<Text 
								style={[
									styles.name,
									{flex: 1, marginRight: "auto"}
								]}
							>
								{`+${fastestDistance.elevation.gain} / -${fastestDistance.elevation.loss}`}
							</Text>
							<Text
								style={{display: "flex", alignItems: "center", fontSize: 22, fontWeight: 'bold'}}
							>
								[m]
							</Text>
							<Text
								style={[
									styles.name,
									{textAlign: "right", flex: 1, marginLeft: "auto"}
								]}
							>
								{`+${props.activity.total_elevation_gain} / -${props.activity.total_elevation_loss}`}
							</Text>
						</View>
					}

					<View style={{width: "100%"}}>
						<View style={styles.separator} />
					</View>
					
					<View style={[styles.modalLine, {display: "flex"}]}>
						<Text 
							style={[
								styles.name,
								{flex: 1, marginRight: "auto"}
							]}
						>
							{`${Math.round(fastestDistance.start.distance) / 1000} km`}
						</Text>
						<FontAwesome5
							style={{display: "flex", alignItems: "center"}} 
							name="at"
							size={24}
						/>
						<Text
							style={[
								styles.name,
								{textAlign: "right", flex: 1, marginLeft: "auto"}
							]}
						>
							{`${timeInHoursAndMinutes(fastestDistance.start.time)}`}
						</Text>
					</View>
					<ActivityMap></ActivityMap>
				</View>
			)
		} else if (loading) {
			return (
				<ActivityIndicator color="black"/>
			)
		} else {
			return null
		}
  	}

	return (
		<Pressable
			style={styles.item}
			onPress={() => {
				findFastestDistance(props.activity)
				updateLayout()
			}}>
			<Text style={[styles.name, {textAlign: "center"}]}>
				{`${props.activity.name}`}
			</Text>
			<Text>
				{`${new Date(props.activity.start_date).toLocaleDateString()}`}
			</Text>
			<Pressable
				onPress={() => Linking.openURL(`https://www.strava.com/activities/${props.activity.id}`)}
			>
				<Text
					style={{color: "blue", textDecorationColor: "blue", textDecorationLine: "underline"}}
				>
					View on Strava
				</Text>
			</Pressable>
			{expanded && distanceMeasure !== '0' && timeMeasure !== '0' ? 
				<View style={{width: "100%"}}>
					<View style={styles.separator} />
					<DrawDistance></DrawDistance>
				</View> :
				null
			}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	item: {
		marginHorizontal: 16,
		marginTop: 16,
		alignItems: "center",
		backgroundColor: "#fc5200",
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		boxShadowColor: "#000",
		boxShadowOffset: {
		width: 0,
		height: 2
		},
		boxShadowOpacity: 0.25,
		boxShadowRadius: 4,
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		width: "90%",
		marginLeft: "5%",
		backgroundColor: "#fc5200",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		justifyContent: "center",
		boxShadowColor: "#000",
		boxShadowOffset: {
		width: 0,
		height: 2
		},
		boxShadowOpacity: 0.25,
		boxShadowRadius: 4,
		elevation: 5,
	},
	modalLine: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	separator: {
		height: 2,
		backgroundColor: 'black',
		marginTop: 8,
		marginBottom: 8
	},
	name: {
		fontSize: 24,
	}
});