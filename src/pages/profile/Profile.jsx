import { React, useState } from "react";
import { ReactComponent as ProfileImage } from "../../assets/icons/profile.svg"
import Footer from "../../components/Footer"
import { ReactComponent as Copy } from "../../assets/copy.svg"
import { CopyToClipboard } from "react-copy-to-clipboard";
import Darknes2 from "../../assets/darknes2.png"
import { ReactComponent as ArrowDown } from "../../assets/arrowdown.svg"
import { ReactComponent as Search } from "../../assets/search.svg";
import "./Profile.css"
import ModalUserSettings from "./ModalUserSettings"
import ModalDeposit from "./ModalDeposit"

import Section4Card1 from "../../assets/cards/section4card1.png"
import Section4Card2 from "../../assets/cards/section4card2.png"
import Section4Card3 from "../../assets/cards/section4card3.png"
import Section4Card4 from "../../assets/cards/section4card4.png"

const transactions = [
    {
        id: 'AAPS0L',
        company: 'Chase & Co.',
        share: 'CAC',
        commission: '+$4.37',
        price: '$3,509.00',
        quantity: '12.00',
        netAmount: '$4,397.00',
    },
    {
        id: '43223',
        company: 'Chase & Co.',
        share: '23423423',
        commission: '4324324',
        price: '$3,509.00',
        quantity: '12432432',
        netAmount: '$4,3973333.00',
    },
    // More transactions...
]

