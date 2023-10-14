import './Contact.css'
import { GMAIL } from '../../images/index'
import { ContactUs } from '../../components/contactForm/ContactForm'

export const Contact = ({ contact }) => {
    return(
        <section className='contact-section' id='contact'>
            <h2 className='title-font'><span>{ contact.title[0] }</span> { contact.title[1] }</h2>
            <p>{ contact.description }</p>
            <ContactUs contact={ contact } />
        </section>
    )
}