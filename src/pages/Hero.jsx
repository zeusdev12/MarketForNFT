import React from 'react'
import Cards from "../assets/cards.png"
import "./Hero.css"
import Footer from '../components/Footer'

import { ReactComponent as StatusLive } from "../assets/statuslive.svg"
import { ReactComponent as StatusTime } from "../assets/statustime.svg"
import { ReactComponent as StatusTop } from "../assets/statustop.svg"
import { ReactComponent as Validate } from '../assets/validate.svg'
import { ReactComponent as Views } from '../assets/views.svg'

import Section1Card1 from "../assets/cards/section1card1.png"
import Section1Card2 from "../assets/cards/section1card2.png"
import Section1Card3 from "../assets/cards/section1card3.png"
import Section1Card4 from "../assets/cards/section1card4.png"

import Section2Card1 from "../assets/cards/section2card1.png"
import Section2Card2 from "../assets/cards/section2card2.png"
import Section2Card3 from "../assets/cards/section2card3.png"
import Section2Card4 from "../assets/cards/section2card4.png"

import Section3Card1 from "../assets/cards/section3card1.png"
import Section3Card2 from "../assets/cards/section3card2.png"
import Section3Card3 from "../assets/cards/section3card3.png"
import Section3Card4 from "../assets/cards/section3card4.png"

import Section4Card1 from "../assets/cards/section4card1.png"
import Section4Card2 from "../assets/cards/section4card2.png"
import Section4Card3 from "../assets/cards/section4card3.png"
import Section4Card4 from "../assets/cards/section4card4.png"

import Section5Card1 from "../assets/cards/section5card1.png"
import Section5Card2 from "../assets/cards/section5card2.png"
import Section5Card3 from "../assets/cards/section5card3.png"
import Section5Card4 from "../assets/cards/section5card4.png"

import Section6Card1 from "../assets/cards/section6card1.png"
import Section6Card2 from "../assets/cards/section6card2.png"
import Section6Card3 from "../assets/cards/section6card3.png"
import Section6Card4 from "../assets/cards/section6card4.png"

import Section7Card1 from "../assets/cards/section7card1.png"
import Section7Card2 from "../assets/cards/section7card2.png"
import Section7Card3 from "../assets/cards/section7card3.png"
import Section7Card4 from "../assets/cards/section7card4.png"

import Section8Card1 from "../assets/cards/section8card1.png"
import Section8Card2 from "../assets/cards/section8card2.png"
import Section8Card3 from "../assets/cards/section8card3.png"
import Section8Card4 from "../assets/cards/section8card4.png"

import Section9Card1 from "../assets/cards/section9card1.png"
import Section9Card2 from "../assets/cards/section9card2.png"
import Section9Card3 from "../assets/cards/section9card3.png"
import Section9Card4 from "../assets/cards/section9card4.png"

import Collection1 from "../assets/cards/collection1.png"
import Collection2 from "../assets/cards/collection2.png"
import Collection3 from "../assets/cards/collection3.png"
import Collection1icon from "../assets/cards/collection1icon.png"
import Collection2icon from "../assets/cards/collection2icon.png"
import Collection3icon from "../assets/cards/collection3icon.png"

