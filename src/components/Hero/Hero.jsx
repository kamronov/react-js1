import React from 'react'
import './Hero.css'
import hero_ban from '../../assets/img/hero_banner.png'
import play from '../../assets/img/icon-play_circle_filled.png'
import heroTeach from '../../assets/img/hero-teachers.png'
import star from '../../assets/img/icon-star.svg'

function Hero() {
    return (
        <div>
            <section className='hero'>
                <div className="container hero__inner">
                    <div className="hero__become">
                        <h2 className="hero__title">
                            Become an No-Code expert and find a job
                        </h2>
                        <p className="hero__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel molestie magna curabitur tincidunt nunc sit amet.
                        </p>
                        <div className="hero__link">
                            <button className='hero__btn'>Explore Courses</button>
                            <a href="#top" className='hero__vieo--link'>Watch Video <img src={play} alt="" /></a>
                        </div>
                        <div className="hero__teachStar">
                            <img className='hero_teach_img' src={heroTeach} alt="" />
                            <div className="rank">
                            <ul className='hero__star'>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                                <li><img src={star} alt="" /></li>
                            </ul>
                            <div className="star__title">From 3k+ reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__banner">
                        <img src={hero_ban} alt="" />
                    </div>
                </div>
                
                <div className="hero__subtitle">
                Trusted by the world's best companies
                </div>
                <div className="container noCode">
                    <h2 className="noCode__title">
                        No-code Education Platform
                    </h2>
                    <p className="noCode__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                    <button className='noCode__btn'>About us</button>
                </div>
            </section>
        </div>
    )
}

export default Hero