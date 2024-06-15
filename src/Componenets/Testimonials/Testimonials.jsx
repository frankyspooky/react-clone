import React, { useRef } from 'react'
import './Testimonials.css'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider=useRef();
    let tx =0;
const slideForward =()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward =()=>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider} >
                <li>
                <div className="slide">
            <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                    <h3>Emily Stone</h3>
                    <span>Design Agency , USA</span>
                </div>
            </div>
            <p> i couldn't be happier with the custom illustartion work provided design .it added a distinctive touch to our project making it truly one-of-a-kind</p>
        </div>
                </li>
                <li>
                <div className="slide">
            <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                    <h3>Emily Stone</h3>
                    <span>Design Agency , USA</span>
                </div>
            </div>
            <p>  i approcached design agency with a unique project , and they embraced the challenge .the creative solutions they came up with were nothing short of genius</p>
        </div>
                </li>
                <li>
                <div className="slide">
            <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                    <h3>Emily Stone</h3>
                    <span>Design Agency , USA</span>
                </div>
            </div>
            <p> i can't express how greatful we are to design Agency for their work on our product packaging .its not just visually appealing, it tells our brand story perfectly</p>
        </div>
                </li>
                <li>
                <div className="slide">
            <div className="user-info">
                <img src={user_4} alt="" />

                <div>
                    <h3>Emily Stone</h3>
                    <span>Design Agency , USA</span>
                </div>
            </div>
            <p> Design Agency turned our interior space into a work of art .Their innovative ideas ,choice of colours,and attention to functionality have transformed our office into a place where creativity  thrives ,its been a game changer for our team</p>
        </div>
                </li>
            </ul>
        </div>


       
      
    </div>
  )
}

export default Testimonials
