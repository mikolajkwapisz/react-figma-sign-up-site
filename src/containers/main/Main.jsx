import React from 'react'
import './main.css'
import googlePlay from '../../assets/image/google-play.svg'
import appStore from '../../assets/image/apple-store.svg'

const Main = () => {
  return (
    <main className='home__main'>
      <div className='home__main--content'>
        <div className="home__main--content--text">
          <h1>Say hello to the world</h1>
          <p className='p__font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quos, fugiat ad, dignissimos praesentium cumque odio ut cupiditate culpa quae soluta </p>
        <button 
          className='home__main--content--text--button'
          role='button'>
            <p className='p__font'>Sign up for free</p></button>
            </div>
        <div className="home__main--content--download">
          <img src={appStore}/>
          <img src={googlePlay}/>
        </div>
      </div>
    </main>
  )
}

export default Main