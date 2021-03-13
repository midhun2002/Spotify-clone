
const authLink = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId ="60344353b83f4a039a450f6ace36d6b4"
const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state", 
];
export const loginUrl = `${authLink}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenfromUrl =()=>{
    var url = window.location.hash.substring(1).split('&')
    return url.reduce((initial,item)=>{
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    },{})
}