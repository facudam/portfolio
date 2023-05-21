import FotoPerfil from '../../foto-perfil.jpg'
import './Nav.css'

export const Nav = () => {

    const pressHamburgerBtn = () => {
        document.querySelector('.hamburger-menu').classList.toggle('active')
    }

    return(
        <div className='nav-container'>
            <a href='/' className='logo-container'>
                <img src={ FotoPerfil }/>
                <span>Facundo Cáceres</span>
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
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>About me</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
        
    )
}