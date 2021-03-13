
import React,{useState,useEffect} from 'react'
import './App.css';
import Login from './login'
import spotify from 'spotify-web-api-js'
import { getTokenfromUrl } from './spotify'
import Player from './player'
const Spotify = new spotify()
function App() {
  const [_token,setToken]=useState(null)
  useEffect(() => {
      let hashtoken=getTokenfromUrl();
      const access_token = hashtoken.access_token; 
        setToken(access_token); 
        Spotify.setAccessToken(access_token)
        Spotify.getMe()
        .then(user=>{
          console.log("Its me",user)
        })
    
    }
  , []);

  return (
    <div className="app">
      {_token ?<Player/> :<Login/>}

    </div>
  );
}

export default App;
