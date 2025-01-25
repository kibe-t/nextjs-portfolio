import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-20 scroll-mt-20'>
         <h4 className='text-center mb-2 text-lg font-Ovo'>my portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
           welcome to my web developement portfolio! explore a collection of projects
           showcasing my expertise in front end developement.
        </p>

        <div className='grid grid-col-auto my-10 gap-5'>
            {workData.map((project,index)=>(
                <div className=' bg-orange-800 z-index-5056 aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                relative  cursor-pointer group' key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute
                    bottom-5 left1/2 -translate-x-1/2 py-3 px-5 flex items-center
                    justify-between duration-500 group-hover:bottom-7'>
                       <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                          
                        </div>
                        <div>
                           <Image src={assets.send_icon} className='w-5'/>
                        </div>
                    </div>
                    

                </div>
            ))}
        </div>
        <a href="" className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20
        hover:bg-lightHover duration-500'>
            show more <Image src={assets.right_arrow_bold} alt=''/>
        </a>
    </div>
  )
}

export default Work