const Profile = () => {
    const [inputValue, setInputValue] = useState("");
    const [modalUserSettingsActive, setModalUserSettingsActive] = useState();
    const [modalDepositActive, setModalDepositActive] = useState();
    return (
        <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
            <div className='mt-[120px] md:mt-[190px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]'>
                <div className="flex flex-col lg:flex-row justify-between lg:mr-5 2xl:mr-0 mx-auto lg:mx-0">
                    <div className="flex flex-col">
                        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5">
                            <ProfileImage className="w-[100px] h-[100px]" />
                            <button className="border-2 border-[#3b3c3c] hover:border-[#beff55] text-white font-gilroyMedium tracking-wide text-[16px] bg-transparent w-[127px] h-[46px] rounded-[41px]" onClick={() => setModalUserSettingsActive(true)}>
                                Edit Profile
                            </button>
                        </div>
                        <p className="flex flex-wrap text-white font-gilroy text-[46px] max-w-[300px] lg:max-w-[500px] mt-3 lg:mt-6 text-center lg:text-left font-semibold leading-[48px]">Unknown name</p>
                        <div className="flex flex-row items-center gap-1 mt-[3px]">
                            <p className="font-gilroy font-semibold text-[18px] ml-2 lg:ml-0 text-[#828383] mt-[10px]"
                                value={inputValue}>
                                0xD37D83473284fd68asd7f618b
                            </p>
                            <CopyToClipboard text={inputValue}>
                                <Copy className="w-[18px] h-[18px] mt-[10px] cursor-pointer" />
                            </CopyToClipboard>
                        </div>
                        <div className="text-center lg:text-left mt-[30px]">
                            <button className="relative w-[125px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden" onClick={() => setModalDepositActive(true)}>
                                Deposit
                            </button>
                        </div>
                    </div>
                    {/* section profile balance for desktop */}
                    <div className="hidden lg:flex lg:flex-col mt-[70px]">
                        <div className="relative z-30 pl-5 lg:px-0 lg:mr-5 2xl:mr-0">
                            <div className='flex flex-row gap-5'>
                                <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                                    <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">total <br /> items</p>
                                    <div className="w-[120px] text-right">
                                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">0</p>
                                    </div>
                                </div>
                                <div className='bg-[#1a1a19] w-[200px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                                    <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">main wallet <br /> (eth)</p>
                                    <div className="w-[160px] text-right">
                                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">0</p>
                                    </div>
                                </div>
                                <div className='bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                                    <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">estimated value (eth)</p>
                                    <div className="w-[120px] text-right">
                                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section profile balance for mobile */}
                <div className="block lg:hidden">
                    <div className="relative z-30 pl-5 pr-2">
                        <div className='mt-[40px] block w-full overflow-x-scroll horizontal_slider'>
                            <div className='block whitespace-nowrap space-x-3'>
                                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                                    <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">total <br /> items</p>
                                    <div className="w-[120px] text-right">
                                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">0</p>
                                    </div>
                                </div>
                                <div className='inline-block bg-[#1a1a19] w-[200px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                                    <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">main wallet <br /> (eth)</p>
                                    <div className="w-[160px] text-right">
                                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">0</p>
                                    </div>
                                </div>
                                <div className='inline-block bg-[#1a1a19] w-[160px] h-[163px] rounded-[15px] cursor-pointer px-[20px] pt-[20px]'>
                                    <p className="uppercase font-gilroyMedium text-[16px] text-[#828383] leading-[16px]">estimated value <br /> (eth)</p>
                                    <div className="w-[120px] text-right">
                                        <p className="justify-end uppercase font-gilroyMedium text-[36px] mt-16 text-white leading-[16px]">0</p>
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
            {/* my items section */}
            <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>My Items</p>
                    <form className="flex mt-3 mr-5 2xl:mr-0" action="#" method="GET">
                        <div className="relative w-full xl:w-[460px] h-[56px] border-2 border-[#3b3c3c] rounded-[41px] text-black">
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
                </div>
                <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                    <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.65rem]'>
                        {/* card 1 */}
                        <div className='inline-block bg-[#1a1a19] w-[260px] h-[339px] rounded-[15px] cursor-pointer'>
                            <div className="overflow-hidden relative px-[10px] pt-[10px]">
                                <img
                                    src={Section4Card1}
                                    alt="/"
                                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #225</h3>
                            <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
                        </div>
                        {/* card 2 */}
                        <div className='inline-block bg-[#1a1a19] w-[260px] h-[339px] rounded-[15px] cursor-pointer'>
                            <div className="overflow-hidden relative px-[10px] pt-[10px]">
                                <img
                                    src={Section4Card2}
                                    alt="/"
                                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #383</h3>
                            <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
                        </div>
                        {/* card 3 */}
                        <div className='inline-block bg-[#1a1a19] w-[260px] h-[339px] rounded-[15px] cursor-pointer'>
                            <div className="overflow-hidden relative px-[10px] pt-[10px]">
                                <img
                                    src={Section4Card3}
                                    alt="/"
                                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #419</h3>
                            <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
                        </div>
                        {/* card 4 */}
                        <div className='inline-block bg-[#1a1a19] w-[260px] h-[339px] rounded-[15px] cursor-pointer'>
                            <div className="overflow-hidden relative px-[10px] pt-[10px]">
                                <img
                                    src={Section4Card4}
                                    alt="/"
                                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">8PES #737</h3>
                            <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">8pes</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <buttom className='hidden lg:flex mt-[30px] lg:mt-[80px] items-center justify-center w-[228px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-[18px] font-gilroy cursor-pointer'>
                        Show More Items
                        <ArrowDown className="ml-3" />
                    </buttom>
                </div>
                <div className="relative flex flex-col lg:flex-row z-30 mt-[80px] justify-between lg:mt-[100px]">
                    <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Transaction</p>
                    <div className='flex flex-row mt-[15px] lg:mt-[10px] gap-3'>
                        <button className='flex flex-row items-center justify-center w-[118px] h-[56px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy'>
                            <p>Deposit</p>
                        </button>
                        <button className='flex flex-row items-center justify-center text-center w-[153px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
                            <p>NFT Exchange</p>
                        </button>
                    </div>
                </div>
                <div className="w-full mt-[36px] lg:mt-[45px] space-y-1.5 max-h-max border-2 border-[#303d1b] rounded-[15px] px-[10px] py-[10px]">
                    <div className="grid grid-cols-5 text-right justify-between items-center px-[30px] w-full h-[56px] bg-[#1a1a19] rounded-[10px]">
                        <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-left pr-[93px]">Crypto</p>
                        <p className="text-[#888888] text-[16px] font-gilroy uppercase whitespace-nowrap text-right pr-[93px]">Amount</p>
                        <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right px-[93px]">Convert Amount</p>
                        <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right px-[93px]">Status</p>
                        <p className="text-[#888888] text-[16px] font-gilroy whitespace-nowrap text-right pl-[93px]">Reason</p>
                    </div>
                    {/* successful transaction */}
                    <div className="grid grid-cols-5 text-right justify-between items-center px-[30px] w-full h-[56px] bg-[#1a1a19] rounded-[10px]">
                        <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-left pr-[93px]">Ethereum</p>
                        <p className="text-white text-[16px] font-gilroy uppercase whitespace-nowrap text-right pr-[93px]">0.50 ETH</p>
                        <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right px-[93px]">500 USD</p>
                        <p className="text-[#beff55] text-[16px] font-gilroy whitespace-nowrap text-right px-[93px]">Completed</p>
                        <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right pl-[93px]">Inputting funds</p>
                    </div>
                    {/* unsuccessful transaction */}
                    <div className="grid grid-cols-5 text-right justify-between items-center px-[30px] w-full h-[56px] bg-[#1a1a19] rounded-[10px]">
                        <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-left pr-[93px]">Tether USDT</p>
                        <p className="text-white text-[16px] font-gilroy uppercase whitespace-nowrap text-right pr-[93px]">1000 USDT</p>
                        <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right px-[93px]">1000 USD</p>
                        <p className="text-[#ff7455] text-[16px] font-gilroy whitespace-nowrap text-right px-[93px]">Cancelled</p>
                        <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-right pl-[93px]">Inputting funds</p>
                    </div>
                </div>
                <div className="-ml-5 lg:ml-0">
                    <Footer />
                </div>
            </div>
            <ModalUserSettings active={modalUserSettingsActive} setActive={setModalUserSettingsActive} />
            <ModalDeposit active={modalDepositActive} setActive={setModalDepositActive} />
        </div>
    )
}

export default Profile;