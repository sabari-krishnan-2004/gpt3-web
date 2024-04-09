import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className="gradient__text">Lets build something Amazing with the GPT-3 Open AI</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia officiis porro exercitationem a reprehenderit impedit? Accusamus velit corrupti voluptatem modi, unde ducimus quod et possimus culpa itaque amet vero! Excepturi nisi voluptate sapiente pariatur dicta aliquid eos, laboriosam dolore, quia accusantium rem quisquam? Officia repudiandae quidem, sunt laudantium quis saepe consequuntur totam ipsam beatae architecto mollitia dolores error, eaque dolor.</p>
       

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
