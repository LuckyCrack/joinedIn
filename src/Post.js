import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import InputOption from './InputOption'

function post({ name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar/>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_image">
            <img src={photoUrl} alt="" srcset="" />
        </div>
        <div className="post_message">
            <p>{message}</p>
        </div>
        <div className="post_footer">
            <InputOption
                Icon={FavoriteBorderRoundedIcon}
                title='Like'
                color='#29339B'
            />
            <InputOption
                Icon={SendRoundedIcon}
                title='Share'
                color='#29339B'
            />
            <InputOption
                Icon={ChatBubbleOutlineRoundedIcon}
                title='Comment'
                color='#29339B'
            />
        </div>
    </div>
  )
}

export default post