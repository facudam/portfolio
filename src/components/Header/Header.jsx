import { ContactLink } from '../contactLinks/ContactLink'
import CV from '../../Downloads/curriculum.pdf'
import { DEVELOPER, CODING, GMAIL, TWITTER, LINKEDIN, GITHUB } from '../../images'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'


export const Header = () => {
    return(
        <header className='main-header' id='header'>
            <div className='introducing-titles'>
                <div className='main-header__titles'>
                    <h1 className='title-font'><span>Hi there! </span>I'm Facundo Cáceres</h1>
                    <p>A frontend React developer and SEO optimizer based in Buenos Aires, Argentina. Programming and development lover, with an equal ardor for playing guitars and composing music. </p>
                    <div className='main-header__navigation'>
                        <ContactLink href='https://www.linkedin.com/in/facundo-caceres-dev/' src={ LINKEDIN } alt='linkedin logo' title='linkedin' />
                        <ContactLink href='mailto: facundocaceres.email@gmail.com' src={ GMAIL } alt='gmail logo' title='email' />
                        <ContactLink href='https://github.com/facudam' src={ GITHUB } alt='github logo' title='github'/>
                        <ContactLink href='https://twitter.com/FCaceres15' src={ TWITTER } alt='twitter logo' title='twitter' />
                    </div>
                </div> 
                <div className='main-header__link'>
                    <a href='#projects'><span>Projects</span></a>
                    <a download="CV-Facundo-Cáceres-Frontend-Developer" href={ CV }>
                        <span>
                            <FontAwesomeIcon icon={ faDownload } />
                            My Resume 
                        </span>
                    </a>
                </div>
            </div>
            <div className='introducing-image'>
                <img  src={ CODING } alt='developer'/>
            </div>  
        </header>
    )
}