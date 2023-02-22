import React from 'react'
import './Trending.css'
function Trending() {
  return (
    <div>
        <section className='trending'>
            <div className="trending__title">
                <label htmlFor="" className='trending__label'>Trending</label>
                <h2>The most popular courses</h2>
                <p className='trending__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            </div>
            <div className="container trending__inner">
                <div className="trending__card">
                    <div className="trending__block">
                    <span className="trending__beginner">Beginner</span>
                    <h4 className='trending__card--title'>Webflow Basics</h4>
                    <span className='trending__card--money'>$ 24.00 USD</span>
                    </div>
                    <button className='trending__btn'>Enroll Course</button>
                </div>
                <div className="trending__card">
                    <div className="trending__block">
                    <span className="trending__beginner">Beginner</span>
                    <h4 className='trending__card--title'>Webflow Interactions Masterclass</h4>
                    <span className='trending__card--money'>$ 55.00 USD</span>
                    </div>
                    <button className='trending__btn'>Enroll Course</button>
                </div>
                <div className="trending__card">
                    <div className="trending__block">
                    <span className="trending__beginner">Beginner</span>
                    <h4 className='trending__card--title'>Advanced CMS and Integrations</h4>
                    <span className='trending__card--money'>$ 38.00 USD</span>
                    </div>
                    <button className='trending__btn'>Enroll Course</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Trending