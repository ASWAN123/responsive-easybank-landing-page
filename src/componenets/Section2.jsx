import React from "react";

function Section2() {

  return (
    <div className="w-full  bg-[#F3F4F6] flex flex-col items-center  md:items-start gap-6 py-6   static  ">
      <div className=" w-4/5 m-auto flex flex-col items-center  md:items-start gap-4  p-6 ">
        <h2 className="text-[25px] font-normal text-center md:text-start">Why choose Easybank?</h2>
        <p className="text-[14px] text-gray-400 text-center md:text-start ">
          We leverage Open Banking to turn your bank account into your financial
          hub.<br/>Control your finances like never before.
        </p>
      </div>
      <div className="w-4/5 m-auto  flex flex-col md:flex-row  gap-6  items-center  ">
        <div className="flex gap-4  flex-col p-4  items-center md:items-start ">
          <img className="w-[60px] " src="./images/icon-online.svg" alt="" />
          <h3>Online Banking</h3>
          <p className="text-gray-400 text-[14px] text-center md:text-start">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="flex gap-4  flex-col p-4  items-center md:items-start ">
          <img className="w-[50px] " src="./images/icon-budgeting.svg" alt="" />
          <h3>Simple Budgeting</h3>
          <p className="text-gray-400 text-[14px] text-center md:text-start">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="flex gap-4  flex-col p-4  items-center md:items-start ">
          <img className="w-[50px] " src="./images/icon-onboarding.svg" alt="" />
          <h3>Fast Onboarding</h3>
          <p className="text-gray-400 text-[14px] text-center md:text-start">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="flex gap-4  flex-col p-4  items-center md:items-start ">
          <img className="w-[50px] " src="./images/icon-api.svg" alt="" />
          <h3>Open API</h3>
          <p className="text-gray-400 text-[14px] text-center md:text-start">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
