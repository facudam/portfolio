import { useState } from 'react'
import './Nav.css'
import { Logo } from '../../UI elements/logo/Logo'

export const Nav = () => {

    const [ menuIsPressed, setMenuIsPressed ] = useState(false)

    const pressHamburgerBtn = () => {
        document.querySelector('.hamburger-menu').classList.toggle('active-hamburger')
        const menuNav = document.querySelector('nav');

        if (menuIsPressed) {
            setMenuIsPressed(false)
            menuNav.style.setProperty('right', '-100%')
        } else {
            setMenuIsPressed(true)
            menuNav.style.setProperty('right', '0')
        }
    }

    return(
        <div className='nav-container'>
            <a href='/' className='logo-container'>
                <Logo />
            </a>
            
            <div
                onClick={pressHamburgerBtn}
                className='hamburger-menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>
                <ul>
                    <li onClick={pressHamburgerBtn}><a href='#header' noopener noreferrer>Home</a></li>
                    <li onClick={pressHamburgerBtn}><a href='#projects' rel='noopener noreferrer'>Projects</a></li>
                    <li onClick={pressHamburgerBtn}><a href='#skills' rel='noopener noreferrer'>Skills</a></li>
                    <li onClick={pressHamburgerBtn}><a href='#about' rel='noopener noreferrer'>About me</a></li>
                    <li onClick={pressHamburgerBtn}><a href='#contact' rel='noopener noreferrer'>Contact</a></li>
                </ul>
            </nav>
        </div>
        
    )
}