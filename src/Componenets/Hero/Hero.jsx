import React from 'react'
import './Hero.css'
import hero_img from'../../assets/Group 38.png'

const Hero = () => {
  return (
    <div className='hero container' >
     
      <div className='hero-text'>
        <h2>Increase Your Customer Loyalty and Satisfaction</h2>
        <p>we help buisnesses like yours earn more customers,stand out from competitors and make more money</p>
        <button className='btn'> Get Started</button>
      </div>
      <div className='hero-img'>
       <img src={hero_img}alt="" />
       </div>
    </div>
  )
}

export default Hero
