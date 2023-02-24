import React from 'react'
import './Start.css'
function Start() {
  return (
    <div>
        <section className='start'>
            <div className="container">
                <div className="start__title">Start learning today</div>
                <p className='start__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="start__link">
                    <button className='start__get'>Get started</button>
                    <button className='start__contact'>Contact us</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Start