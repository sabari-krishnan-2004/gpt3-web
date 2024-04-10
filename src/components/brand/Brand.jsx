import React from 'react'
import './brand.css';
import { shopify,google,altesian,slack,dropbox } from './import';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>

      <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img src={shopify} alt='google'/>
      </div>
      <div>
        <img src={slack} alt='google'/>
      </div>
      <div>
        <img src={dropbox} alt='google'/>
      </div>
      <div>
        <img src={altesian} alt='google'/>
      </div>

    </div>
  )
}

export default Brand
