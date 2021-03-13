import React from 'react'
import'./sidebar.css'
import Sidebaroption from './Sidebaroption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
function Sidebar() {
    return (
        <div className="sidebar">
          <img alt="logo" className="sidebar_logo"src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>
          <Sidebaroption  Icon={HomeIcon}option="Home"/>
          <Sidebaroption Icon={SearchIcon}option="Search"/>
          <Sidebaroption Icon={LibraryMusicIcon} option="Your library"/>
            <hr></hr>
          <strong className="sidebar_title">PLAYLISTS</strong>
        </div>
    )
}

export default Sidebar
