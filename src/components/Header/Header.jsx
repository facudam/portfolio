import { GMAIL } from '../../images/index'
import { ContactLink } from '../contactLinks/ContactLink'
import './Header.css'

export const Header = () => {
    return(
        <header className='main-header' id='header'>
            <div className='main-header__titles'>
                <h1><span>Hi there! </span>I'm Facundo Cáceres</h1>
                <p>A frontend React developer and SEO optimizer based in Buenos Aires, Argentina. Programming and development lover, with an equal ardor for playing guitars and composing music. </p>
                <div className='main-header__navigation'>
                    <ContactLink href='https://www.linkedin.com/in/facundo-caceres-dev/' src='https://icongr.am/devicon/linkedin-original.svg?size=83&color=000000' alt='linkedin logo' title='linkedin' />
                    <ContactLink href='mailto: facundocaceres.email@gmail.com' src={GMAIL} alt='gmail logo' title='email' />
                    <ContactLink href='https://github.com/facudam' src='https://icongr.am/devicon/github-original.svg?size=83&color=000000' alt='github logo' title='github'/>
                    <ContactLink href='https://twitter.com/FCaceres15' src='https://icongr.am/devicon/twitter-original.svg?size=83&color=currentColor' alt='twitter logo' title='twitter' />
                </div>
            </div> 
            <div className='main-header__link'>
                <a href='#projects' className=''><span>Projects</span></a>
            </div>
            
        </header>
    )
}