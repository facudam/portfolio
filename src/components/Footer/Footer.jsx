import './Footer.css'

export const Footer = ({ footer }) => {
    return(
        <footer className='footer'>
            <span>{ footer.title }</span>
            <span>{ footer.subtitle[0] } <a href='https://github.com/facudam/portfolio' target='_blank' rel='noopener noreferrer'>{ footer.subtitle[1] }</a></span>
            
            <a className='attribution' rel='nofollow' target='blank' href="https://storyset.com/work">Work illustrations by Storyset</a> 
        </footer>
    )
}