import React from 'react'
import'./Social.css'
import logo_monday from '../../assets/logos_monday.png'
import logo_google from '../../assets/logos_google.png'
import Notion from '../../assets/Notion.png'
import slack from '../../assets/Slack.png'
import trello from '../../assets/Trello-logo-blue 1.png'

const Social = () => {
  return (
    <div className='socials container'>
        <img src={logo_google} alt="" />
        <img src={trello} alt="" />
        <img src={logo_monday}alt="" />
        <img src={Notion} alt="" />
        <img src={slack} alt="" />
      
    </div>
  )
}

export default Social
