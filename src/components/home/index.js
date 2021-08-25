import React from 'react'
import Body from '../body'
import Footer from '../footer'
import Header from '../header'
import './home.css'

function Home() {
    return (
        <div>
            <div> <Header /> </div>
            <div className='home'>
                <div> <Body /> </div>
                <div> <Footer /> </div>
            </div>
            
        </div>
    )
}

export default Home
