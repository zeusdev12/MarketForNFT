import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react'

const AlertImportNft = ({ active, setActive }) => {
    const [open, setOpen] = useState(true)
    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen top-0 mt-[70px] lg:mt-0 left-0 flex justify-center z-50 scale-100" : "fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="bg-white bg-opacity-20 w-[290px] lg:w-[440px] h-[50px] overflow-hidden px-2 py-3">
                    <div className="flex">
                        <div className="flex-shrink-0 mt-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#beff55" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-1">
                            <p className="text-lg font-gilroy tracking-wide font-semibold text-white ">Successfully imported</p>
                        </div>
                        <div className="ml-auto">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex mt-[5px] text-[#beff55]"
                                >
                                    <span className="sr-only">Dismiss</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6" className="h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}

export default AlertImportNft;