import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import { MessageSent } from '../../UI elements/messageSent/MessageSent';

export const ContactUs = () => {
  const form = useRef();
  const [ isEmailSent, setIsEmailSent ] = useState(false)
  const [ btnValue, setBtnValue ] = useState('Submit')

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnValue('sending...')
    emailjs.sendForm('service_9dxj8of', 'template_s4qgpwt', form.current, 'hULjTWvnGIHlXlJ0Z')
      .then((result) => {
          setIsEmailSent(true)
          setBtnValue('submit')
          setTimeout(() => setIsEmailSent(false) , 3000)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <>
    {
      isEmailSent && <MessageSent />
    }
    
    <form
        className='contact-form'
        ref={form} 
        onSubmit={sendEmail}>
      <label>Name</label>
      <input id='userName' type="text" name="user_name" placeholder='Enter your Name' required/>
      <label>Email</label>
      <input id='useMail' type="email" name="user_email" placeholder='Enter your email' required/>
      <label>Message</label>
      <textarea id='userMessage' name="message" placeholder='Write your message' required/>
      <input type="submit" value={btnValue} />
    </form>
   </>
  );
};