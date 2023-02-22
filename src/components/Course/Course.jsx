import React from 'react';
import './Course.css';
import banner1 from '../../assets/img/course_banner1.png';
import banner2 from '../../assets/img/course_banner2.png';
import right from '../../assets/img/icon-chevron_right.svg';

function Course() {
    return (
        <div>
            <section className='course'>
                <div className="container">
                    <div className="course__premium">
                        <img className='course__banner1' src={banner1} alt="" />
                        <div className="course__block">
                            <h2 className="course__title1">
                            Premium courses from the industry leaders
                            </h2>
                            <div className="course__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            </div>
                            <div className="course__link">
                                <button className='course__btn1'>Get started</button>
                                <a href="#top" className='couerse__link1'>Learn more <img src={right} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="course__easily">
                    <img className='course__banner1' src={banner2} alt="" />
                        <div className="course__block">
                            <h2 className="course__title1">
                            Easily find the perfect course for you
                            </h2>
                            <div className="course__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            </div>
                            <div className="course__link">
                                <button className='course__btn1'>Get started</button>
                                <a href="#top" className='couerse__link1'>Learn more <img src={right} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Course