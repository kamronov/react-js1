import React from 'react'
import './Blog.css';
import card1 from '../../assets/img/blog-card1.png'
import card2 from '../../assets/img/blog-card2.png'
import right from '../../assets/img/icon-chevron_right.svg';
import card3 from '../../assets/img/blog-card3.png'
function Blog({change}) {
  return (
    <div>
        <section className={change?'blog dark-mode' : ' blog light-mode'}>
            <div className="container blog__head">
                <div className="blog__title">
                <label htmlFor="" className='blog__label'>Blog</label>
                    <h2>Our latest posts</h2>
                </div>
                <button className='blog__btn'>View all</button>
            </div>
            <ul className="container blog__cards">
            <li className="blog__item">
                <img src={card1} alt="" />
                <span className='blog__job'>Freelance</span>
                <h3 className="blog__card--title">7 freelance mistakes to avoid</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <a href="/top" className='blog__link'>Read more <img  src={right} alt="" /></a>
            </li>
            <li className="blog__item">
                <img src={card2} alt="" />
                <span className='blog__job'>UI/UX Design</span>
                <h3 className="blog__card--title">Brand design process explained</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <a href="/top" className='blog__link'>Read more <img  src={right} alt="" /></a>
            </li>
            <li className="blog__item">
                <img src={card3} alt="" />
                <span className='blog__job'>Business</span>
                <h3 className="blog__card--title">The beginner’s guide to recruiting a Webflow developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                <a href="/top" className='blog__link'>Read more <img  src={right} alt="" /></a>
            </li>
            </ul>
        </section>
    </div>
  )
}

export default Blog