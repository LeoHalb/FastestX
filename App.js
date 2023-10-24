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
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync } from 'expo-auth-session';
import Feed from "./components/Feed";
import * as SecureStore from 'expo-secure-store';

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
		console.log(credentials)
		const getStoredCredentials = async () => await SecureStore.getItemAsync('credentials')
		const storedCredentials = getStoredCredentials()
		if (storedCredentials !== null) {
			setCredentials(storedCredentials)
		}
	}, [])

	/* const [request, response, promptAsync] = useAuthRequest(
		{
			clientId: '80072',
			scopes: ['activity:read_all'],
			redirectUri: makeRedirectUri({
				// For usage in bare and standalone
				// the "redirect" must match your "Authorization Callback Domain" in the Strava dev console.
				scheme: 'fastestx',
				path: 'redirect'
				// Development Build: my-scheme://redirect
				// Expo Go: exp://127.0.0.1:8081/--/redirect
				// Web dev: https://localhost:19006/redirect
				// Web prod: https://yourwebsite.com/redirect
			}),
		},
		discovery
	);
	
	async function setAccessToken() {
		const accessToken = await exchangeCodeAsync(
			{
				clientId: request?.clientId,
				redirectUri: makeRedirectUri({
					// For usage in bare and standalone
					// the "redirect" must match your "Authorization Callback Domain" in the Strava dev console.
				scheme: 'fastestx',
				path: 'redirect'
					// useProxy: true
					// scheme: 'my-scheme',
					// path: 'redirect'
				}),
				code: response?.params.code,
			},
			discovery
		)
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
	}, [response]) */

	const [request, response, promptAsync] = useAuthRequest(
		{
		  clientId: '80072',
		  scopes: ['activity:read_all'],
		  redirectUri: makeRedirectUri({
			scheme: 'fastestx',
			path: 'redirect'
			// For usage in bare and standalone
			// the "redirect" must match your "Authorization Callback Domain" in the Strava dev console.
			// native: 'sportsapp://sportsapp.com',
		  }),
		},
		{ authorizationEndpoint: 'https://www.strava.com/oauth/mobile/authorize' }
	  );
	
	  useEffect(() => {
		async function getCredentials() {
			const credentials = await exchangeCodeAsync(
				{
				  	clientId: request?.clientId,
					redirectUri: makeRedirectUri({
						scheme: 'fastestx',
						path: 'redirect'
						// For usage in bare and standalone
						// the "redirect" must match your "Authorization Callback Domain" in the Strava dev console.
						// native: 'sportsapp://sportsapp.com',
						// useProxy: true
				  	}),
				  	code: response?.params.code,
				  	extraParams: {
						// You must use the extraParams variation of clientSecret.
						// Never store your client secret on the client.
						client_secret: '07913394e9ea497df3bd6f9b824f666370d9c8f4',
				  	},
				},
				{ tokenEndpoint: 'https://www.strava.com/oauth/token' }
			)
			await SecureStore.setItemAsync('credentials', JSON.stringify(credentials))
			setCredentials(credentials)
			setLoading(false)
		}

		if (response?.type === 'success') {
			if(response?.params.scope === 'read,activity:read_all' || response?.params.scope === 'activity:read_all,read') {
				setErrorState('')
				getCredentials()
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

	if (Platform.OS === 'android') {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	return (
		<>
			<StatusBar backgroundColor="#fc5200" />
			<SafeAreaProvider>
				<SafeAreaView>
					<View style={[styles.topBar, {flexDirection: "row", justifyContent: "space-between"}]}>
						<Text style={styles.title}>SportsApp</Text>
						{loggedIn && !errorState && 
							<Image
								cachePolicy="memory-disk"
								style={{height: 43, width: 104, marginRight: 16}}
								contentFit="contain"
								source={require("./assets/api_logo_pwrdBy_strava_stack_white.svg")}						
							/>
						}
					</View>
					{
						!loggedIn && loading ?
							<View style={{justifyContent: "space-between", flex: 1}}>
								<ActivityIndicator style={{marginTop: 16}} size='large' color="black"/>
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
								<View style={{justifyContent: "space-between", height: "94%"}}>
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
											<Text style={{textAlign: "center"}}>{
												makeRedirectUri({
													scheme: 'fastestx',
													path: 'redirect'
												})
											}</Text>
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
