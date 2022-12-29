import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react'
import { ReactComponent as Close } from "../assets/close.svg"
import "./ModalConnectWallet.css"

const ModalSelectWallet = ({ active, setActive, accounts }) => {

    const [open, setOpen] = useState(true)

    let accountsHtml = accounts.map((account)=>{
        return(
            <div className="mt-[20px]" key={account}>
                <button className=" text-white flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                   { account }              
                 </button>
            </div>
        );
    });

    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] lg:w-[560px] max-h-[600px] lg:max-h-[700px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="text-white font-gilroy text-[36px] lg:text-[46px] font-semibold text-center leading-[40px] lg:leading-[50px] mt-4 tracking-wide">
                        <p>Select account</p>
                    </div>
                    <div className="pb-[40px] ">
                        {
                            accountsHtml
                        }
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalSelectWallet ;