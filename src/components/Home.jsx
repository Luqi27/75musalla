import React from 'react'


import msjd from '../assets/msjid.jpg'
import bis from '../assets/bis.png'

const Home = () => {
  return (
    <div name='Home' className="relative isolate h-screen overflow-hidden pt-14">
      <img
        src={msjd}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className='flex items-center justify-center'>
        <img
          src={bis}
          alt=''
          className=' pt-10 h-1/4 md:h-1/6 w-1/4 md:w-1/6'
        />

      </div>
      <div className=''>
        <div className="mx-auto max-w-2xl py-32 sm:py-24 lg:py-32 px-5">
          <div className="text-center pace-y-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                “The reward of the congregational prayer is twenty seven times greater (than that of the prayer offered by a person alone).”
              </h1>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-center justify-center font-mono'>
              <a href='https://sunnah.com/bukhari:649' target='_blank' className='border-t-2 border-orange-400 font-bold font-mono text-base'>Sahih al-Bukhari</a>
            </div>
          </div>
        </div>     
      </div>
    </div>
  )
}



export default Home