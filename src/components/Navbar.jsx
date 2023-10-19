import React, {useState} from 'react';
import {MenuIcon, InboxIcon, XIcon} from '@heroicons/react/outline';
import {Link, animateScroll as scroll, } from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)


  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl pl-5'>75 MUSALLA</h1>
          <ul className='hidden md:flex'>
          <li className='cursor-pointer'><Link to="Home" smooth={true} duration={500}>Home</Link></li>
          <li className='cursor-pointer'><Link to="Table" smooth={true} offset={-10} duration={500}>Salah</Link></li>
          <li className='cursor-pointer'><Link to="Footer" smooth={true} offset={200} duration={500}>Contact</Link></li>
        
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
{/*          <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
        <button className='px-8 py-3'>Sign Up</button> */}
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>


    <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Home" smooth={true} duration={500}>Home</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Table" smooth={true} offset={-10} duration={500}>Salah</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="Footer" smooth={true} offset={200} duration={500}>Contact</Link></li>

      <div className='flex flex-col my-4'>
{/*        <button className='bg-transparent tex-indigo-600 px-8 py-3 mb-4'> Sign In</button>
        <button className='px-8 py-3'>Sign Up</button>  */}
      </div>
    </ul>
  </div>
  )
}

export default Navbar