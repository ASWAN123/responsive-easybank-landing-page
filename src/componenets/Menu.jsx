import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';


function Menu() {
  const [showMenu ,  setShowMenu] = useState(true)

  return (
    <div className='bg-white w-full  sticky z-[99] '>
      <div className='w-[90%] md:w-4/5 m-auto flex justify-between items-center px-1 py-6  md:px-6 md:py-0  '>
          <img src="./images/logo.svg" alt="" />
          { !showMenu && <button onClick={()=> {setShowMenu(true)}} ><RxHamburgerMenu size={25} className=' md:hidden cursor-pointer '  /></button> } 
          { showMenu && <button onClick={()=> {setShowMenu(false)}} ><IoClose size={25} className=' md:hidden cursor-pointer '  /></button> }
          {/* desktop */}
          <ul className='hidden md:flex flex-col md:flex-row  gap-8 '>
              <li className='text-gray-400 md:border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>Home</li>
              <li className='text-gray-400 md:border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>About</li>
              <li className='text-gray-400 md:border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>Contact</li>
              <li className='text-gray-400 md:border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>Blog</li>
              <li className='text-gray-400 md:border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>Careers</li>
          </ul>

          {/* mobile */}
          {
            showMenu && 
          <ul className=' absolute top-[100px] w-[85%] p-4 shadow-2xl  md:hidden flex flex-col md:flex-row items-center  gap-2 bg-white  rounded-lg '>
              <li className='text-gray-400  text-[18px] font-normal hover:text-green-400 px-1 py-2 cursor-pointer '>Home</li>
              <li className='text-gray-400  text-[18px] font-normal hover:text-green-400 px-1 py-2 cursor-pointer '>About</li>
              <li className='text-gray-400  text-[18px] font-normal hover:text-green-400 px-1 py-2 cursor-pointer '>Contact</li>
              <li className='text-gray-400  text-[18px] font-normal hover:text-green-400 px-1 py-2 cursor-pointer '>Blog</li>
              <li className='text-gray-400  text-[18px] font-normal hover:text-green-400 px-1 py-2 cursor-pointer '>Careers</li>
          </ul>
          }
          <button className='hidden md:block px-6 py-2  rounded-3xl bg-gradient-to-r  from-green-500 hover:opacity-[0.8] to-blue-300 text-white '>Request invite</button>
      </div>
    </div>
  )
}

export default Menu