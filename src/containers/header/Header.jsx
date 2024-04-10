import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className="gradient__text">Lets build something Amazing with the GPT-3 Open AI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam excepturi voluptatum architecto libero corrupti. Optio, sint tenetur. Ipsum sequi dolore, quasi incidunt laboriosam, facere quo maxime officia unde quae aspernatur dolores, aliquam minima dolorem delectus.</p>
       

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email adress'></input>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people have requested access a visit in less than 24 hours</p>
        </div>
       

      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header
