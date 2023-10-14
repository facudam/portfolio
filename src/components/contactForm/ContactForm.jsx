import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import { MessageSent } from '../../UI elements/messageSent/MessageSent';

export const ContactUs = ({ contact }) => {
  const form = useRef();
  const [ isEmailSent, setIsEmailSent ] = useState(false)
  const [ btnValue, setBtnValue ] = useState(contact.button.inactive)

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnValue(contact.button.active)
    emailjs.sendForm('service_9dxj8of', 'template_s4qgpwt', form.current, 'hULjTWvnGIHlXlJ0Z')
      .then((result) => {
          setIsEmailSent(true)
          setBtnValue(contact.button.inactive)
          setTimeout(() => setIsEmailSent(false) , 3000)
      }, (error) => {
          console.log(error.text);
      });
  };

  // Modificamos el valor de btnValue cuando haya un cambio de idioma.
  useEffect(() => { setBtnValue(contact.button.inactive)}, [ contact.button.inactive ])

  return (
   <>
    {
      isEmailSent && 
        <MessageSent 
          longMessage={ contact.messageSent.long } 
          shortMessage={ contact.messageSent.short }
        />
    }
    
    <form
        className='contact-form'
        ref={ form } 
        onSubmit={ sendEmail }>
      <label>{ contact.name.title }</label>
      <input id='userName' type="text" name="user_name" placeholder={ contact.name.placeholder } required/>
      <label>{ contact.email.title }</label>
      <input id='useMail' type="email" name="user_email" placeholder={ contact.email.placeholder } required/>
      <label>{ contact.message.title }</label>
      <textarea id='userMessage' name="message" placeholder={ contact.message.placeholder } required/>
      <input type="submit" value={ btnValue } />
    </form>
   </>
  );
};