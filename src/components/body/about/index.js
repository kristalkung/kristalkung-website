import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello there 👋, I'm 
          <br /> <span className='info-name'>Kristal Kung</span>.
          <br /> Software engineer 💡
          <br /> Home cook 🍔  Reader 📚 
          <br /> Ice cream enthusiast 🍦
        </div>
        <div className='about-photo'>
          <img className='picture' src={require('../../../static/img/about-pic.png').default} alt=''/>
        </div>
      </div>
      <SocialContact />
    
    </div>
  )
}

export default About
