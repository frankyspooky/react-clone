
import React from 'react'
import './About.css'
import activity from '../../assets/Activity.png'
import right_arrow from '../../assets/right-arrow.png'
import heart from '../../assets/Heart.png'
import work from '../../assets/Work.png'



const About = () => {
  return (
    <div className='contain'>
      <div className='items'> 
        <img src={activity} alt="" />
        <h3>Grow your buisness catalogue</h3>
        <p>we help identify the best ways to improve your buisness </p>
        <button className='btn'> Learn more <img src={right_arrow} alt="" /></button>
      </div>
      <div className='items'>
        <img src={heart} alt="" />
        <h3>improve brand loyalty</h3>
        <p>we help identify the best ways to improve your buisness </p>
        <button className='btn'> Learn more <img src={right_arrow} alt="" /></button>
      </div>
      <div className='items'>
        <img src={work} alt="" />
        <h3>improve buisness model</h3>
        <p>we help identify the best ways to improve your buisness </p>
        <button className='btn'> Learn more <img src={right_arrow} alt="" /></button>
      </div>
      
    </div>
  )
}

export default About
