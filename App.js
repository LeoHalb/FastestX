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
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync, TokenResponse, refreshAsync, revokeAsync } from 'expo-auth-session';
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
	const [loading, setLoading] = useState(false)
	const [errorState, setErrorState] = useState('')

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

		checkStoredCredentials()
	}, [])

	const [request, response, promptAsync] = useAuthRequest(
		{
			clientId: '80072',
			scopes: ['activity:read_all'],
			redirectUri: makeRedirectUri({
				scheme: 'fastestx',
				path: 'redirect'
			}),
		},
		discovery
	);
	
	async function setAccessToken() {
		const accessToken = await exchangeCodeAsync(
			{
				clientId: request?.clientId,
				redirectUri: makeRedirectUri({
					scheme: 'fastestx',
					path: 'redirect'
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

	useEffect(() => {
		if (response?.type === 'success') {
			if(response?.params.scope === 'read,activity:read_all' || response?.params.scope === 'activity:read_all,read') {
				setErrorState('')
				setAccessToken()
				setLoggedIn(true)
			} else {
				setErrorState('wrong_scope')
				setLoading(false)
			}
		} else if (response?.type === 'error') {
			setErrorState(response?.params.error)
			setLoading(false)
		} else {
			setErrorState('')
			setLoading(false)
		}
	}, [response])

	const handleLogout = async () => {
		setLoggedIn(false)
		await revokeAsync({token: credentials.accessToken}, discovery)
		await revokeAsync({token: credentials.refreshToken}, discovery)
		await SecureStore.deleteItemAsync('credentials')
		setLoading(false)
	}

	if (Platform.OS === 'android') {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	return (
		<>
			<StatusBar backgroundColor="#fc5200" />
			<SafeAreaProvider>
				<SafeAreaView style={{flex: 1}}>
					<View style={[styles.topBar, {flexDirection: "row", justifyContent: "space-between"}]}>
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
					{
						!loggedIn && loading ?
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
