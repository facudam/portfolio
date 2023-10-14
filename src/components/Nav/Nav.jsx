import { useState } from 'react'
import './Nav.css'
import { Logo } from '../../UI elements/logo/Logo'
import { ARGENTINA, REINOUNIDO } from '../../images/index'
import { ENGLISH, SPANISH } from '../../languages'

export const Nav = ({ nav, setLanguage }) => {

    const [ isMenuPressed, setIsMenuPressed ] = useState(false)

    const pressHamburgerBtn = () => {
        document.querySelector('.hamburger-menu').classList.toggle('active-hamburger')
        const menuNav = document.querySelector('nav');

        if (isMenuPressed) {
            setIsMenuPressed(false)
            menuNav.style.setProperty('right', '-100%')
        } else {
            setIsMenuPressed(true)
            menuNav.style.setProperty('right', '0')
        }
    }

    const switchLanguage = (lan) => {
       setLanguage(lan)
       pressHamburgerBtn()
    }

    return(
        <div className='nav-container'>
            <a href='/' className='logo-container'>
                <Logo />
            </a>
            
            <div
                onClick={ pressHamburgerBtn }
                className='hamburger-menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
                <ul>
                    <li onClick={pressHamburgerBtn}><a href='#header' rel='noopener noreferrer'>{ nav[0] }</a></li>
                    <li onClick={pressHamburgerBtn}><a href='#projects' rel='noopener noreferrer'>{ nav[1] }</a></li>
                    <li onClick={pressHamburgerBtn}><a href='#skills' rel='noopener noreferrer'>{ nav[2] }</a></li>
                    <li onClick={pressHamburgerBtn}><a href='#about' rel='noopener noreferrer'>{ nav[3] }</a></li>
                    <li onClick={pressHamburgerBtn}><a href='#contact' rel='noopener noreferrer'>{ nav[4] }</a></li>
                    <li className='flags-ctn'>
                        <img 
                            onClick={() => switchLanguage(SPANISH)}
                            src={ ARGENTINA } 
                            alt='argentina' 
                        />
                        <img
                            onClick={() => switchLanguage(ENGLISH)}
                            src={ REINOUNIDO } 
                            alt='united kingdom'
                        />
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}