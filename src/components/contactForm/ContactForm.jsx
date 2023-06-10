import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9dxj8of', 'template_s4qgpwt', form.current, 'hULjTWvnGIHlXlJ0Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form
        className='contact-form'
        ref={form} 
        onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Enter your Name' />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Enter your email'/>
      <label>Message</label>
      <textarea name="message" placeholder='Write your message'/>
      <input type="submit" value="Submit" />
    </form>
  );
};