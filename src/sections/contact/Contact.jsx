import './Contact.css'
import { GMAIL } from '../../images/index'
import { ContactUs } from '../../components/contactForm/ContactForm'

export const Contact = () => {
    return(
        <section className='contact-section' id='contact'>
            <h2 className='title-font'><span>Contact</span> me</h2>
            <p>Let's work together!</p>
            <ContactUs />
        </section>
    )
}