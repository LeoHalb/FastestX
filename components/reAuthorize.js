export default function reAuthorize() {
    const auth_link = "https://www.strava.com/oauth/token"
    const cred = fetch(auth_link, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '80072',
            client_secret: '07913394e9ea497df3bd6f9b824f666370d9c8f4',
            refresh_token: '94f0ba18c7f2afa4cf91d8de2aa806edb1bab8dc',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
    return cred
}