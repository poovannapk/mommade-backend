import React from 'react'
import {NotificationsNone, MailOutline, Settings, AccountCircle} from '@material-ui/icons'
import './HeaderLogo.css'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {

    return (
        <div className='headerLogo'>
        <div className='headerWrapper'>
        <div className='headerLeft'>
        <Link to='/' style={{textDecoration: 'none'}}>
            <span className='headerSpan'>MOM MADE</span>
            </Link>
        </div>
        <div className='headerRight'>
        <div className='headerIcons'>
        <NotificationsNone />
        </div>
        <div className='headerIcons'>
        <MailOutline />
        </div>
        <div className='headerIcons'>
        <Settings />    
        </div>
        <div className='headerIcons'>
        <AccountCircle />    
        </div> 
        </div>
        </div>
        </div>
        
    )
}

export default HeaderLogo