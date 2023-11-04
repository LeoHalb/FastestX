import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Platform,
	UIManager,
	Pressable,
	ActivityIndicator,
} from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync, TokenResponse, refreshAsync } from 'expo-auth-session';
import Feed from "./components/Feed";
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
	authorizationEndpoint: 'https://www.strava.com/oauth/mobile/authorize',
	tokenEndpoint: 'https://eou0f5t5ol4avvx.m.pipedream.net',
	revocationEndpoint: 'https://www.strava.com/oauth/deauthorize',
};

export default function App() {

	const [loggedIn, setLoggedIn] = useState(false)
	const [credentials, setCredentials] = useState({})
	const [loading, setLoading] = useState(true)
	const [errorState, setErrorState] = useState(false)
	
	const setAccessToken = async () => {
		const accessToken = await exchangeCodeAsync(
			{
				clientId: request?.clientId,
				redirectUri: makeRedirectUri({
					scheme: 'fastestx',
					path: 'FastestX'
				}),
				code: response?.params.code,
			},
			discovery
		)
		
		if (Platform.OS !== 'web') {
			await SecureStore.setItemAsync('credentials', JSON.stringify(accessToken))
		}
		setCredentials(accessToken)
		setLoading(false)
	}

	const [request, response, promptAsync] = useAuthRequest(
		{
			clientId: '80072',
			scopes: ['activity:read_all'],
			redirectUri: makeRedirectUri({
				scheme: 'fastestx',
				path: 'FastestX'
			}),
		},
		discovery
	);

	const handleLogout = async () => {
		if (Platform.OS !== 'web') {
			await SecureStore.deleteItemAsync('credentials')
		}
		
		await fetch(`https://www.strava.com/oauth/deauthorize?access_token=${credentials.accessToken}`, {
			method: 'POST',
		});

		setLoggedIn(false)
		setLoading(false)
	}

	useEffect(() => {
		const checkStoredCredentials = async () => {
			setLoading(true)
			const isAvailable = async () => await SecureStore.isAvailableAsync('credentials')
			const getStoredCredentials = async () => await SecureStore.getItemAsync('credentials')
			const storedCredentials = JSON.parse(await getStoredCredentials())

			if (await isAvailable() && storedCredentials !== null) {
				if (!TokenResponse.isTokenFresh(storedCredentials)) {
					const refreshedCredentials = await refreshAsync(
						{clientId: '80072', refreshToken: storedCredentials.refreshToken},
						discovery
					)
				
					setCredentials(refreshedCredentials)
					setLoggedIn(true)
					setLoading(false)
					return
				}
				setCredentials(storedCredentials)
				setLoggedIn(true)
				setLoading(false)
			}
		}

		if (Platform.OS !== "web") {
			checkStoredCredentials()
		}
	}, [])

	useEffect(async () => {
		setLoading(true)
		const params = new URLSearchParams(window.location.search)
		const paramsObj = {}
		for (const [key, value] of params) {
			paramsObj[key] = value
		}
		var newURL = location.href.split("?")[0];
		window.history.pushState('object', document.title, newURL);

		console.log(paramsObj)

		if (paramsObj.code !== undefined && paramsObj.scope !== undefined && paramsObj.state !== undefined) {
			if(paramsObj.scope === 'read,activity:read_all' || paramsObj.scope === 'activity:read_all,read') {
				const accessToken = await exchangeCodeAsync(
					{
						clientId: '80072',
						redirectUri: makeRedirectUri({
							scheme: 'fastestx',
							path: 'FastestX'
						}),
						code: paramsObj.code,
					},
					discovery
				)
				
				setCredentials(accessToken)
				setLoading(false)
				setErrorState(false)
				setLoggedIn(true)
			} else {
				setErrorState(true)
				setLoading(false)
			}
		} else if (paramsObj.error !== undefined) {
			setErrorState(true)
			setLoading(false)
		} else {
			setErrorState(false)
			setLoading(false)
		}
	}, [])

	useEffect(() => console.log(loading), [loading])

	useEffect(() => {
		if (Platform.OS !== 'web') {
			if (response?.type === 'success') {
				if(response?.params.scope === 'read,activity:read_all' || response?.params.scope === 'activity:read_all,read') {
					setErrorState(false)
					setAccessToken()
					setLoggedIn(true)
					setLoading(false)
				} else {
					setErrorState(true)
					setLoading(false)
				}
			} else if (response?.type === 'error') {
				setErrorState(true)
				setLoading(false)
			} else {
				setErrorState(false)
				setLoading(false)
			}
		}
	}, [response])

	useEffect(() => console.log({
		loggedIn: loggedIn,
		credentials: credentials,
		loading: loading,
		errorState: errorState,
	}))

	if (Platform.OS === 'android') {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	return (
		<>
			<StatusBar backgroundColor="#fc5200" />
			<SafeAreaProvider>
				<SafeAreaView style={{flex: 1}}>
					<View style={[styles.topBar, {flexDirection: "row", justifyContent: "center"}]}>
						<View style={{alignItems: "center", flexDirection: "row", width: "100%", maxWidth: 700, justifyContent: "space-between"}}>
							<Text style={styles.title}>FastestX</Text>
							{loggedIn && !errorState && 
								<>
									<Image
										cachePolicy="memory-disk"
										style={{height: 43, width: 104}}
										contentFit="contain"
										source={require("./assets/api_logo_pwrdBy_strava_stack_white.svg")}						
									/>
									<Pressable 
										onPress={() => {
											setLoading(true)
											handleLogout()
										}}
										style={{marginRight: 16, justifyContent: 'center'}}
									>
										<AntDesign
											name="logout"
											size={24}
											color="black"
										/>
									</Pressable>
								</>
							}
						</View>
					</View>
					{
						loading ?
							<View style={{marginTop: 16, justifyContent: "space-between", flex: 1}}>
								<ActivityIndicator size='large' color="black"/>
								<Image
									cachePolicy="memory-disk"
									style={{
										width: "100%",
										height: 63,
										marginTop: 16
									}}
									contentFit="contain"
									source={require("./assets/api_logo_pwrdBy_strava_stack_light.svg")}						
								/>
							</View> :
							loggedIn ?
								<Feed credentials={credentials}></Feed> :
								<View style={{flex: 1, justifyContent: "space-between", alignSelf: "stretch", justifySelf: "stretch"}}>
									<View>
										{errorState ?
											<Text
												style={{width: "90%", marginLeft: "5%", marginTop: 16, color: 'red', textAlign: "center", textAlign: "center"}}
											>
												This app needs the permission to read all of your activities' data to work.
											</Text> : <></>}
										<Pressable
											style={{marginTop: 16}}
											onPress={() => {
												setLoading(true)
												promptAsync()
											}}
										>
											<Image
												cachePolicy="memory-disk"
												style={{height: 48}}
												contentFit="contain"
												source={require("./assets/btn_strava_connectwith_orange.svg")}
											/>
										</Pressable>
										<View style={{marginTop: 16}}>
											<Text style={{textAlign: "center"}}>Log in to see your activities</Text>
										</View>
									</View>
									{(!loggedIn || errorState) && 
										<Image
											cachePolicy="memory-disk"
											style={{
												width: "100%",
												height: 63
											}}
											contentFit="contain"
											source={require("./assets/api_logo_pwrdBy_strava_stack_light.svg")}						
										/>}
								</View>
					}
				</SafeAreaView>
			</SafeAreaProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex"
	},
	topBar: {
		height: 43,
		backgroundColor: "#fc5200",
	},
	title: {
		paddingLeft: 16,
		fontSize: 32,
	},
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
