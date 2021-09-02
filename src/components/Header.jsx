import React from 'react'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import './header.scss'
import { Link, NavLink, useLocation } from 'react-router-dom';
import AddPostLink from './AddPostLink';

const Header = () => {
    const {pathname} = useLocation();
    
    return (
        <>
        <div className="top__header">
            <div className="topheader__logo">
                <img src="https://th.bing.com/th/id/OIP.7uCXdie5z0uSywGhJfhPtgHaCY?w=343&h=112&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
            </div>
            <nav >
            <NavLink to="/" active={pathname === '/'}>My Campaigns</NavLink>
                
               
                <a href="">Past campaigns</a>
                <a href="">Account</a>
            </nav>
            <div className="notification__icon">
                <NotificationsRoundedIcon  style={{fontSize: '30px'}}/>
            </div>
          
            <div className="profile">
                <span className="title">Hi Sudarshan!</span>
                <PermIdentityOutlinedIcon style={{fontSize: '30px'}}/>
            </div>
        </div>
        <hr/>
        <div className="bottom__header">
            <div className="icon">
            <img src="https://i0.wp.com/suzysoper.co.uk/wp-content/uploads/2019/05/logo-purple-background.png?ssl=1" alt="" />

            </div>
            <div className="description">
                <div className="title"><strong>Campaign</strong> | App Installs in Chennai</div>
                <button>Live</button>
            </div>
        </div>
        </>
    )
}

export default Header
