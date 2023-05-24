import Perfil from '../../foto-perfil.jpg'
import './Header.css'

export const Header = () => {
    return(
        <header className='main-header'>
            <div className='main-header__titles'>
                <img src={Perfil} />
                <div className='main-header__titles-texts'>
                    <h1><span>Hi there! </span>I'm Facundo Cáceres</h1>
                    <p>A frontend React developer based in Buenos Aires - Argentina, with a focus on web applications, I strive to deliver exceptional user experiences through efficient and innovative solutions.</p>
                </div>
                
            </div>
            <div className='main-header__link'>
                <a href='/' className=''><span>Projects</span></a>
            </div>
            
        </header>
    )
}