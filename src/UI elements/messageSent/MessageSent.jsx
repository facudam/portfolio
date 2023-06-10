import { useEffect } from 'react'
import './MessageSent.css'

export const MessageSent = () => {

    useEffect(() => {
        const message = document.querySelector('.message-text');
        if (window.outerWidth > 1220) {
            message.innerHTML = 'Message successfully sent!'
        }
    }, [])
    
    return(
        <div className='message-sent'>
            <span className='message-text'>sent!</span>
            <img src='https://icongr.am/fontawesome/check.svg?size=24&color=ffffff' alt='check' />
        </div>
    )
}