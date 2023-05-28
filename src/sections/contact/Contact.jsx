import './Contact.css'
import { GMAIL } from '../../images/index'

export const Contact = () => {
    return(
        <section className='contact-section'>
            <h2><span>Contact</span> me</h2>
            <p>Let's work together!</p>
            <div className='contact-icons'>
                <a href='https://www.linkedin.com/in/facundo-c%C3%A1ceres/' target='_blank' title='linkedin' rel="noopener noreferrer">
                    <img src='https://icongr.am/devicon/linkedin-original.svg?size=83&color=000000' alt='linkedin logo'/>
                </a>
                <a href='mailto:facundocaceres.email@gmail.com' target='_blank' title='e-mail' rel="noopener noreferrer">
                    <img src={GMAIL} alt='gmail logo' />
                </a>
            </div>
            
        </section>
    )
}