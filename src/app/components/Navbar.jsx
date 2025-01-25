
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isdarkmode, setisdarkmode}) => {
    const sidemenuref= useRef();
    const [isscroll,setisscroll]=useState(false)
    const openmenu=()=>{
        sidemenuref.current.style.transform='translateX(-16rem)'
    }
    const closemenu=()=>{
        sidemenuref.current.style.transform='translateX(16rem)'
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                setisscroll(true)

            }else{
                setisscroll(false)

            }
        })

    },[])
  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 z-10 translate-y-[-80%] dark:hidden'>
         <Image src={assets.header_bg_color} alt='' className='w-full'/>
      </div>
       <nav className={`w-full  fixed px-5 py-4 lg:px-8 xl:px-[-8%]  flex items-center
           justify-between z-50 ${isscroll? "bg-white bg-opacity-50 backdrop-blur shadow-sm dark:bg-darkTheme":""}`}>
          <a href="#top">
             <Image src={ isdarkmode?assets.logo_dark:assets.logo} className='w-28 cursor-pointer mr-14'/>
          </a>
           <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
           ${isscroll?"": " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}
             
              `}>
              <li><a className='font-Ovo' href="#top">Home</a></li>
               <li><a className='font-Ovo' href="#about">About me</a></li>
               <li><a className='font-Ovo' href="#services">Service</a></li>
                <li><a className='font-Ovo' href="#work">My work</a></li>
               <li><a className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>
            <div className='flex item-center gap-4'>
               <button onClick={()=>setisdarkmode(prev=> !prev)}>
                 <Image src={isdarkmode?assets.sun_icon :assets.moon_icon} className='w-6'/>
               </button>
               <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50' href="#contact">Contact <Image src={isdarkmode?assets.arrow_icon_dark:assets.arrow_icon} className='w-3'/></a>
               <button className='block md:hidden ml-3'>
                 <Image onClick={openmenu} src={assets.menu_black} className='w-6 '/>
               </button>
            </div>
      
            <ul ref={sidemenuref} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
                w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
               <div onClick={closemenu} className='absolute top-6 right-6'>
                  <Image src={isdarkmode?assets.close_white:assets.close_black} className='w-5 cursor-pointer'/>
               </div>
               <li><a onClick={closemenu} className='font-Ovo' href="#top">Home</a></li>
               <li><a onClick={closemenu} className='font-Ovo' href="#about">About me</a></li>
               <li><a onClick={closemenu} className='font-Ovo' href="#services">Service</a></li>
               <li><a onClick={closemenu} className='font-Ovo' href="#work">My work</a></li>
               <li><a onClick={closemenu} className='font-Ovo' href="#contact">Contact me</a></li>
           </ul>
        </nav>
    </>
  )
}

export default Navbar