import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} className='w-36 mx-auto mb-2'/>
        </div>
        <div className='flex w-max mx-auto gap-2 items-center  '>
           <Image src={assets.mail_icon} className='w-6 mx-auto mb-2'/>kibetevans78@gamil.com   
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>CopyRight  Evans Kibet. All rights reserved.</p>
            <ul className='flex items-center mx-auto gap-10 mt-4 justify-center sm:mt-0'>
                <li><a href="https://tiktok/code with evans">Github</a></li>
                <li><a href="https://tiktok/code with evans">linkedIn</a></li>
                <li><a href="https://tiktok/code with evans">X</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer