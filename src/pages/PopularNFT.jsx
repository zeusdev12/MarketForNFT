import React from 'react'
import Cards from "../assets/cards.png"
import Section1Card1 from "../assets/cards/section1card1.png"
import Section1Card2 from "../assets/cards/section1card2.png"
import Section1Card3 from "../assets/cards/section1card3.png"
import Section1Card4 from "../assets/cards/section1card4.png"
import "./PopularNFT.css"

const PopularNFT = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className='lg:mt-24 flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1200px]'>
        {/* Header section */}
        <div className="relative block items-center lg:max-w-[1200px] overflow-hidden">
          <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[904px] lg:w-[1200px] mt-[300px] lg:ml-[24px]">
            <img
              src={Cards}
              alt="/"
            />
          </div>
          <p className='relative font-gilroy -mt-[230px] lg:-mt-[260px] font-semibold text-[54px] leading-[56px] lg:text-[76px] text-center lg:leading-[76px] text-white'>Collection <br /> MutantGobz</p>
          <div className='mt-[30px] text-center'>
            <button className='w-[210px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[17px] font-gilroy tracking-wide font-semibold'>
              Explore Collection
            </button>
          </div>
        </div>
        {/* Launchpad Drops section */}
        <div className="relative z-30 mt-[100px] lg:mt-[120px] pl-5 lg:px-0 lg:mr-5">
          <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Launchpad Drops</p>
          <div className='flex flex-row justify-between mt-[20px] lg:mt-[30px]'>
            <div className='block whitespace-nowrap space-x-3 lg:flex lg:flex-row gap-3 w-full overflow-x-scroll horizontal_slider'>
              <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[146px] h-[56px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy'>
                <p>Next 7 days</p>
              </button>
              <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[158px] h-[56px] text-white rounded-[41px] bg-[#1a1a19] text-base font-gilroy'>
                <p>Coming soon</p>
              </button>
              <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[89px] h-[56px] text-white rounded-[41px] bg-[#1a1a19] text-base font-gilroy'>
                <p>Live</p>
              </button>
            </div>
            <div className="hidden md:block mr-4 lg:mr-0">
              <buttom className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                See All
              </buttom>
            </div>
          </div>
          <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
            <div className='block whitespace-nowrap space-x-5 lg:space-x-12'>
              {/* card 1 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px]'>
                <div className="overflow-hidden ">
                  <img
                    src={Section1Card1}
                    alt="/"
                    className="h-full w-full object-cover object-center group-hover:opacity-75 px-2 py-2"
                  />
                </div>
                <h3 className="mt-2 text-xl font-gilroy text-white px-5">Cheddar Block Games</h3>
                <p className="text-sm font-gilroy text-[#00DB80] uppercase px-5">live</p>
              </div>
              {/* card 2 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px]'>
                <div className="overflow-hidden">
                  <img
                    src={Section1Card2}
                    alt="/"
                    className="h-full w-full object-cover object-center group-hover:opacity-75 px-2 py-2"
                  />
                </div>
                <h3 className="mt-2 text-[20px] font-gilroy text-white px-5">Mini Royale x Sank T...</h3>
                <p className="text-sm font-gilroy text-[#00DB80] uppercase px-5">live</p>
              </div>
              {/* card 3 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px]'>
                <div className="w-full overflow-hidden">
                  <img
                    src={Section1Card3}
                    alt="/"
                    className="h-full w-full object-cover object-center group-hover:opacity-75 px-2 py-2"
                  />
                </div>
                <h3 className="mt-2 text-[20px] font-gilroy text-white px-5">KanpaiPanda #32</h3>
                <p className="text-sm font-gilroy text-white px-5">03h 16m 15s</p>
              </div>
              {/* card 4 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px]'>
                <div className="w-full overflow-hidden">
                  <img
                    src={Section1Card4}
                    alt="/"
                    className="h-full w-full object-cover object-center group-hover:opacity-75 px-2 py-2"
                  />
                </div>
                <h3 className="mt-2 text-[20px] font-gilroy text-white px-5">KanpaiPanda #32</h3>
                <p className="text-sm font-gilroy text-white px-5">04h 16m 13s</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center -ml-5">
            <buttom className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
              See All
            </buttom>
          </div>


        </div>
      </div>
    </div>
  )
}

export default PopularNFT;