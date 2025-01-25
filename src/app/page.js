'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

const page = () => {
  const [isdarkmode, setisdarkmode]=useState(false)
  useEffect(()=>{
    if(localStorage.theme==='dark' ||(!('theme' in localStorage)&& window.
  matchMedia('(preferes-colors-scheme: dark)').matches)){
    setisdarkmode(false)
  }else{
    setisdarkmode(false)
  }

  },[])

  useEffect(()=>{
    if(isdarkmode){
      document.documentElement.classList.add('dark')
      localStorage.theme='dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme=''
    }

  },[isdarkmode])
  return (

    <>
    <Navbar isdarkmode={isdarkmode} setisdarkmode={setisdarkmode}/>
    <Header isdarkmode={isdarkmode}/>
    <About isdarkmode={isdarkmode}/>
    <Services isdarkmode={isdarkmode}/>
    <Work isdarkmode={isdarkmode}/>
    <Contact isdarkmode={isdarkmode}/>
    <Footer isdarkmode={isdarkmode}/>
    </>
  )
}

export default page