const Hero = () => {
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
                        <div className='block whitespace-nowrap space-x-2.5 lg:flex lg:flex-row w-full overflow-x-scroll horizontal_slider'>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[146px] h-[56px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy'>
                                <p>Next 7 days</p>
                            </button>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[158px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323] text-base font-gilroy'>
                                <p>Coming soon</p>
                            </button>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[89px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
                                <p>Live</p>
                            </button>
                        </div>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <button className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                                See All
                            </button>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section1Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusLive className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">Cheddar Block Games</h3>
                                <p className="text-sm font-gilroy text-[#beff55] uppercase px-5">live</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section1Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusLive className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Mini Royale x Sank T...</h3>
                                <p className="text-sm font-gilroy text-[#beff55] uppercase px-5">live</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section1Card3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTime className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                                <p className="text-sm font-gilroy text-white px-5">03h 16m 15s</p>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section1Card4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTime className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                                <p className="text-sm font-gilroy text-white px-5">04h 16m 13s</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <buttom className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                        See All
                    </buttom>
                </div>
                {/* New to NFTs? section */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>New to NFTs?</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden">
                                    <img
                                        src={Section2Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #43</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">KanpaiPanda</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section2Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">KanpaiPanda</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section2Card3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">RentHedz #213</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">RentHedz</p>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section2Card4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">Corn</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Popular Collections section */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Popular Collections</p>
                    <div className='flex flex-row justify-between mt-[20px] lg:mt-[30px]'>
                        <div className='block whitespace-nowrap space-x-2.5 lg:flex lg:flex-row w-full overflow-x-scroll horizontal_slider'>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[138px] h-[56px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy'>
                                <p>Last 1 hour</p>
                            </button>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[157px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323] text-base font-gilroy'>
                                <p>Last 24 hours</p>
                            </button>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[142px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
                                <p>Last 7 days</p>
                            </button>
                            <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[153px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
                                <p>Last 30 days</p>
                            </button>
                        </div>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <button className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                                See All
                            </button>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-12'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[360px] h-[332px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden ">
                                    <img
                                        src={Collection1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-5 py-5"
                                    />
                                </div>
                                <div className="flex items-center ml-5 mt-1">
                                    <img
                                        src={Collection1icon}
                                        alt=""
                                    />
                                    <Validate className='-ml-[16px] mt-[36px] w-[15px] h-[15px]' />
                                    <div className='ml-[14px]'>
                                        <h3 className='text-lg font-gilroy text-white hover:text-[#beff55]'>BountyHunter</h3>
                                        <p className="text-sm -mt-[2px] font-gilroy text-[#888989]">25 Items</p>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[360px] h-[332px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden ">
                                    <img
                                        src={Collection2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-5 py-5"
                                    />
                                </div>
                                <div className="flex items-center ml-5 mt-1">
                                    <img
                                        src={Collection2icon}
                                        alt=""
                                    />
                                    <Validate className='-ml-[16px] mt-[36px] w-[15px] h-[15px]' />
                                    <div className='ml-[14px]'>
                                        <h3 className='text-lg font-gilroy text-white hover:text-[#beff55]'>MutantGobz</h3>
                                        <p className="text-sm -mt-[2px] font-gilroy text-[#888989]">34 Items</p>
                                    </div>
                                </div>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[360px] h-[332px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden ">
                                    <img
                                        src={Collection3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-5 py-5"
                                    />
                                </div>
                                <div className="flex items-center ml-5 mt-1">
                                    <img
                                        src={Collection3icon}
                                        alt=""
                                    />
                                    <Validate className='-ml-[16px] mt-[36px] w-[15px] h-[15px]' />
                                    <div className='ml-[14px]'>
                                        <h3 className='text-lg font-gilroy text-white hover:text-[#beff55]'>LazyApeYachtClub</h3>
                                        <p className="text-sm -mt-[2px] font-gilroy text-[#888989]">42 Items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <buttom className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                        See All
                    </buttom>
                </div>
                {/* Upcoming Launches section */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Upcoming Launches</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden ">
                                    <img
                                        src={Section3Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">ApeYachtClub...</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">LazyApeYachtClub</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden">
                                    <img
                                        src={Section3Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">BoredApeYachtClub...</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">LazyApeYachtClub</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section3Card3}
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
                                        src={Section3Card4}
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
                {/* Top Marketcap Projects section */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <div className='flex flex-row justify-between'>
                        <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Top Marketcap Projects</p>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <button className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy mt-2'>
                                See All
                            </button>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section4Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5 uppercase">8pes</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden">
                                    <img
                                        src={Section4Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">8PES #383</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5 uppercase">8pes</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section4Card3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">8PES #419</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5 uppercase">8pes</p>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section4Card4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">8PES #737</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5 uppercase">8pes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <buttom className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                        See All
                    </buttom>
                </div>
                {/* OG SOL Projects section */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>OG SOL Projects</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section5Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">LazyApeYachtClub...</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">LazyApeYachtClub</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden">
                                    <img
                                        src={Section5Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">CHAINBREAKER #1987</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">CHAINBREAKER</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section5Card3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Ukiyan #1115</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">Ukiyan</p>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section5Card4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">MutantGobz #541</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">MutantGobz</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Most Followed NFT Projects */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Most Followed NFT</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section6Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">LazyApeYachtClub...</h3>
                                <div className='flex'>
                                    <p className="text-sm font-gilroy text-[#888989] px-5">RebelBot</p>
                                    <div className='flex'>
                                        <Views className='mt-[3px]' />
                                        <p className='text-sm font-gilroy text-white ml-1'>2897</p>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden">
                                    <img
                                        src={Section6Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">RebelBot #05247</h3>
                                <div className='flex'>
                                    <p className="text-sm font-gilroy text-[#888989] px-5">RebelBot</p>
                                    <div className='flex'>
                                        <Views className='mt-[3px]' />
                                        <p className='text-sm font-gilroy text-white ml-1'>5325</p>
                                    </div>
                                </div>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section6Card3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">RebelBot #02557</h3>
                                <div className='flex'>
                                    <p className="text-sm font-gilroy text-[#888989] px-5">RebelBot</p>
                                    <div className='flex'>
                                        <Views className='mt-[3px]' />
                                        <p className='text-sm font-gilroy text-white ml-1'>5435</p>
                                    </div>
                                </div>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section6Card4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">RebelBot #08061</h3>
                                <div className='flex'>
                                    <p className="text-sm font-gilroy text-[#888989] px-5">RebelBot</p>
                                    <div className='flex'>
                                        <Views className='mt-[3px]' />
                                        <p className='text-sm font-gilroy text-white ml-1'>1545</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MagicDAO Voted section */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>MagicDAO Voted</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section7Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">BountyHunter #1340</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">BountyHunter</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden">
                                    <img
                                        src={Section7Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">RENGA #3814</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">RENGA</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section7Card3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">RENGA #3977</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">RENGA</p>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section7Card4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">RENGA #9138</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">RENGA</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Highest Sales section */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Highest Sales</p>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden ">
                                    <img
                                        src={Section8Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">League Master #03</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">The Sports Club - League Master</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden">
                                    <img
                                        src={Section8Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">DeGod #724</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">DeGods</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section8Card3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">DeGod #7673</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">DeGods</p>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section8Card4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">DeGod #2124</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5">DeGods</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* New NFT section */}
                <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
                    <div className='flex flex-row justify-between'>
                        <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>New NFT</p>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <button className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy mt-2'>
                                See All
                            </button>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {/* card 1 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section9Card1}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #43</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5 uppercase">KanpaiPanda</p>
                            </div>
                            {/* card 2 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="overflow-hidden relative">
                                    <img
                                        src={Section9Card2}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                    <StatusTop className='absolute -mt-[256px] ml-[206px]' />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">KanpaiPanda #32</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5 uppercase">KanpaiPanda</p>
                            </div>
                            {/* card 3 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section9Card3}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">RentHedz #213</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5 uppercase">RentHedz</p>
                            </div>
                            {/* card 4 */}
                            <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={Section9Card4}
                                        alt="/"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                                    />
                                </div>
                                <h3 className="mt-2 text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">Corn #6766</h3>
                                <p className="text-sm font-gilroy text-[#888989] px-5 uppercase">Corn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <buttom className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                        See All
                    </buttom>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Hero;