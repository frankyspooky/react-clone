import React from 'react'
import'./Portfolio.css'
import port_1 from '../../assets/portfolio-1.png'
import port_2 from '../../assets/portfolio-2.png'
import port_3  from '../../assets/portfolio-3.png'
import port_4  from '../../assets/portfolio-4.png'

const Portfolio = () => {
  return (
    <div className='port container' id='portfolio'>
        <div className="portfolio-wrapper">
            <img src={port_1} alt="" />
            <h4> Digital Marketing Agency website</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              nulla ea deserunt perferendis. Corporis amet suscipit dolorem
              repudiandae fugit id?</p>
        </div>
        <div className="portfolio-wrapper">
            <img src={port_2}alt="" />
            <h4> Digital Marketing Agency website</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              nulla ea deserunt perferendis. Corporis amet suscipit dolorem
              repudiandae fugit id?</p>
        </div>
        <div className="portfolio-wrapper">
            <img src={port_3} alt="" />
            <h4> Digital Marketing Agency website</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              nulla ea deserunt perferendis. Corporis amet suscipit dolorem
              repudiandae fugit id?</p>
        </div>
        <div className="portfolio-wrapper">
            <img src={port_4} alt="" />
            <h4> Digital Marketing Agency website</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              nulla ea deserunt perferendis. Corporis amet suscipit dolorem
              repudiandae fugit id?</p>
        </div>
      
    </div>
  )
}

export default Portfolio
