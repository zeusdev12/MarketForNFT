import React from 'react'
import Footer from "../components/Footer"

const Support = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className='mt-[120px] lg:mt-[200px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1200px]'>
        <div className='text-center lg:w-[560px] mx-auto'>
          <p className='text-white text-[36px] lg:text-[62px] font-gilroy font-semibold leading-[40px] lg:leading-[65px]'>Contact us and we <br /> will help you</p>
          <div className='flex flex-col lg:flex-row mt-[40px] lg:mt-[60px] gap-2 lg:gap-4'>
            <input
              type="name"
              name="name"
              id="name"
              className="block w-full lg:w-[260px] h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
              placeholder="Name"
              aria-describedby="name-description"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full lg:w-[285px] h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
              placeholder="Email Address"
              aria-describedby="email-description"
            />
          </div>
          <div className='mt-[8px] lg:mt-[16px]'>
            <input
              type="subject"
              name="subject"
              id="subject"
              className="block w-full lg:w-[560px] h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
              placeholder="Subject"
              aria-describedby="subject-description"
            />
          </div>
          <div className='mt-[8px] lg:mt-[16px]'>
            <input
              type="message"
              name="message"
              id="message"
              className="block w-full lg:w-[560px] h-[168px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
              placeholder="Message"
              aria-describedby="message-description"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Support;