import './Footer.css'

export const Footer = () => {
    return(
        <footer className='footer'>
            <span>Developed by Facundo Cáceres - 2023</span>
            <span>Portfolio <a href='https://github.com/facudam/portfolio' target='_blank' rel='noopener noreferrer'>code</a></span>
            
            <a className='attribution' rel='nofollow' target='blank' href="https://storyset.com/work">Work illustrations by Storyset</a> 
        </footer>
    )
}