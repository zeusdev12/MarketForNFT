import { React, useState, Fragment } from "react";
import { Transition, Menu } from '@headlessui/react'
import { ReactComponent as Close } from "../assets/close.svg"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import { Tab } from '@headlessui/react'
import "./ModalConnectWallet.css"

import { ReactComponent as Phantom } from "../assets/icons/ConnectWallet/Solana/phantom.svg"

import MetaMask from "../assets/icons/ConnectWallet/Ethereum/metamask.png"
import WalletConnect from "../assets/icons/ConnectWallet/Ethereum/walletconnect.png"
import Coinbase from "../assets/icons/ConnectWallet/Ethereum/coinbase.svg"
import CryptoCom from "../assets/icons/ConnectWallet/Ethereum/cryptocom.png"

import Slope from "../assets/icons/ConnectWallet/Solana/slope.png"
import Exodus from "../assets/icons/ConnectWallet/Solana/exodus.png"
import Brave from "../assets/icons/ConnectWallet/Solana/brave.png"
import CoinbaseWallet from "../assets/icons/ConnectWallet/Solana/coinbasewallet.png"
import Backpack from "../assets/icons/ConnectWallet/Solana/backpack.png"
import Soltfare from "../assets/icons/ConnectWallet/Solana/soltfare.png"
import Torus from "../assets/icons/ConnectWallet/Solana/torus.png"
import Clover from "../assets/icons/ConnectWallet/Solana/clover.png"
import Coin98 from "../assets/icons/ConnectWallet/Solana/coin98.png"
import Ledger from "../assets/icons/ConnectWallet/Solana/ledger.png"
import Solong from "../assets/icons/ConnectWallet/Solana/solong.png"
import MathWallet from "../assets/icons/ConnectWallet/Solana/mathwallet.png"
import Glow from "../assets/icons/ConnectWallet/Solana/glow.png"
import Spot from "../assets/icons/ConnectWallet/Solana/spot.png"
import BitKeep from "../assets/icons/ConnectWallet/Solana/bitkeep.png"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ModalConnectWallet = ({ active, setActive, onConnectMetamask, onConnectWalletConnect, onConnectCoinbase }) => {
    const [open, setOpen] = useState(true)
    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] lg:w-[560px] max-h-[600px] lg:max-h-[700px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="text-white font-gilroy text-[36px] lg:text-[46px] font-semibold text-center leading-[40px] lg:leading-[50px] mt-4 tracking-wide">
                        <p>Connect a wallet <br /> to continue</p>
                    </div>
                    <div>
                        <div className="mt-[20px]">
                            <Tab.Group as="div">
                                <Tab.List className="flex ml-[34px] lg:ml-[154px] space-x-2">
                                    {/* <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                selected
                                                    ? 'text-base font-gilroy tracking-wide text-white border-2 border-[#3b3c3c] w-[112px] h-[56px] rounded-[52px]'
                                                    : 'text-base font-gilroy tracking-wide text-white border-none border-transparent w-[112px] h-[56px] bg-[#1e1f1f] rounded-[52px]'
                                            )
                                        }
                                    >
                                        Solana
                                    </Tab> */}
                                    <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                selected
                                                    ? 'text-base font-gilroy tracking-wide text-white border-2 border-[#3b3c3c] w-[130px] h-[56px] rounded-[52px]'
                                                    : 'text-base font-gilroy tracking-wide text-white border-none border-transparent w-[130px] h-[56px] bg-[#1e1f1f] rounded-[52px]'
                                            )
                                        }
                                    >
                                        Ethereum
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels as={Fragment}>
                                     {/*<Tab.Panel className="pb-[40px] lg:pb-[50px]">
                                        <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[30px] lg:mt-[40px] ml-[14px] lg:ml-[30px]">
                                            <Phantom className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">Phantom</p>
                                        </button>
                                        <Menu as="div" className="relative">
                                            <div>
                                                <Menu.Button className="flex flex-row items-center justify-between border-2 border-[#beff55] w-[290px] h-[58px] rounded-[52px] mt-[20px] ml-[14px] lg:mt-[30px] lg:ml-[132px] px-[50px]">
                                                    <p className="text-lg font-gilroy text-white">Show More Options</p>
                                                    <ArrowDown />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items>
                                                    <div className="block whitespace-nowrap w-full h-[170px] lg:h-[199px] mt-[20px] lg:mt-[30px]  overflow-y-scroll horizontal_slider">
                                                        <div className="block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Slope}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Slope</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Exodus}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Exodus</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Brave}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Brave</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={CoinbaseWallet}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Coinbase Wallet</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Backpack}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Backpack</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Soltfare}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Soltfare</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Torus}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Torus</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Clover}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Clover</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Coin98}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Coin98</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Ledger}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Ledger</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Solong}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Solong</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={MathWallet}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">MathWallet</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Glow}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Glow</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={Spot}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">Spot</p>
                                                            </button>
                                                        </div>
                                                        <div className="mt-[10px] block">
                                                            <button className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] ml-[14px] lg:ml-[30px]">
                                                                <img
                                                                    src={BitKeep}
                                                                    alt="/"
                                                                    className="mr-3" />
                                                                <p className="text-lg font-gilroy text-white">BitKeep</p>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>

                                    </Tab.Panel> */}

                                    <Tab.Panel className="pb-[40px] lg:pb-[50px]">
                                        <button onClick={onConnectMetamask} className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[30px] lg:mt-[40px] ml-[14px] lg:ml-[30px]">
                                            <img
                                                src={MetaMask}
                                                alt="/"
                                                className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">MetaMask</p>
                                        </button>
                                        <button onClick={onConnectWalletConnect} className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                                            <img
                                                src={WalletConnect}
                                                alt="/"
                                                className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">WalletConnect</p>
                                        </button>
                                        <button onClick={onConnectCoinbase} className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                                            <img
                                                src={Coinbase}
                                                alt="/"
                                                className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">Coinbase</p>
                                        </button>
                                        <button onClick={onConnectWalletConnect} className="flex flex-row px-5 items-center border-2 border-[#2a2a2a] w-[290px] lg:w-[500px] h-[70px] rounded-[15px] mt-[10px] ml-[14px] lg:ml-[30px]">
                                            <img
                                                src={CryptoCom}
                                                alt="/"
                                                className="mr-3" />
                                            <p className="text-lg font-gilroy text-white">Crypto.com</p>
                                        </button>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalConnectWallet;