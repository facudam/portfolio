import { useEffect, useState } from 'react'
import './MessageSent.css'

export const MessageSent = ({ shortMessage, longMessage }) => {
    const [ shippingNotification, setShippingNotification ] = useState(shortMessage)


    useEffect(() => {
        if (window.outerWidth > 1220) {
            setShippingNotification(longMessage)
        }
    }, [ longMessage ])
    
    return(
        <div className='message-sent'>
            <span className='message-text'>{ shippingNotification }</span>
            <img src='https://icongr.am/fontawesome/check.svg?size=24&color=ffffff' alt='check' />
        </div>
    )
}