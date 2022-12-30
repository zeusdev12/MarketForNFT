import { React } from "react";
import { ReactComponent as StatusTime } from "../assets/statustime.svg"
import CardAstonMartin from "../assets/cards/cardAstonMartin.png"
import Footer from "../components/Footer";

import Card1Section1 from "../assets/cards/card1section1.png"
import Card2Section1 from "../assets/cards/card2section1.png"
import Card3Section1 from "../assets/cards/card3section1.png"
import Card4Section1 from "../assets/cards/card4section1.png"

import Card1Section2 from "../assets/cards/card1section2.png"
import Card2Section2 from "../assets/cards/card2section2.png"
import Card3Section2 from "../assets/cards/card3section2.png"
import Card4Section2 from "../assets/cards/card4section2.png"

import Card1Section3 from "../assets/cards/card1section3.png"
import Card2Section3 from "../assets/cards/card2section3.png"
import Card3Section3 from "../assets/cards/card3section3.png"
import Card4Section3 from "../assets/cards/card4section3.png"
import Card5Section3 from "../assets/cards/card5section3.png"
import Card6Section3 from "../assets/cards/card6section3.png"
import Card7Section3 from "../assets/cards/card7section3.png"
import Card8Section3 from "../assets/cards/card8section3.png"

const Launchpad = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className='mt-[140px] lg:mt-[208px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1200px]'>
        {/* Header section */}
        <div className="relative flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8 overflow-hidden items-center lg:items-start px-4 lg:px-0">
          <div className="flex flex-col">
            <p className="mt-[30px] lg:mt-[70px] text-white text-[36px] lg:text-[62px] tracking-wide font-gilroy font-semibold leading-[40px] lg:leading-[65px]">Infinite Drive: Aston Martin Vantage Collection</p>
            <p className="mt-[20px] lg:mt-[30px] text-[#828383] text-base lg:text-lg font-gilroy font-semibold max-w-[560px]">
              Own and race three of the most famous and iconic Aston Martin NFT cars on the Polygon Blockchain while getting access to the Closed Alpha of Infinite Drive!
            </p>
            <button className="text-[18px] font-gilroy text-[#beff55] rounded-[52px] mt-[30px] lg:mt-[40px] bg-[#1e2413] lg:w-[147px] h-[58px] uppercase">
              sold out
            </button>
          </div>
          <div className="lg:mr-5 3xl:mr-0">
            <div className="bg-[#1a1a19] w-[369px] h-[369px] 2xl:w-[560px] 2xl:h-[560px] rounded-[15px]">
              <div className="overflow-hidden relative px-[10px] py-[10px]">
                <img
                  src={CardAstonMartin}
                  alt="/"
                  className="w-[349px] h-[349px] 2xl:w-[540px] 2xl:h-[540px] rounded-[10px] object-cover object-center group-hover:opacity-75" />
              </div>
            </div>
          </div>
        </div>
        {/* Launchpad Drops section */}
        <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
          <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Launchpad Drops</p>
          <div className="mt-[20px] lg:mt-[30px] flex gap-2.5">
            <button className='flex flex-row items-center justify-center w-[89px] h-[56px] text-white rounded-[41px] border-2 border-[#3b3c3c] bg-transparent text-base font-gilroy'>
              <p>Live</p>
            </button>
            <button className='flex flex-row items-center justify-center text-center w-[110px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
              <p>Claims</p>
            </button>
          </div>
          <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
            <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
              {/* card 1 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card1Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Polygon Football Collection: World United</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 60000
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      100.00 matic
                    </p>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card2Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Polygon Football Collection: 2022 Champions</h3>
                <p className="text-sm max-w-[250px] truncate font-gilroy text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 10000
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      100.00 matic
                    </p>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card3Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">Infinite Drive: Aston Martin Vantage Collection</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 2700
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      66.00 matic
                    </p>
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card4Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">
                  Core - Episode 2</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      1.5 sol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Upcoming section */}
        <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
          <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Upcoming</p>
          <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
            <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
              {/* card 1 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card1Section2}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                  <StatusTime className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Degen Santa</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-white px-5">01d 22h 07m</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 10000
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.00 sol
                    </p>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card2Section2}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                  <StatusTime className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">WeSleep: Koalas</h3>
                <p className="text-sm max-w-[250px] truncate font-gilroy text-white px-5">03d 12h 27m</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 5555
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.00 sol
                    </p>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card3Section2}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                  <StatusTime className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">Sleek Geek Season 1</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-white px-5">01d 01h 21m</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 1000
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.00 sol
                    </p>
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card4Section2}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                  <StatusTime className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">MeltDown</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-white px-5">04d 02h 32m</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 3333
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.00 sol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ended section */}
        <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
          <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Ended</p>
          <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
            <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
              {/* card 1 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card1Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Honeyland Generations</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 6000
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      1.50 sol
                    </p>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card2Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">TIFO: FIFA World CupQatar 2022 Edition</h3>
                <p className="text-sm max-w-[250px] truncate font-gilroy text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 2022
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.00 sol
                    </p>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card3Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">Liberty Square: XIII Magickal Dayz</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 8888
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.00 sol
                    </p>
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card4Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">Zoolana Zanis - Origin Edition</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 4000
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.50 matic
                    </p>
                  </div>
                </div>
              </div>
              <div className='lg:hidden inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card5Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Tomorrowland: The Symbol of Love and Unity</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 6500
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      6.50 sol
                    </p>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className='lg:hidden inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card6Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Genesis of Realm</h3>
                <p className="text-sm max-w-[250px] truncate font-gilroy text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 3333
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.00 matic
                    </p>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className='lg:hidden inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card7Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">Sunflower Land</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 152000
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      5.50 matic
                    </p>
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className='lg:hidden inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card8Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">Catsyard</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 3333
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      2.30 sol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[30px] hidden lg:mt-10 lg:block w-full overflow-x-scroll horizontal_slider'>
            <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
              {/* card 1 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card5Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Tomorrowland: The Symbol of Love and Unity</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 6500
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      6.50 sol
                    </p>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card6Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Genesis of Realm</h3>
                <p className="text-sm max-w-[250px] truncate font-gilroy text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 3333
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      0.00 matic
                    </p>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card7Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">Sunflower Land</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 152000
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      5.50 matic
                    </p>
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card8Section3}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">Catsyard</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#beff55] px-5">SOLD OUT!</p>
                <div className="flex flex-row mt-[15px] px-[20px] gap-1.5">
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      Items 3333
                    </p>
                  </div>
                  <div className="w-[108px] h-[34px] truncate border-2 border-[#3b3c3c] rounded-[5px] text-center">
                    <p className="text-sm font-gilroy rounded-[5px] max-w-[100px] truncate uppercase text-white mt-[4px]">
                      2.30 sol
                    </p>
                  </div>
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

export default Launchpad;