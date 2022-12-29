import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react';
import { ReactComponent as Close } from "../../assets/close.svg";
import QRcode from "../../assets/icons/Deposit/QRcode.png";
import QRCode from "react-qr-code";

const ModalDepositOpen = ({ active, setActive, account }) => {
    const [open, setOpen] = useState(true)
    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] h-[730px] lg:w-[560px] lg:h-[682px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="flex items-center mt-5 text-center justify-center">
                        <div className='bg-[#1e1f1f] w-[170px] h-[170px] rounded-[15px] cursor-pointer overflow-hidden relative px-[10px] py-[10px]'>
                            {
                                account &&
                                <QRCode value={account} />
                            }
                            {/* <img
                                src={QRcode}
                                alt="/"
                                className="h-[150px] w-[150px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                            /> */}
                        </div>
                    </div>
                    <div className="flex flex-col mt-[20px] text-center">
                        <p className="text-white text-[26px] font-gilroy font-semibold">ETH(ERC-20)</p>
                        {/* <p className="text-[#828383] text-[18px] font-gilroy font-semibold">Minimum deposit - 1 ETH(ERC-20)</p> */}
                    </div>
                    <div className="flex flex-col mt-[35px] px-[15px] lg:px-[30px]">
                        <p className="text-[#828383] text-[18px] font-gilroy font-semibold">Transfer to this address</p>
                        <div className="flex flex-col lg:flex-row mt-[15px]">
                            <button className="flex flex-row items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[375px] h-[56px] rounded-[10px] px-[20px]">
                                <p className="text-lg font-gilroy max-w-[250px] lg:max-w-[335px] truncate text-white">{account}</p>
                            </button>
                            <button className="w-full lg:w-[105px] h-[58px] rounded-[52px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center lg:ml-[20px] mt-[5px] lg:mt-0">
                                <p className="-mt-[1px]">Copy</p>
                            </button>
                        </div>
                        {/* <input
                            type="amount"
                            name="amount"
                            id="amount"
                            className="flex w-full mt-[15px] h-[56px] rounded-[10px] text-[#828383] text-[16px] font-gilroy font-semibold placeholder-[#828383] border-2 border-[#2a2a2a] px-[20px] focus:outline-none focus:ring-0 bg-transparent"
                            placeholder="Amount"
                            aria-describedby="amount-description"
                        /> */}
                    </div>
                    {/* <div className="flex mt-[30px] justify-center px-4 lg:px-0">
                        <button className="w-full lg:w-[227px] h-[58px] rounded-[52px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center lg:ml-[20px] mt-[5px] lg:mt-0">
                            Confirm the Transfer
                        </button>
                    </div> */}
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalDepositOpen;