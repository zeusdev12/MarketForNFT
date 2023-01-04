import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react'
import { ReactComponent as Close } from "../assets/close.svg"

const ModalSupport = ({ active, setActive }) => {
    const [open, setOpen] = useState(true)
    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] lg:w-[560px] h-[300px] lg:h-[400px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="text-[#beff55] font-gilroy text-[36px] lg:text-[46px] font-semibold text-center leading-[40px] lg:leading-[50px] mt-4 tracking-wide">
                        Your message <br /> has been <br />successfully<br /> delivered!
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalSupport;