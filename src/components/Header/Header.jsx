import React from 'react';
import './Header.css';
import search from '../../assets/img/icon-search.png'
import shopping_cart from '../../assets/img/icon-shopping_cart.png'

function Header({setData,change}) {
    return (
        <div>
            <header className={change?' header dark-mode': 'header light-mode'}>
            <div className="container header__inner">
            <nav>
                <ul className='header__list'>
                    <li>
                        <a href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#top">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#top">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#top">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#top">
                            Courses
                        </a>
                    </li>
                </ul>

                <div className="search_side">
                    <a href="#top"><img src={search} alt="" />Search</a>
                    <a href="#top"><img src={shopping_cart} alt="" />Cart</a>
                    <button onClick={()=>setData(!change)} className='header_mode'>Mode</button>
                </div>
            </nav>
            </div>
        </header>
        </div>
    )
}

export default Header