import React from 'react';
import './Comment.css'
import blackStar from '../../assets/img/black-star.svg'
import commnentAva from '../../assets/img/comment-ava.png'
function Comment({change}) {
  return (
    <div>
      <section className={change?'comment dark-mode' : 'comment light-mode'}>
        <div className="container comment__inner">
          <div className="comment__title">
            <label htmlFor="" className='comment__label'>Testimonials</label>
            <h2>What our students say</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>

          <div className="comment__cards">
            <div className="commnet__blank">
              <ul className='comment__star'>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
              </ul>
              <p className='comment__card--text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className="commnet__ava">
                <img src={commnentAva} alt="" />
                <div className="ava__text">
                  <span className='ava__name'>Orlando Diggs</span>
                  <p className='ava__proff'>Junior UI Designer, @Company</p>
                </div>
              </div>
            </div>
            <div className="commnet__blank">
              <ul className='comment__star'>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
              </ul>
              <p className='comment__card--text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className="commnet__ava">
                <img src={commnentAva} alt="" />
                <div className="ava__text">
                  <span className='ava__name'>Mollie Hall</span>
                  <p className='ava__proff'>Design System Manager, @Company</p>
                </div>
              </div>
            </div>
            <div className="commnet__blank">
              <ul className='comment__star'>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
                <li>
                  <img src={blackStar} alt="" />
                </li>
              </ul>
              <p className='comment__card--text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

              <div className="commnet__ava">
                <img src={commnentAva} alt="" />
                <div className="ava__text">
                  <span className='ava__name'>Lori Bryson</span>
                  <p className='ava__proff'>UX Designer, @Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comment