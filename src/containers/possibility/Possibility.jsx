import React from 'react'
import './possibility.css'
import  possibilityimage  from '../../assets/possibility.png'

const Possibility = () => (
  
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityimage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyong imagination</h1>
        <p>Swiftly resolving doubts and suspicions is vital for building trust. Clear communication, transparency, and honesty are key. By addressing concerns promptly, relationships can strengthen and collaboration can flourish.</p>
        <h4>Request early access to get started</h4>   
      </div>
    </div>
  );

export default Possibility