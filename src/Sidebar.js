import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="" alt="" srcset="" />
            <Avatar className='sidebar_avatar'/>
            <h2>Username</h2>
            <h4>@username</h4>
        </div>
        <div className="sidebar_stats">
            <div className="stats_top">
                <p>Views on profile</p>
                <p>0</p>
            </div>
            <div className="stats_bottom">
                <p>Views on posts</p>
                <p>0</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar