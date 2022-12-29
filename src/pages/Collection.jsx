import { React, Fragment } from "react";
import Footer from "../components/Footer"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import { ReactComponent as Search } from "../assets/search.svg";
import { Transition, Menu } from '@headlessui/react';
import CollectionLogo from "../assets/Collection/collectionlogo.png"
import { ReactComponent as Validate } from '../assets/validate.svg'
import { ReactComponent as PolygonUp } from '../assets/Collection/polygonup.svg'
import { ReactComponent as PolygonDown } from '../assets/Collection/polygondown.svg'

const Collection = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className="relative z-30 mt-[110px] lg:mt-[188px] pl-5 lg:pl-0 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
        <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold'>Collection</p>
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
        <div className="overflow-x-scroll mr-5 lg:mr-0 mt-[40px] lg:mt-[50px] space-y-1.5 max-h-max border-2 border-[#303d1b] rounded-[15px] px-[10px] py-[10px] horizontal_slider">
          <div className="grid grid-cols-7 w-[1145px] text-right justify-between items-center px-[30px] h-[56px] bg-[#1a1a19] rounded-[10px]">
            <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-left">Collection</p>
            <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right pl-[170px]">Volume Total</p>
            <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right -mr-[130px]">30d Volume</p>
            <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right -mr-[80px]">Sales</p>
            <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right -mr-[60px]">Floor Price</p>
            <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right -mr-[20px]">Owners</p>
            <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right pl-[20px]">Total Supply</p>
          </div>
          {/* collection - 30d Volume (growth) */}
          <div className="grid grid-cols-7 hover:bg-[#252624] cursor-pointer w-[1145px] text-right justify-between items-center px-[30px] h-[56px] bg-[#1a1a19] rounded-[10px]">
            <div className="flex items-center relative">
              <p className="text-[#888888] text-[16px] font-gilroy mr-[15px]">1</p>
              <img
                src={CollectionLogo}
                alt="/"
                className="w-[40px] h-[40px] rounded-full mr-[15px]"
              />
              <Validate className="absolute ml-[44px] mt-[21px] w-[15px] h-[15px]" />
              <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-left">Bored Ape Yacht Club</p>
            </div>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-left pl-[220px]">797.4K</p>
            <div className="relative items-center -mr-[130px]">
              <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right pr-[30px] inline-block">30.5K</p>
              <PolygonUp className="absolute mt-[9px] right-0 mr-[44px] inline-block" />
              <p className="text-[#beff55] text-[16px] font-gilroy whitespace-nowrap text-right inline-block">2.51%</p>
            </div>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right -mr-[80px]">434</p>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right -mr-[60px]">72.01</p>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right -mr-[20px]">6.2K</p>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right pl-[20px]">100K</p>
          </div>
          {/* collection 2 collection - 30d Volume (fall) */}
          <div className="grid grid-cols-7 hover:bg-[#252624] cursor-pointer w-[1145px] text-right justify-between items-center px-[30px] h-[56px] bg-[#1a1a19] rounded-[10px]">
            <div className="flex items-center relative">
              <p className="text-[#888888] text-[16px] font-gilroy mr-[15px]">1</p>
              <img
                src={CollectionLogo}
                alt="/"
                className="w-[40px] h-[40px] rounded-full mr-[15px]"
              />
              <Validate className="absolute ml-[44px] mt-[21px] w-[15px] h-[15px]" />
              <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-left">Bored Ape Yacht Club</p>
            </div>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-left pl-[220px]">797.4K</p>
            <div className="relative items-center -mr-[130px]">
              <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right pr-[30px] inline-block">30.5K</p>
              <PolygonDown className="absolute mt-[9px] right-0 mr-[44px] inline-block" />
              <p className="text-[#ff7455] text-[16px] font-gilroy whitespace-nowrap text-right inline-block">2.51%</p>
            </div>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right -mr-[80px]">434</p>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right -mr-[60px]">72.01</p>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right -mr-[20px]">6.2K</p>
            <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right pl-[20px]">100K</p>
          </div>
        </div>
        <div className="-ml-5 lg:ml-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Collection;