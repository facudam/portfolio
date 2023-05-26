import Perfil from '../../foto-perfil.jpg'
import './Header.css'

export const Header = () => {
    return(
        <header className='main-header'>
            <div className='main-header__titles'>
                <h1><span>Hi there! </span>I'm Facundo Cáceres</h1>
                <p>A frontend React developer based in Buenos Aires - Argentina, with a focus on web applications. I strive to deliver exceptional user experiences through efficient and innovative solutions.</p>
                <div className='main-header__navigation'>
                    <a href='https://www.linkedin.com/in/facundo-c%C3%A1ceres/' target='_blank' title='linkedin' rel="noopener noreferrer">
                        <img src='https://icongr.am/devicon/linkedin-original.svg?size=83&color=000000' alt='linkedin logo'/>
                    </a>
                    <a href='https://github.com/facudam' target='_blank' title='github' rel="noopener noreferrer">
                        <img src='https://icongr.am/devicon/github-original.svg?size=83&color=000000' />
                    </a>
                    <a href='https://twitter.com/FCaceres15' target='_blank' rel="noopener noreferrer" title='twitter'>
                        <img src='https://icongr.am/devicon/twitter-original.svg?size=83&color=currentColor' />
                    </a>
                </div>
            </div>
            
            <div className='main-header__link'>
                <a href='#projects' className=''><span>Projects</span></a>
            </div>
            
        </header>
    )
}