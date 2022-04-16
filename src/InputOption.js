import React from 'react'
import './InputOption.css'

function InputOption({ Icon, title, color }) {
  return (
    <div>
        <Icon style={{color : color}} className='inputOptions_icons'/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption