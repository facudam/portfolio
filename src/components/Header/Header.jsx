import { ContactLink } from '../contactLinks/ContactLink'
import { CODING, GMAIL, TWITTER, LINKEDIN, GITHUB } from '../../images'
import './Header.css'
import { ENGLISH } from '../../languages'


export const Header = ({ header, language }) => {

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
                    <a href={ (language === ENGLISH ? 'https://drive.google.com/file/d/154e0ffFfyvFkfmN6rKVzV6hHUxVfWnpo/view' : 'https://drive.google.com/file/d/1JqdGZ-42ok491f5eThx-ow74HUU5sklT/view') } target='_BLANK'>
                        <span>
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