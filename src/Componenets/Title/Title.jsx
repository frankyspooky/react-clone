import React from 'react'
import'./Title.css'

const Title = ({subTitle,title,statement}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
        <h3>{statement}</h3>
      
    </div>
  )
}

export default Title
