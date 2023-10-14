import { ContactLink } from '../contactLinks/ContactLink'
import CV from '../../Downloads/curriculum.pdf'
import { CODING, GMAIL, TWITTER, LINKEDIN, GITHUB } from '../../images'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'


export const Header = ({ header }) => {
    return(
        <header className='main-header' id='header'>
            <div className='introducing-titles'>
                <div className='main-header__titles'>
                    <h1 className='title-font'><span>{ header.title[0] } </span>{ header.title[1] }</h1>
                    <p>{ header.description }</p>
                    <div className='main-header__navigation'>
                        <ContactLink href='https://www.linkedin.com/in/facundo-caceres-dev/' src={ LINKEDIN } alt='linkedin logo' title='linkedin' />
                        <ContactLink href='mailto: facundocaceres.email@gmail.com' src={ GMAIL } alt='gmail logo' title='email' />
                        <ContactLink href='https://github.com/facudam' src={ GITHUB } alt='github logo' title='github'/>
                        <ContactLink href='https://twitter.com/FCaceres15' src={ TWITTER } alt='twitter logo' title='twitter' />
                    </div>
                </div> 
                <div className='main-header__link'>
                    <a href='#projects'><span>{ header.buttons[0] }</span></a>
                    <a download="CV-Facundo-Cáceres-Frontend-Developer" href={ CV }>
                        <span>
                            <FontAwesomeIcon icon={ faDownload } />
                            { header.buttons[1] } 
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