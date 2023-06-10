import './ContactLink.css'

export const ContactLink = ({ href, src , alt, title }) => {
    return(
        <a  className='contact-link'
            href={ href } target='_blank' rel="noopener noreferrer">
            <img src={ src } alt={ alt }/>
            <span>{ title }</span>
        </a>
    )
}