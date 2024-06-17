import React from 'react'
import './Stats.css'
import project from '../../assets/project-plan.png'
import rating from '../../assets/rating (1).png'
import timeline from'../../assets/timeline 1.png'
import raise from '../../assets/raise.png'

const Stats = () => {
  return (
    <div className='about'>
      <div className="our-progress">
        <ul>
          <li>
            <img src={project} alt="" />
            <h4>Completed projects</h4>
            <h2>100+</h2>
          </li>
          <li>
            <img src={rating} alt="" />
            <h4>Customer satisfaction</h4>
            
            <h2>92%</h2>
          </li>
          <li>
            <img src={raise} alt="" />
            <h4>Raised by clients</h4>
            <h2>$19M</h2>
          </li>
          <li>
            <img src={timeline} alt="" />
            <h4>Years in buisness</h4>
            <h2>2 years</h2>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Stats
