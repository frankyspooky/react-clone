import React from 'react'
import './Contact.css'
import location from'../../assets/location.png'
import mail from '../../assets/mail1.png'
import mail_2 from '../../assets/mail2.png'
import phone from '../../assets/phone1.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d3b385ed-18c4-4ea8-94ab-8a89960a814c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.data();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };








  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={mail} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. your feedback , questions and suggestions are importat to us as we strive to provide exceptional service  to our university community</p>

        <ul>
          <li> <img src={mail_2} alt="" />  Contact @fbbidoo004@gmail.com</li>
          <li>  <img src={phone} alt="" />020-274-4003</li>
          <li> <img src={location} alt="" />Massachusetts AVe, cambridge <br />MA 02139 , United States</li>
        
        
        
      </ul>
      </div>
      
      <div className="contact-col">
        <form onSubmit={onSubmit} > 
          <label> Your name</label>
          <input type="text"  name='name' placeholder=' Enter your name' required/>
          <label> Phone Number</label>
          <input type="text" name='phone' placeholder='Enter your mobile number'required />
          <label> Write your messages here</label>
          <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'> Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
      
    </div>
  )
}

export default Contact
