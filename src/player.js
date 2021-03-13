import React from 'react'
import Sidebar from './Sidebar'
import './player.css' 
import Body from './Body' 
import Footer from './Footer'
function player() {
    return (
        <div className="player">
           <div className="player_body">
                <Sidebar/>
                <Body/>
            </div> 
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default player

