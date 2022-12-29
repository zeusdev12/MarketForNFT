import { React, Fragment } from "react";
import Footer from './Footer';
import Darknes2 from "../assets/darknes2.png"
import CollectionOpenLogo from "../assets/Collection/collectionopenlogo.png"
import { ReactComponent as Validate } from "../assets/validate.svg"
import { ReactComponent as Social1 } from "../assets/Collection/social1.svg"
import { ReactComponent as Social2 } from "../assets/Collection/social2.svg"
import { ReactComponent as Social3 } from "../assets/Collection/social3.svg"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import { ReactComponent as Search } from "../assets/search.svg";
import { Transition, Menu } from '@headlessui/react';
import { ReactComponent as Vector } from "../assets/icons/Deposit/vector.svg"
import { ReactComponent as StatusTop } from "../assets/statustop.svg"

import Card1 from "../assets/Collection/card1.png"
import Card2 from "../assets/Collection/card2.png"
import Card3 from "../assets/Collection/card3.png"
import Card4 from "../assets/Collection/card4.png"

const OpenPageCollection = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className='mt-[120px] md:mt-[190px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]'>
        <div className="flex flex-col lg:flex-row justify-between lg:mr-5 2xl:mr-0 mx-auto lg:mx-0">
          <div className="flex flex-col items-center lg:items-start">
            <div className='relative'>
              <div className='w-[100px] h-[100px] bg-transparent border-2 border-[#beff55] rounded-full'>
                <img
                  src={CollectionOpenLogo}
                  alt="/"
                  className='w-[90px] h-[90px] ml-[3.2px] mt-[2.5px] object-cover rounded-full object-center'
                />
              </div>
              <Validate className="absolute ml-[85px] lg:ml-[84px] -mt-[15px] w-[15px] h-[15px]" />
            </div>
            <div className="text-center lg:text-left mt-[30px]">
              <p className='text-[36px] lg:text-[46px] text-white font-gilroy font-semibold leading-[40px] lg:leading-[50px] max-w-[220px] lg:max-w-[450px]'>CLONE X - X TAKASHI MURAKAMI</p>
            </div>
            <div className="text-center lg:text-left mt-[20px] lg:mt-[22px]">
              <p className='text-[#828383] font-gilroy text-[18px] max-w-[300px] lg:max-w-[450px] font-semibold'>🧬 CLONE X 🧬 20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸</p>
            </div>
            <div className="flex gap-2.5 text-center lg:text-left mt-[20px] lg:mt-[22px]">
              <Social1 className='w-[40px] h-[40px]' />
              <Social2 className='w-[40px] h-[40px]' />
              <Social3 className='w-[40px] h-[40px]' />
            </div>
          </div>
          {/* section collection details for desktop */}
          <div className="hidden lg:flex lg:flex-col">
            <div className="relative z-30 pl-5 lg:px-0 lg:mr-5 2xl:mr-0">
              <div className='flex flex-wrap gap-5'>
                <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">FLOOR <br /> (USDT)</p>
                  <div className="w-[120px] text-right mt-[23px]">
                    <div className="bg-[#beff55] w-[68px] ml-[52px] h-[25px] text-center rounded-[29px] mb-[18px]">
                      <p className="text-black font-gilroyMedium font-semibold text-sm mt-1">+2.53%</p>
                    </div>
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] text-white leading-[16px]">6.543</p>
                  </div>
                </div>
                <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">LISTED</p>
                  <div className="w-[120px] text-right">
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-[82px] text-white leading-[16px]">394</p>
                  </div>
                </div>
                <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">TOTAL <br /> VOL</p>
                  <div className="w-[120px] text-right mt-[23px]">
                    <div className="bg-[#beff55] w-[68px] ml-[52px] h-[25px] text-center rounded-[29px] mb-[18px]">
                      <p className="text-black font-gilroyMedium font-semibold text-sm mt-1">+24.5K</p>
                    </div>
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] text-white leading-[16px]">267.2K</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap gap-5 mt-[18px]'>
                <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">AVG. SALE <br /> (24h)</p>
                  <div className="w-[120px] text-right">
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">---</p>
                  </div>
                </div>
                <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">TOTAL <br /> SUPPLY</p>
                  <div className="w-[120px] text-right">
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">19.4K</p>
                  </div>
                </div>
                <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">OWNERS</p>
                  <div className="w-[120px] text-right mt-[38px]">
                    <div className="bg-[#beff55] w-[68px] ml-[52px] h-[25px] text-center rounded-[29px] mb-[18px]">
                      <p className="text-black font-gilroyMedium font-semibold text-sm mt-1">+2.5K</p>
                    </div>
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] text-white leading-[16px]">9.7K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section collection details for mobile */}
        <div className="block lg:hidden">
          <div className="relative z-30 pl-5 pr-2">
            <div className='mt-[40px] block w-full overflow-x-scroll horizontal_slider'>
              <div className='block whitespace-nowrap space-x-3'>
                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">FLOOR <br /> (USDT)</p>
                  <div className="w-[120px] text-right mt-[23px]">
                    <div className="bg-[#beff55] w-[68px] ml-[52px] h-[25px] text-center rounded-[29px] mb-[18px]">
                      <p className="text-black font-gilroyMedium font-semibold text-sm mt-1">+2.53%</p>
                    </div>
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] text-white leading-[16px]">6.543</p>
                  </div>
                </div>
                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">LISTED</p>
                  <div className="w-[120px] text-right">
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-[82px] text-white leading-[16px]">394</p>
                  </div>
                </div>
                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">TOTAL <br /> VOL</p>
                  <div className="w-[120px] text-right mt-[23px]">
                    <div className="bg-[#beff55] w-[68px] ml-[52px] h-[25px] text-center rounded-[29px] mb-[18px]">
                      <p className="text-black font-gilroyMedium font-semibold text-sm mt-1">+24.5K</p>
                    </div>
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] text-white leading-[16px]">267.2K</p>
                  </div>
                </div>
                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">AVG. SALE <br /> (24h)</p>
                  <div className="w-[120px] text-right">
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">---</p>
                  </div>
                </div>
                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">TOTAL <br /> SUPPLY</p>
                  <div className="w-[120px] text-right">
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">19.4K</p>
                  </div>
                </div>
                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">OWNERS</p>
                  <div className="w-[120px] text-right mt-[38px]">
                    <div className="bg-[#beff55] w-[68px] ml-[52px] h-[25px] text-center rounded-[29px] mb-[18px]">
                      <p className="text-black font-gilroyMedium font-semibold text-sm mt-1">+2.5K</p>
                    </div>
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] text-white leading-[16px]">9.7K</p>
                  </div>
                </div>
              </div>
              <img
                src={Darknes2}
                alt="/"
                className="absolute right-0 -mt-[164px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-30 mt-[50px] lg:mt-[100px] pl-5 lg:pl-0 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
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
          <Menu as="div" className="relative">
            <div className="flex mt-[15px] lg:mt-[12px] pr-5 xl:pr-0">
              <Menu.Button className='w-full flex flex-row items-center justify-center lg:w-[189px] h-[48px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy hover:border-[#beff55]'>
                <p>Recently Listed</p>
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
              <Menu.Items className="absolute z-10 mt-2 w-[189px] h-[148px] rounded-[15px] border-2 border-[#3b3c3c] bg-[#131313] py-[3px] px-[3px] focus:outline-none">
                <button className="w-[179px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                  <p className="-ml-[16px] text-white text-base font-gilroy">
                    Last 30 days
                  </p>
                </button>
                <button className="w-[179px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                  <p className="-ml-[26px] text-white text-base font-gilroy">
                    Last 7 days
                  </p>
                </button>
                <button className="w-[179px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
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
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card1}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <StatusTop className='absolute -mt-[309px] ml-[256px] lg:-mt-[246px] lg:ml-[196px]' />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">8.065</p>
              </div>
            </div>
            {/* card 2 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card2}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">9.6227</p>
              </div>
            </div>
            {/* card 3 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card3}
                  alt="/"
                  className="w-[300px] blur-sm bg-black opacity-30 h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <p className="absolute top-0 ml-[100px] mt-[155px] lg:ml-[68px] lg:mt-[120px] text-[26px] text-[#828383] font-gilroy">DELISTED</p>
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">6.8854</p>
              </div>
            </div>
            {/* card 4 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card4}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <StatusTop className='absolute -mt-[309px] ml-[256px] lg:-mt-[246px] lg:ml-[196px]' />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">8.4075</p>
              </div>
            </div>
            {/* card 5 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card3}
                  alt="/"
                  className="w-[300px] blur-sm bg-black opacity-30 h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <p className="absolute top-0 ml-[100px] mt-[155px] lg:ml-[68px] lg:mt-[120px] text-[26px] text-[#828383] font-gilroy">DELISTED</p>
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">6.8854</p>
              </div>
            </div>
            {/* card 6 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card1}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <StatusTop className='absolute -mt-[309px] ml-[256px] lg:-mt-[246px] lg:ml-[196px]' />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">8.065</p>
              </div>
            </div>
            {/* card 7 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card2}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">9.6227</p>
              </div>
            </div>
            {/* card 8 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card1}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <StatusTop className='absolute -mt-[309px] ml-[256px] lg:-mt-[246px] lg:ml-[196px]' />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">8.065</p>
              </div>
            </div>
            {/* card 9 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card1}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <StatusTop className='absolute -mt-[309px] ml-[256px] lg:-mt-[246px] lg:ml-[196px]' />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">8.065</p>
              </div>
            </div>
            {/* card 10 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card2}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">9.6227</p>
              </div>
            </div>
            {/* card 11 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card3}
                  alt="/"
                  className="w-[300px] blur-sm bg-black opacity-30 h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <p className="absolute top-0 ml-[100px] mt-[155px] lg:ml-[68px] lg:mt-[120px] text-[26px] text-[#828383] font-gilroy">DELISTED</p>
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">6.8854</p>
              </div>
            </div>
            {/* card 12 */}
            <div className='bg-[#1a1a19] w-[320px] h-[432px] lg:w-[260px] lg:h-[369px] rounded-[15px] cursor-pointer'>
              <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                  src={Card4}
                  alt="/"
                  className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                />
                <StatusTop className='absolute -mt-[309px] ml-[256px] lg:-mt-[246px] lg:ml-[196px]' />
              </div>
              <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">CloneX #4502</h3>
              <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">CloneX</p>
              <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]" />
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">8.4075</p>
              </div>
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

export default OpenPageCollection;