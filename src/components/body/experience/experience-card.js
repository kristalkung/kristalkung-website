import React from 'react'
import './experience-card.css'

function ExperienceCard( {item}) {
    return (
        <div className='experience-card'>
            <img src={item.companyLogo} className='experience-logo' alt='logo'/>
            <div className='experience-info'>
                <label className='company-name'>{item.company}</label>
                <div className='experience-dates'>
                    <label>{item.dateJoining} - </label> <label>{item.dateEnd}</label>
                </div>
                <div className='work-desc'>
                    <p>{item.work}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ExperienceCard
