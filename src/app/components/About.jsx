import { assets, infoList, toolsData } from '@/assets/assets'

import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1}}
    
       id='about' className='w-full px-[12%] py-20 scroll-mt-12'>
        <motion.h4
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.3}}
        
        className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
        <motion.h2
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5, delay:0.5}}
        
        className='text-center text-5xl font-Ovo'>About me</motion.h2>
        <motion.div
         initial={{opacity:0,scale:0.9}}
         whileInView={{opacity:1,scale:1}}
         transition={{duration:0.6, delay:0.5}}
        
          className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>iam an expireinced front end developer with over 
                    2 years of proffetional experties in the field .through out
                    my career, i have had the priviledge of collaborating with 
                    prestigious organizations, contributing to there success and growth.
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark,title,description,index})=>(
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                        hover:bg-lightHover hover:translate-y-1 duration-500 hover:shadow-black'>
                            <Image src={icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4>Tools i used</h4>
                <ul className='flex gap-3 items-center sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <li key={index} className='flex items-center justify-center
                        w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer
                        hover:translate-y-1 duration-500'>
                            <Image src={tool} alt='' className='w-5 sm:w-7'/>
                           
                        </li>

                    ))}
                </ul>

            </div>
        </motion.div>
    </motion.div>
  )
}

export default About