import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
import SuccessContact from './SuccessContact';
import Navbar from './Navbar';
const Contact = () => {
  const formm=useRef();
  const [sent,setSent]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xdeyp2l', 'template_q7ppabu', formm.current, {
        publicKey: 'Znd8WgH_B3nYw3sBl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
    return (
      <>
      <Navbar/>
      <div name='contact' className='w-full h-screen bg-primary flex justify-center items-center p-4'>
        {sent? <SuccessContact/>:<form ref={formm} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full' >
          <div className='pb-8 mt-40'>
  <p className='text-4xl font-bold inline-block border-b-4 border-pink-600 text-gray-300'>Contact</p>
  <p className='text-gray-300 py-4 text-lg'>Submit the form or shoot me an email</p>
</div>

          <input className='bg-[#ccd6f6] p-2 rounded-md' type="name" placeholder='Name' name='name'/>
          <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' name='email' placeholder='Email' />
          <textarea className='bg-[#ccd6f6] p-2 rounded-md' name='message' rows='10' placeholder='Message'/>
          <button className='rounded-md text-white bg-green-600 border-green-600 hover:bg-green-700 border-2 hover:border-green-800 px-4 py-3 my-8 mx-auto flex items-center shadow-emerald-500'>
  Let's Collaborate
</button>

          </form>}
        
      </div>
      <div className='w-full h-40 bg-primary'></div>
      </>

    )
  }
  

export default Contact

