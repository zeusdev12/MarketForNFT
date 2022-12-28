import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react'
import { ReactComponent as Close } from "../../assets/close.svg"
import Icon1 from "../../assets/icons/Deposit/icon1.png"
import Icon2 from "../../assets/icons/Deposit/icon2.png"
import Icon3 from "../../assets/icons/Deposit/icon3.png"
import Icon4 from "../../assets/icons/Deposit/icon4.png"
import Icon5 from "../../assets/icons/Deposit/icon5.png"

const ModalDeposit = ({ active, setActive }) => {
    const [open, setOpen] = useState(true)
    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] h-[617px] lg:w-[560px] lg:h-[672px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="text-white font-gilroy text-[36px] lg:text-[46px] font-semibold text-center leading-[40px] lg:leading-[50px] mt-4 tracking-wide">
                        <p>Deposit From <br /> Crypto</p>
                    </div>
                    <button className="flex flex-row pl-3 lg:pl-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[30px] lg:mt-[40px] ml-[14px] lg:ml-[30px]">
                        <img
                            src={Icon1}
                            alt="/"
                            className="mr-3" />
                        <p className="text-lg font-gilroyMedium text-white">ETH(ERC-20) = 1211 USDT</p>
                    </button>
                    <button className="flex flex-row pl-3 lg:pl-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                        <img
                            src={Icon2}
                            alt="/"
                            className="mr-3" />
                        <p className="text-lg font-gilroyMedium text-white">USDT(TRC-20) = 1 USDT</p>
                    </button>
                    <button className="flex flex-row pl-3 lg:pl-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                        <img
                            src={Icon3}
                            alt="/"
                            className="mr-3" />
                        <p className="text-lg font-gilroyMedium text-white">XMR = 129 USDT</p>
                    </button>
                    <button className="flex flex-row pl-3 lg:pl-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                        <img
                            src={Icon4}
                            alt="/"
                            className="mr-3" />
                        <p className="text-lg font-gilroyMedium text-white">DASH = 41.32 USDT</p>
                    </button>
                    <button className="flex flex-row pl-3 lg:pl-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                        <img
                            src={Icon5}
                            alt="/"
                            className="mr-3" />
                        <p className="text-lg font-gilroyMedium text-white">DASH = 41.32 USDT</p>
                    </button>
                </div>  
            </div> 
        </Transition.Root>
    )
}

export default ModalDeposit;