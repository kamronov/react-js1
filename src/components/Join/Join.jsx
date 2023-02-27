import React from 'react';
import './Join.css';
import joinSt from '../../assets/img/join-students.png'
import joinIcon1 from '../../assets/img/join-icon1.svg'
import joinIcon2 from '../../assets/img/join-icon2.svg'
import joinIcon3 from '../../assets/img/join-icon3.svg'
function Join({change}) {
  return (
    <div>
        <section className={change?' dark-mode3 join' : ' join light-mode3'}>
            <div className="container join__inner">
                <div className="join__info">
                    <label htmlFor="" className='join__label'>Join us</label>
                    <h2 className="join__title">
                        Join more than 17,000+ students all over the world
                    </h2>
                    <p className='join__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>

                    <button className='join__btn'>Get started</button>
                </div>
                <img src={joinSt} alt="" className='join__banner' />
            </div>
            <div className="container join__wrapper">
                <div className="join__cards">
                    <img src={joinIcon1}alt="" />
                    <h4 className="join__card--title">
                        Browse our courses
                    </h4>
                    <p className="join__card--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.
                    </p>
                </div>
                <div className="join__cards">
                    <img src={joinIcon2}alt="" />
                    <h4 className="join__card--title">
                    Purchase quickly and securely
                    </h4>
                    <p className="join__card--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.
                    </p>
                </div>
                <div className="join__cards">
                    <img src={joinIcon3}alt="" />
                    <h4 className="join__card--title">
                    Start learning right away
                    </h4>
                    <p className="join__card--text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Join