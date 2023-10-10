import React from 'react'


import msjd from '../assets/msjid.jpg'

const Hero = () => {
  return (
    <div>
      <img className='object-fit h-screen sm:h-96 w-min lg:w-full md:h-auto' src={msjd} alt="/" />
      <div class="flex absolute justify-center items-center w-full py-2.5 bottom-72 inset-x-0 text-white text-xs text-center leading-4">
      <p>this is a text</p>

      </div>
    </div>
  )
}



export default Hero

