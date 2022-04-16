import React, {useState} from 'react'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import VideoCameraBackRoundedIcon from '@mui/icons-material/VideoCameraBackRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import InputOption from './InputOption'
import Post from './Post'

function Feed() {

    const [posts, setPosts] = useState([])

    const sendPost = (e) => {
        e.preventDefault();   
    }

    return (
        <div className='feed'>
            <CreateRoundedIcon />
            <form action="">
                <input type="text" />
                <button onClick={sendPost} type="submit">
                    Send
                </button>
            </form>
            <div className="inputOption">
                <InputOption
                    Icon={InsertPhotoRoundedIcon}
                    title='Photo'
                    color='#99E1D9'
                />
                <InputOption
                    Icon={VideoCameraBackRoundedIcon}
                    title='Video'
                    color='#F7567C'
                />
                <InputOption
                    Icon={EventRoundedIcon}
                    title='Event'
                    color='#74A4BC'
                />
                {posts.map((post) => (
                    <Post />
                ))}
                {/* <Post name='Username' description='Test' message='Test Message' photoUrl='https://compote.slate.com/images/5e48cf3d-0992-4eda-a080-e00e07738b2f.jpg?width=840' /> */}
            </div>
        </div>
    )
}

export default Feed