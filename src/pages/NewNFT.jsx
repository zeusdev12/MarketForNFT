import { React, Fragment } from "react";
import Footer from "../components/Footer"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import { ReactComponent as Search } from "../assets/search.svg";
import { Transition, Menu } from '@headlessui/react';

import Section4Card1 from "../assets/cards/section4card1.png"
import Section4Card2 from "../assets/cards/section4card2.png"
import Section4Card3 from "../assets/cards/section4card3.png"
import Section4Card4 from "../assets/cards/section4card4.png"
import Section2Card1 from "../assets/cards/section2card1.png"
import Section2Card2 from "../assets/cards/section2card2.png"
import Section2Card3 from "../assets/cards/section2card3.png"
import Section2Card4 from "../assets/cards/section2card4.png"

const NewNFT = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className="relative z-30 mt-[110px] lg:mt-[188px] pl-5 lg:pl-0 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
        <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold'>New Nft</p>
        <div className='flex flex-col lg:flex-row mt-3.5 lg:mt-2 justify-between'>
          <form className="flex mt-3 pr-5 xl:pr-1" action="#" method="GET">
            <div className="relative w-full 3xl:w-[460px] h-[56px] border-2 border-[#3b3c3c] rounded-[41px] text-black">
              <input
                id="search-field"
                name="search-field"
                className="block h-full border-transparent pl-[30px] text-[#828383] placeholder-[#828383] bg-transparent focus:border-transparent font-gilroyMedium focus:outline-none focus:ring-0 text-[16px]"
                placeholder="Search"
                type="search"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 pr-4 md:pr-[30px] flex items-center" aria-hidden="true">
                <Search className="h-[19px] w-[19px] text-[#828383] mr-2 lg:mr-0" aria-hidden="true" />
              </div>
            </div>
          </form>
          <div className='block whitespace-nowrap lg:ml-[30px] mt-[15px] lg:mt-[12px] space-x-2.5 lg:flex lg:flex-row w-full overflow-x-scroll horizontal_slider'>
            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[112px] h-[56px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy'>
              <p>Solana</p>
            </button>
            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[130px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323] text-base font-gilroy'>
              <p>Ethereum</p>
            </button>
            <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[119px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
              <p>Polygon</p>
            </button>
            <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[78px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
              <p>All</p>
            </button>
          </div>
          <Menu as="div" className="relative">
            <div className="flex mt-[15px] lg:mt-[12px] pr-5 xl:pr-0">
              <Menu.Button className='w-full flex flex-row items-center justify-center lg:w-[171px] h-[56px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy hover:border-[#beff55]'>
                <p>Last 30 days</p>
                <ArrowDown className="ml-2.5" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute -ml-[2px] z-10 mt-2 w-[179px] h-[148px] rounded-[15px] border-2 border-[#3b3c3c] bg-[#131313] py-[3px] px-[3px] focus:outline-none">
                <button className="w-[169px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                  <p className="-ml-[16px] text-white text-base font-gilroy">
                    Last 30 days
                  </p>
                </button>
                <button className="w-[169px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                  <p className="-ml-[26px] text-white text-base font-gilroy">
                    Last 7 days
                  </p>
                </button>
                <button className="w-[169px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                  <p className="-ml-[33px] text-white text-base font-gilroy">
                    Last 1 day
                  </p>
                </button>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className='mt-[34px] lg:mt-14 -ml-3 lg:ml-0 w-full overflow-x-hidden'>
          <div className='flex flex-col lg:flex-row lg:flex-wrap w-full items-center lg:items-start gap-3.5 lg:gap-[2.55rem]'>
            {/* card 1 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section2Card1}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 2 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section4Card1}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 3 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section2Card2}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 4 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section4Card2}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 5 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section2Card3}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 6 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section4Card3}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 7 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section2Card4}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 8 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section4Card4}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 9 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section2Card1}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 10 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section4Card1}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 11 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section2Card2}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 12 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section4Card2}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 13 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section2Card3}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 14 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section4Card3}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 15 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section2Card4}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
            {/* card 16 */}
            <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Section4Card4}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
            </div>
          </div>
        </div>
        <div className="-ml-5 lg:ml-0">
          <div className="flex flex-row justify-center">
            <buttom className='flex mt-[30px] lg:mt-[80px] items-center justify-center w-[350px] lg:w-[228px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-[18px] font-gilroy cursor-pointer'>
              Show More Items
              <ArrowDown className="ml-3" />
            </buttom>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default NewNFT;