import React from 'react'
import './Header.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import HeaderOption from './HeaderOption'

function header() {
  return (
    <div className='header'>
      <div className="header_left">
        <img src="https://img.icons8.com/fluency/48/000000/query-inner-join.png"/>
        <div className="header_search">
          <input type="text" className="search" placeholder="Search" />
          <SearchRoundedIcon className='search_icon' />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeRoundedIcon} title='Home'/>
        <HeaderOption Icon={WorkRoundedIcon} title='Jobs'/>
        <HeaderOption avatar='https://img.icons8.com/material-outlined/48/000000/user-male-circle.png' title='User Name'/>
      </div>
    </div>
  )
}

export default header