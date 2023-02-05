import React from 'react';
import {Container} from 'reactstrap'
import './Header.css'
const navLinks = [
    {
        display:'Home',
        url:'#home'
    },
    {
        display:'About',
        url:'#home'
    },
    {
        display:'Projects',
        url:'#home'
    },{
        display:'Contact',
        url:'#home'
    },
]
const Header = () =>{
   return  <header className='header'>
        <Container>
            <div className='navigation d-flex align-items-center justify-content-between'>
                <div className='logo'><h5>Mohan</h5></div>
                <div className='nav__menu'>
                <ul className='nav__list'>
                    {navLinks.map((navItem,index) => {
                        return(
                            <li className="nav__item" key={index}>
                        <a href={navItem.url}>{navItem.display}</a>
                    </li>
                        )
                    })}
                </ul>
            </div>
                <div className="nav__right d-flex align-items-center gap-4">
                    <button className='btn'>LetsTalk Something</button>
                    <span className="mobile__menu">
                    <i class="ri-menu-5-line"></i>
                    </span>
                </div>
            </div>
        </Container>
   </header>
}

export default Header ;