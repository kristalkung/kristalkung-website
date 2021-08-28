import React from 'react'
import Body from '../body'
import Footer from '../footer'
import Header from '../header'
import './home.css'

function Home() {
  return (
    <div>
      <div className='home'>
        <div> <Header /> </div>
        <div> <Body /> </div>
        <div> <Footer /> </div>
      </div>
    </div>
  )
}

export default Home
