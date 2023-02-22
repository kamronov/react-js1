import React from 'react'
import './Benefit.css'
import benBanner from '../../assets/img/benefit_banner.png'
import benHuman from '../../assets/img/benefit-human.png'
import benSmile from '../../assets/img/benefit-smile.png'
import benIcon1 from '../../assets/img/benefit-icon1.png'
import benUser from '../../assets/img/join-icon1.svg'


function Benefit() {
  return (
    <div>
        <section className='benefit'>
            <div className="benefit__title">
                <label htmlFor="" className='benefit__label'>Benefits</label>
                <h2>Grow your knowledge from best teachers in the industry</h2>
                <p className='benefit__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            </div>
            <div className="container benefit__inner">
                    <div className="benefit__block">
                        <div className="benefit__card">
                            <img src={benIcon1} alt="" />
                            <h4>Over 430+ hours of lessons</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="benefit__card">
                            <img src={benUser} alt="" />
                            <h4>40+ teachers</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="benefit__block">
                        <img src={benBanner} alt="" />
                    </div>
                    <div className="benefit__block">
                    <div className="benefit__card">
                            <img src={benSmile} alt="" />
                            <h4>Online community</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                        <div className="benefit__card">
                            <img src={benHuman} alt="" />
                            <h4>1-on-1 coaching</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
            </div>
            <button className='benefit__btn'>Get started</button>
        </section>
    </div>
  )
}

export default Benefit