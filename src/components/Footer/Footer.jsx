import React from 'react'
import './Footer.css';
import facebook from '../../assets/img/facebook.svg'
import twitter from '../../assets/img/twitter.svg'
import instagram from '../../assets/img/instagram.svg'

function Footer() {
    return (
        <div>
            <section className='footer'>
                <ul className="container footer__list">
                    <li className="footer__item">
                        <label htmlFor="inp">Join our newsletter to stay up to date on features and releases.</label>
                        <div className="footer__form">
                            <input type="text" /><button>Subscribe</button>
                        </div>
                        <p className='footer__inp--text'>and provide consent to receive updates from our company.</p>
                    </li>
                    <li className="footer__item">
                        <h5>Pages</h5>
                        <a href="/" className="footer__link">Home</a>
                        <a href="/" className="footer__link">About</a>
                        <a href="/" className="footer__link">Contact</a>
                        <a href="/" className="footer__link">Blog</a>
                        <a href="/" className="footer__link">Courses</a>
                        <a href="/" className="footer__link">Teachers</a>
                    </li>
                    <li className="footer__item">
                        <h5>CMS Pages</h5>
                        <a href="/" className="footer__link">Blog Post</a>
                        <a href="/" className="footer__link">Blog Categories</a>
                        <a href="/" className="footer__link">Courses Single</a>
                        <a href="/" className="footer__link">Courses Categories</a>
                        <a href="/" className="footer__link">Product Page</a>
                        <a href="/" className="footer__link">Product Categories</a>
                        <a href="/" className="footer__link">Teachers Single</a>
                        <a href="/" className="footer__link">Episode Single</a>
                    </li>
                    <li className="footer__item">
                        <h5>Account Pages</h5>
                        <a href="/" className="footer__link">Login</a>
                        <a href="/" className="footer__link">Sign Up</a>
                        <a href="/" className="footer__link">Forgot Password</a>
                        <a href="/" className="footer__link">Reset Password</a>
                        <a href="/" className="footer__link">Email Confirmation </a>
                    </li>
                    <li className="footer__item">
                        <h5>Utility Pages</h5>
                        <a href="/" className="footer__link">Style Guide</a>
                        <a href="/" className="footer__link">Changelog</a>
                        <a href="/" className="footer__link">Licenses</a>
                        <a href="/" className="footer__link">404</a>
                        <a href="/" className="footer__link">Password</a>
                    </li>
                </ul>
            </section>
            <div className="down__foot">
                <div className="container footer__inner">
                    <p>© Learnico by Minimal Square. Powered by Webflow</p>
                    <div className="footer__social">
                        <a href="/">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="/">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="/">
                            <img src={instagram} alt="" />
                        </a>            </div>
                </div>
            </div>
        </div>
    )
}

export default Footer