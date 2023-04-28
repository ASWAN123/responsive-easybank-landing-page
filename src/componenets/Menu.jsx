import React from 'react'

function Menu() {
  return (
    <div className='bg-white w-full  sticky z-[99] '>
      <div className='w-4/5 m-auto flex justify-between items-center px-6 py-0 '>
          <img src="./images/logo.svg" alt="" />
          <ul className='flex sm:flex-col md:flex-row  gap-8 '>
              <li className='text-gray-400 border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>Home</li>
              <li className='text-gray-400 border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>About</li>
              <li className='text-gray-400 border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>Contact</li>
              <li className='text-gray-400 border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>Blog</li>
              <li className='text-gray-400 border-b-4 border-white px-1 py-6  hover:border-b-3 hover:border-green-400  cursor-pointer '>Careers</li>
          </ul>
          <button className=' px-6 py-2  rounded-3xl bg-gradient-to-r  from-green-500 hover:opacity-[0.8] to-blue-300 text-white '>Request invite</button>
      </div>
    </div>
  )
}

export default Menu