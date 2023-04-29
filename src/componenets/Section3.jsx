import React from "react";

function Section3() {
  return (
    <div className="w-full  bg-[#FAFAFA] flex flex-col gap-6 py-6">
      <div className=" w-[90%] md:w-4/5 m-auto flex flex-col gap-8  ">
        <h3 className="text-[20px] font-normal">Latest Articales</h3>

        <div className="flex flex-col md:flex-row gap-6 ">

          <div className="flex  flex-col gap-2 bg-white  rounded-t-lg  ">
            <img className="h-[200px] md:h-[150px] rounded-t-lg" src="./images/image-currency.jpg" alt="" />
            <div className="flex flex-col gap-2 p-4 ">
              <span className="text-gray-400 text-[12px]">By Claire Robinson</span>
              
                <h4 className=" hover:cursor-pointer hover:text-[#31D35C] text-[18px] text-gray-600 font-normal ">Receive money in any currency with no fees</h4>
                <p className="text-gray-400 text-[14px] px-1">
                The world is getting
                smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="flex  flex-col gap-2 bg-white rounded-t-lg">
            <img className="h-[200px] md:h-[150px] rounded-t-lg" src="./images/image-restaurant.jpg" alt="" />
            <div className="flex flex-col gap-2 p-2">
              <span className="text-gray-400 text-[12px]">By Wilson Hutton</span>
              
                <h4 className="hover:cursor-pointer  hover:text-[#31D35C] text-[18px] text-gray-600 font-normal ">Treat yourself without worrying about money</h4>
                <p className="text-gray-400 text-[14px] px-1">
                Our simple budgeting
                feature allows you to separate out your spending and set
                realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="flex  flex-col gap-2 bg-white rounded-t-lg ">
            <img className="h-[200px] md:h-[150px] rounded-t-lg" src="./images/image-plane.jpg" alt="" />
            <div className="flex flex-col gap-2 p-2">
              <span className="text-gray-400 text-[12px]">By Wilson Hutton</span>
             
                <h4 className="hover:cursor-pointer  hover:text-[#31D35C] text-[18px] text-gray-600 font-normal ">Take your Easybank card wherever you go</h4>
                <p className="text-gray-400 text-[14px] px-1">
                We want you to enjoy
                your travels. This is why we don’t charge any fees on purchases
                while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div className="flex  flex-col gap-2 bg-white rounded-t-lg ">
            <img className="h-[200px] md:h-[150px] rounded-t-lg " src="/images/image-confetti.jpg" alt="" />
            <div className="flex flex-col gap-2 p-2">
              <span className="text-gray-400 text-[12px]">By Claire Robinson</span>
              
                <h4 className="hover:cursor-pointer  hover:text-[#31D35C] text-[18px] text-gray-600 font-normal ">Our invite-only Beta accounts are now live!</h4>
                <p className="text-gray-400 text-[14px] px-1">
                After a lot of hard
                work by the whole team, we’re excited to launch our closed beta.
                It’s easy to request an invite through the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
