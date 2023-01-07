import { React } from "react";
import CardApeGen from "../assets/cards/cardApeGen.png"
import Footer from "../components/Footer";
import { ReactComponent as Validate } from "../assets/validate.svg"
import Darknes2 from "../assets/darknes2.png"
import { ReactComponent as Blur } from "../assets/blurs/blur.svg"
import Card1 from "../assets/cards/Auction/card1.png"
import Card2 from "../assets/cards/Auction/card2.png"
import Card3 from "../assets/cards/Auction/card3.png"
import Card5 from "../assets/cards/Auction/card5.png"
import Card6 from "../assets/cards/Auction/card6.png"
import Card8 from "../assets/cards/Auction/card8.png"


const Auctions = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[973px] lg:h-[673px]' />
      <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[350px] h-[240px] md:w-[400px] 2xl:w-[1573px] lg:h-[673px]' />
      <div className='mt-[140px] lg:mt-[208px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1200px]'>
        {/* Header section */}
        <div className="relative flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8 overflow-hidden items-center lg:items-start px-4 lg:px-0">
          <div className="flex flex-col">
            <p className="mt-[30px] lg:mt-[70px] text-white text-[36px] lg:text-[62px] tracking-wide font-gilroy font-semibold leading-[40px] lg:leading-[65px]">Utility Ape Gen 2 Legendary #2</p>
            <div className="flex flex-row mt-[15px] items-center">
              <p className="text-[18px] font-gilroy text-[#828383] font-semibold">CREATED BY</p>
              <p className="text-[18px] font-gilroy text-[#beff55] ml-2 tracking-wide">Utility Ape</p>
              <Validate className="ml-2.5" />
            </div>
            <p className="mt-[24px] lg:mt-[30px] text-[#828383] text-base lg:text-lg font-gilroy font-semibold max-w-[560px]">
              From the Generation 2 of Utility Ape, a Legendary animated NFT.
            </p>
            {/* section auctions details for desktop */}
            <div className="hidden lg:flex lg:flex-col mt-[40px]">
              <div className="relative z-30 pl-5 lg:px-0 lg:mr-5 2xl:mr-0">
                <div className='flex flex-row gap-5'>
                  <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                    <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">FINAL <br /> BID</p>
                    <div className="w-[120px] text-right">
                      <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">25.00</p>
                    </div>
                  </div>
                  <div className='bg-[#1a1a19] w-[380px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                    <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">AUCTION ENDED</p>
                    <div className="w-[160px] ml-[170px]">
                      <div className="flex flex-row gap-5 -ml-1">
                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">00</p>
                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">00</p>
                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">00</p>
                      </div>
                      <div className="flex flex-row -mt-[50px]">
                        <p className="justify-end font-gilroyMedium text-[14px] mt-16 text-[#828383] leading-[16px]">Hours</p>
                        <p className="justify-end font-gilroyMedium text-[14px] pl-5 mt-16 text-[#828383] leading-[16px]">Minutes</p>
                        <p className="justify-end font-gilroyMedium text-[14px] mt-16 pl-5 text-[#828383]  leading-[16px]">Seconds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mr-5 3xl:mr-0">
            <div className="bg-[#1a1a19] border border-[#232323] w-[369px] h-[369px] 2xl:w-[560px] 2xl:h-[560px] rounded-[15px]">
              <div className="overflow-hidden relative px-[10px] py-[10px]">
                <img
                  src={CardApeGen}
                  alt="/"
                  className="w-[349px] h-[349px] 2xl:w-[540px] 2xl:h-[540px] rounded-[10px] object-cover object-center group-hover:opacity-75" />
              </div>
            </div>
          </div>
        </div>
        {/* section auctions details for mobile */}
        <div className="block lg:hidden">
          <div className="relative z-30 pl-5 pr-2">
            <div className='mt-[40px] block w-full overflow-x-scroll horizontal_slider'>
              <div className='block whitespace-nowrap space-x-3'>
                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[26px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">FINAL <br /> BID</p>
                  <div className="w-[120px] text-right">
                    <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">25.00</p>
                  </div>
                </div>
                <div className='inline-block bg-[#1a1a19] w-[300px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[23px]'>
                  <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">AUCTION ENDED</p>
                  <div className="w-[160px] ml-[90px]">
                    <div className="flex flex-row gap-5 -ml-1">
                      <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">00</p>
                      <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">00</p>
                      <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">00</p>
                    </div>
                    <div className="flex flex-row -mt-[53px]">
                      <p className="justify-end font-gilroyMedium text-[14px] mt-16 text-[#828383] leading-[16px]">Hours</p>
                      <p className="justify-end font-gilroyMedium text-[14px] pl-5 mt-16 text-[#828383] leading-[16px]">Minutes</p>
                      <p className="justify-end font-gilroyMedium text-[14px] mt-16 pl-5 text-[#828383]  leading-[16px]">Seconds</p>
                    </div>
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
        {/* Launchpad Drops section */}
        <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
          <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Finished Auctions</p>
          <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
            <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
              {/* card 1 */}
              <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card1}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">The Sol Army GV Pass 2.0 Auction #39</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">The Sol Army</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">55.10 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 2 */}
              <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card2}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Utility Ape Gen 2 Legendary #2</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">Utility Ape</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">4.10 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 3 */}
              <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card3}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">ThorNode Gold Pass</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">ThorNode</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">82.20 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 4 */}
              <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card1}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">The Sol Army GV Pass 2.0 Auction #39</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">The Sol Army</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">2.76 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 1 */}
              <div className='inline-block lg:hidden border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card5}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Rifters Demigod Solana Princess's Weekly Wish #5</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">Solana Princess (Rifters)</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">8.10 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 2 */}
              <div className='inline-block lg:hidden border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card6}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Genesis of Realm</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">Genesis of Realm</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">65.90 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 3 */}
              <div className='inline-block lg:hidden border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card1}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">The Sol Army GV Pass 2.0 Auction #39</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">The Sol Army</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">8.10 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 4 */}
              <div className='inline-block lg:hidden border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card8}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Movember® Bear</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">Okay Bears</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">14.33 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden mt-[30px] lg:mt-10 lg:block w-full overflow-x-scroll horizontal_slider'>
            <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
              {/* card 1 */}
              <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card5}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Rifters Demigod Solana Princess's Weekly Wish #5</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">Solana Princess (Rifters)</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">8.10 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 2 */}
              <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card6}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Genesis of Realm</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">Genesis of Realm</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">65.90 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 3 */}
              <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card1}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">The Sol Army GV Pass 2.0 Auction #39</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">The Sol Army</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">8.10 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
              {/* card 4 */}
              <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card8}
                    alt="/"
                    className="h-[250px] w-[388px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Movember® Bear</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#828383] px-5">Okay Bears</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[121px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate uppercase text-[#828383] mt-[4px]">FINAL<span className="ml-1 text-white">14.33 sol</span>
                    </p>
                  </div>
                  <p className="text-sm font-gilroy rounded-[5px] max-w-[150px] truncate ml-2 uppercase text-[#beff55] mt-[6px]">ENDED!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Auctions;