import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material';

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className="headerOption">
        { Icon && <Icon className="headerOption_icon" /> }
        { avatar && <Avatar className="headerOption_avatar" src={avatar} /> }
        <h3 className='icon_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption