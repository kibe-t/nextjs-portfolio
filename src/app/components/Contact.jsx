import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] =useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("73a78a8a-0b66-4b33-a10b-450e53352e9f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log(data.message)
        setResult(data.message);
      }
    };
  return (
    <div id='contact' className='w-full px-[12%] py-20 scroll-mt-20 bg-[url("/foo
    ter-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>connect with me </h4>
        <h2 className='text-center text-5xl font-Ovo'>get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
           welcome to my web developement portfolio! explore a collection of projects
           showcasing my expertise in front end developement.
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
               <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='enter your name' required  name='name'/>
               <input  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="email" placeholder='enter your email' required name='email' />
            </div>
            <textarea className='w-full p-4 text-black  outline-none border-[0.5px] border-gray-800 rounded-md mb-6' rows='6' placeholder='enter your mess' required name='message'></textarea>
            <button className='py-3 px-8 w-max  flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>submit now <Image className='w-4' src={assets.right_arrow_white} alt=''/></button>

            <p className='mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact