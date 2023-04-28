import React from 'react'

function Section1() {
  return (
    <div className='w-full min-h-screen max-h-screen bg-[#FAFAFA] relative flex overflow-hidden '>
        <div className='w-4/5 m-auto flex items-center  gap-2 p-6'>
            <div className='flex flex-col items-start gap-6 w-[40%] '>
                <h1 className='text-[50px] font-normal '>Next generation digital banking</h1>
                <p className='text-gray-500'>Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.
                </p>
                <button className='hover:opacity-[0.8] px-6 py-2  rounded-3xl bg-gradient-to-r from-green-500 to-blue-300 text-white '>Request invite</button>
            </div>
            <div className=''>
                <img className='absolute  z-[40] top-[-15%] right-[-10%]' src = "./images/image-mockups.png" alt = "desktop-image" />
                <img className='absolute overflow top-[-35%] right-[-40%] ' src="./images/bg-intro-desktop.svg" alt="desktop-image" />
            </div>
            
        </div>
    </div>
  )
}

export default Section1