
import React from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import Hero from './Componenets/Hero/Hero'
import Social from './Componenets/Social/Social'
import Title from './Componenets/Title/Title'
import About from './Componenets/About/About'
import Stats from './Componenets/Stats/Stats'
import Portfolio from './Componenets/Portfolio/Portfolio'
import Testimonials from './Componenets/Testimonials/Testimonials'
import Contact from './Componenets/Contact/Contact'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="conntainer">
      <Social/>
      <Title subTitle='About us' title='What we do ' statement='we provide the perfect solution to your buisness growth'/>
      <About/>
      <Stats/>
      <Title subTitle='Portfolio'  statement='we provide the perfect solution to your buisness growth'/>
      <Portfolio/>
      <Title subTitle='Testimonials' title='see what our customers say about us'/>
      <Testimonials/>
      <Title subTitle='contact us' title='Get in  touch '/>
      <Contact/>
      </div>
      
   
    </div>
  )
}

export default App
