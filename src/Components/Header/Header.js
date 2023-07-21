import React from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header_icons'>
        <div className='header_icon header_icon_active'>
            <HomeIcon />
            <p>Home</p>
        </div>
        <div className='header_icon'>
            <FlashOnIcon />
            <p>Trending</p>
        </div>
        <div className='header_icon'>
            <LiveTvIcon />
            <p>Verified</p>
        </div>
        <div className='header_icon'>
            <VideoLibraryOutlinedIcon />
            <p>Collections</p>
        </div>
        <div className='header_icon'>
            <SearchIcon />
            <p>Search</p>
        </div>
        <div className='header_icon'>
            <AccountCircleIcon />
            <p>Account</p>
        </div>
      </div>
      <img src="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg" alt='' />
    </div>
  )
}

export default Header
