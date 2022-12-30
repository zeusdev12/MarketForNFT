import { React } from "react";
import { ReactComponent as StatusTime } from "../assets/statustime.svg"
import CardAstonMartin from "../assets/cards/cardAstonMartin.png"
import Footer from "../components/Footer";

import Card1Section1 from "../assets/cards/card1section1.png"
import Card2Section1 from "../assets/cards/card2section1.png"
import Card3Section1 from "../assets/cards/card3section1.png"
import Card4Section1 from "../assets/cards/card4section1.png"

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
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #43</h3>
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
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                <p className="text-sm max-w-[250px] truncate font-gilroy text-[#beff55] px-5">SOLD OUT!</p>
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
              {/* card 3 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card3Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">RentHedz #213</h3>
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
              {/* card 4 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card4Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
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
                    src={Card1Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                  <StatusTime className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #43</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-white px-5">01d 22h 07m</p>
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
                  <StatusTime className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                <p className="text-sm max-w-[250px] truncate font-gilroy text-white px-5">03d 12h 27m</p>
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
              {/* card 3 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card3Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                  <StatusTime className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">RentHedz #213</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-white px-5">11d 01h 21m</p>
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
              {/* card 4 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card4Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                  <StatusTime className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-white px-5">04d 02h 32m</p>
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
                    src={Card1Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #43</h3>
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
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                <p className="text-sm max-w-[250px] truncate font-gilroy text-[#beff55] px-5">SOLD OUT!</p>
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
              {/* card 3 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card3Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">RentHedz #213</h3>
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
              {/* card 4 */}
              <div className='inline-block bg-[#1a1a19] w-[260px] h-[388px] rounded-[15px] cursor-pointer'>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                  <img
                    src={Card4Section1}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Launchpad;