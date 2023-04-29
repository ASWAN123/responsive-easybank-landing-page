import React from 'react'

function Section1() {
  return (
    <div className='w-full min-h-screen max-h-screen md:min-h-[600px] md:max-h-[600px] bg-[#FAFAFA] relative flex overflow-hidden gap-6'>
        <div className='w-4/5 m-auto flex   flex-col-reverse md:flex-row items-center pb-6 gap-2 md:p-6 '>
            <div className='flex flex-col items-center text-center md:text-start md:items-start gap-6 md:w-[40%] mt-[60%] md:mt-0 '>
                <h1 className='text-[30px] md:text-[50px] font-normal '>Next generation digital banking</h1>
                <p className='text-gray-500'>Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.
                </p>
                <button className='hover:opacity-[0.8] px-6 py-2  rounded-3xl bg-gradient-to-r from-green-500 to-blue-300 text-white '>Request invite</button>
            </div>
            <div className='flex flex-col-reverse  md:block '>
                <img className='absolute  -top-[20%] right-0 z-[40] md:top-[-20%] md:right-[-15%]' src = "./images/image-mockups.png" alt = "desktop-image" />
                <img className='absolute  -top-[20%] left-0  scale-[2] md:scale-[1]  md:botton-0 md:left-auto md:top-[-40%] md:right-[-40%] ' src="./images/bg-intro-desktop.svg" alt="desktop-image" />
            </div>
            
        </div>
    </div>
  )
}

export default Section1