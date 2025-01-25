import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center  mx-auto h-screen
    flex flex-col items-center justify-center gap-4  '>
        <motion.div
        initial={{ scale:0}}
        whileInView={{ scale:1 }}
        transition={{duration:0.8,type:'spring',stiffness:100}}>
            <Image src={assets.profile_img} className='rounded-full w-32'/>  
        </motion.div>
        <h3
        
             className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi i'am Evans Kibet 
            <Image src={assets.hand_icon} className='rounded-full w-6'/>
        </h3>
        <motion.h1
         initial={{ y:-30, opacity:0}}
         whileInView={{ y:0, opacity:1 }}
         transition={{duration:0.8, delay:0.5}}
        
        className='text-3xl  sm:text-6xl lg:text-[-66px] f0nt-Ovo'>front end web developer in kenya</motion.h1>
        <motion.p
         initial={{ opacity:0}}
         whileInView={{opacity:1 }}
         transition={{duration:0.7, delay:0.6}} className='max-w-2xl mx-auto font-Ovo'>
            iam a front- end developer based in nairobi kenya with 2 years of expirience
            in multiple companies like safaricom, tack and trace airtel.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
             initial={{y:30, opacity:0}}
             whileInView={{y:0,opacity:1 }}
             transition={{duration:0.1, delay:0.6}} className='px-10 py-3 border border-white rounded-full border-gray-500
            bg-black text-white flex items-center gap-2' href="#contact">contact me <Image src={assets.right_arrow_white} className='w-4'/></motion.a>
            <motion.a
             initial={{y:30, opacity:0}}
             whileInView={{y:0,opacity:1 }}
             transition={{duration:0.1, delay:1.2}} href="/sample" download className='
            items-center px-10 py-3 border border-gray-500 flex rounded-full gap-2'>my resume <Image src={assets.download_icon} className='w-4'/></motion.a>
        </div>
    </div>
  )
}

export default Header