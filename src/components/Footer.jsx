import React from 'react'

const Footer = () => {
  return (
    <div name='Footer'>
        <div className='w-full mt-24 bg-slate-900 text-gray-300 pb-6 px-6'>
            <div className='max-w-[1200] mx-auto grid-cols-2 md:grid-cols-6 border-b-2 border-orange-400 py-8'>
              <div className='font-bold font-mono tracking-wide'>
                <h2>Contact:</h2>
                <p> info@75musalla.site</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer