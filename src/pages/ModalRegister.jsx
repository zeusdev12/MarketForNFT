import React from "react";

const ModalRegister = ({ active, setActive }) => {
    return (
        <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
            <div className="rounded-[15px] bg-[#131313] lg:w-[560px] lg:h-[791px]" onClick={e => e.stopPropagation()}>
                <div className="flex flex-row w-full justify-end p-5">
                    <button className="bg-[#1e1f1f] rounded-[10px] w-10 h-10">
                        <svg className="w-5 h-5 ml-[10px]" clip-rule="evenodd" fill-rule="evenodd" fill="#8b8c8c" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>
                    </button>
                </div>
                <div className="text-white font-gilroy text-[46px] font-semibold text-center leading-[50px] mt-4 tracking-wide">
                    <p>Welcome to <br /> Crypto Market</p>
                </div>
                <form className="mt-10 lg:w-[440px] lg:ml-[60px]" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="pb-[15px]">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="name"
                            autoComplete="name"
                            required
                            className="relative block w-full appearance-none border-2 border-[#3b3b3b] bg-transparent lg:h-[56px] px-5 text-[#8b8c8c] placeholder-[#8b8c8c] focus:z-10 focus:border-[#8b8c8c] focus:outline-none focus:ring-indigo-500 lg:text-[16px] font-gilroy rounded-[10px]"
                            placeholder="Name"
                        />
                    </div>
                    <div className="pb-[15px]">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full appearance-none border-2 border-[#3b3b3b] bg-transparent lg:h-[56px] px-5 text-[#8b8c8c] placeholder-[#8b8c8c] focus:z-10 focus:border-[#8b8c8c] focus:outline-none focus:ring-indigo-500 lg:text-[16px] font-gilroy rounded-[10px]"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="pb-[15px]">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none border-2 border-[#3b3b3b] bg-transparent lg:h-[56px] px-5 text-[#8b8c8c] placeholder-[#8b8c8c] focus:z-10 focus:border-[#8b8c8c] focus:outline-none focus:ring-indigo-500 lg:text-[16px] font-gilroy rounded-[10px]"
                            placeholder="Password"
                        />
                    </div>
                    <div className="pb-[15px]">
                        <label htmlFor="password" className="sr-only">
                            Confirm Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none border-2 border-[#3b3b3b] bg-transparent lg:h-[56px] px-5 text-[#8b8c8c] placeholder-[#8b8c8c] focus:z-10 focus:border-[#8b8c8c] focus:outline-none focus:ring-indigo-500 lg:text-[16px] font-gilroy rounded-[10px]"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="terms-of-service"
                                name="terms-of-service"
                                type="checkbox"
                                className="w-5 h-5 border-2 border-[#3b3b3b] rounded-[4px] before:inline-block before:w-5 before:h-5 before:rounded-[4px] before:border-2 before:border-[#3b3b3b] before:text-[#beff55]"
                            />
                            <label htmlFor="terms-of-service" className="ml-[10px] block text-[14px] text-[#8b8c8c] font-gilroyMedium">
                                I have read and agree to the <span className="text-[#beff55] tracking-wide underline">Terms of Service</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ModalRegister;