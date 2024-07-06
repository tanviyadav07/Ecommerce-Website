import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subcribe to our newsletter & stay updated</p>
      <div>
        <input type="email" placeholder='Your Email Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}
