import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_9twg1bk', 'template_n5gf1af', form.current, {
          publicKey: 'oBxMbYFqGQSNhMLbH',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div>
      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <input name="from_name" type="text" placeholder="Your Name" required className="h-12 rounded-lg bg-lightBrown px-2"/>
        <input name="from_email" type="email" placeholder="Your Email" required className="h-12 rounded-lg bg-lightBrown px-2"/>
        <textarea name="message" type="text" placeholder="Message" rows="9" cols="50" required className="rounded-lg bg-lightBrown p-2"/>
        <button type="submit" className="w-full rounded-lg border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">Send</button>
      </form>
    </div>
  )
}

export default ContactForm