import FotoPerfil from '../../foto-perfil.jpg'
import './Nav.css'

export const Nav = () => {
    return(
        <div className='nav-container'>
            <div className='logo-container'>
                <img src={ FotoPerfil }/>
                <span>Facundo Cáceres</span>
            </div>
            <div className='hamburger-menu'>
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