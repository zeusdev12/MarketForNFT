import React from "react";
import "./OpenPageNFT.css"
import { ReactComponent as StatusTop } from "../assets/statustop.svg"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import Card from "../assets/cards/OpenPageNFT/card.png"
import { ReactComponent as Validate } from '../assets/validate.svg'
import SectionCard1 from "../assets/cards/OpenPageNFT/sectioncard1.png"
import SectionCard2 from "../assets/cards/OpenPageNFT/sectioncard2.png"
import SectionCard3 from "../assets/cards/OpenPageNFT/sectioncard3.png"
import SectionCard4 from "../assets/cards/OpenPageNFT/sectioncard4.png"
import Footer from "./Footer";

const OpenPageNFT = () => {
    return (
        <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
            <div className='mt-[140px] lg:mt-[208px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1200px]'>
                {/* Header section */}
                <div className="relative flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-1 overflow-hidden items-center lg:items-start px-4 lg:px-0">
                    <div className="flex flex-col">
                        <p className="mt-[40px] lg:mt-0 text-[#828383] text-sm uppercase font-gilroyMedium">19th september, 01:33</p>
                        <p className="mt-[30px] text-white text-[36px] lg:text-[62px] font-gilroy font-semibold leading-[40px] lg:leading-[65px]">Bored Ape Yacht Club #8477</p>
                        <div className="flex items-center">
                            <p className="mt-[13px] text-[#beff55] text-base lg:text-xl font-gilroy">Bored Ape Yacht Club</p>
                            <Validate className='mt-3 ml-[10px] w-[15px] h-[15px]' />
                        </div>
                        <p className="mt-[30px] text-[#828383] text-base lg:text-lg font-gilroy font-semibold max-w-[560px]">
                            The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits
                        </p>
                        <div className="border-2 mt-[30px] border-[#3b3c3c] rounded-[15px] max-w-[560px] h-[60px]">
                            <div className="flex px-[30px] justify-between items-center mt-[14px]">
                                <p className="text-white font-gilroy text-lg">More Details</p>
                                <ArrowDown />
                            </div>
                        </div>
                        <div className="mt-[40px] h-[184px] max-w-[560px] lg:w-[560px] lg:h-[131px] rounded-[15px] bg-[#181818] justify-center">
                            <div className="flex flex-col lg:flex-row p-[30px]">
                                <div className="flex flex-col">
                                    <div className="bg-[#beff55] w-[68px] h-[25px] text-center rounded-[29px]">
                                        <p className="text-black font-gilroyMedium font-semibold text-sm mt-[2px]">+12.53%</p>
                                    </div>
                                    <div>
                                        <p className="mt-[2px] text-[36px] font-gilroy font-semibold text-white tracking-wider">133.90772 ETH</p>
                                    </div>
                                </div>
                                <button className='lg:w-[190px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold mt-1 lg:mt-2 lg:ml-[66px]'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mr-5">
                        <div className="overflow-hidden relative">
                            <img
                                src={Card}
                                alt="/"
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                            <StatusTop className='absolute right-0 top-0 mt-3 mr-3 sm:mt-5 sm:mr-5 lg:mt-4 lg:mr-4 xl:mt-[17px] xl:mr-[17px]' />
                        </div>
                    </div>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[150px] lg:mr-5 pl-4 lg:pl-0">
                    <div className='flex flex-row justify-between'>
                        <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold leading-[40px] lg:leading-[50px]'>Other NTFs in this <br /> collection</p>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <button className='flex flex-row items-center justify-center w-[205px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy mt-5'>
                                See All Collection
                            </button>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={SectionCard1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">LazyApeYachtClub...</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">LazyApeYachtClub</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={SectionCard2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">LazyApeYachtClub...</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">LazyApeYachtClub</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={SectionCard3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">LazyApeYachtClub...</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">LazyApeYachtClub</p>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={SectionCard4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">LazyApeYachtClub...</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">LazyApeYachtClub</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <buttom className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                        See All Collection
                    </buttom>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default OpenPageNFT;