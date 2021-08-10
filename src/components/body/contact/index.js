import React from 'react'
import Separator from '../../common/separator'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? Contact me on any of these platforms</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
