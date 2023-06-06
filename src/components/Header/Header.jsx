import { GMAIL } from '../../images/index'
import './Header.css'

export const Header = () => {
    return(
        <header className='main-header' id='header'>
            <div className='main-header__titles'>
                <h1><span>Hi there! </span>I'm Facundo Cáceres</h1>
                <p>A frontend React developer and SEO optimizer based in Bs As - Argentina; with a focus on web applications. I really love programming and development as much as I love playing guitars and composing music. </p>
                <div className='main-header__navigation'>
                    <a href='https://www.linkedin.com/in/facundo-c%C3%A1ceres/' target='_blank' title='linkedin' rel="noopener noreferrer">
                        <img src='https://icongr.am/devicon/linkedin-original.svg?size=83&color=000000' alt='linkedin logo'/>
                    </a>
                    <a href='mailto: facundocaceres.email@gmail.com' rel="noopener noreferrer" title='email'>
                        <img src={GMAIL} alt='gmail logo'/>
                    </a>
                    <a href='https://github.com/facudam' target='_blank' title='github' rel="noopener noreferrer">
                        <img src='https://icongr.am/devicon/github-original.svg?size=83&color=000000' alt='github logo' />
                    </a>
                    <a href='https://twitter.com/FCaceres15' target='_blank' rel="noopener noreferrer" title='twitter'>
                        <img src='https://icongr.am/devicon/twitter-original.svg?size=83&color=currentColor' alt='twitter logo'/>
                    </a>
                </div>
            </div> 
            <div className='main-header__link'>
                <a href='#projects' className=''><span>Projects</span></a>
            </div>
            
        </header>
    )
}