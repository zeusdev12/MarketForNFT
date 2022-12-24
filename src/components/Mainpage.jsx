import React from 'react';
import Navpage from '../pages/Navpage';
import "./Mainpage.css"
import ModalRegister from '../pages/ModalRegister';
import { Link, useLocation, NavLink } from "react-router-dom";
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { ReactComponent as Nav } from "../assets/nav.svg"
import { ReactComponent as LogoMini } from "../assets/logomini.svg"
import { ReactComponent as SearchMob } from "../assets/searchmob.svg"
import { ReactComponent as Close } from "../assets/close.svg"
import { ReactComponent as Logo } from "../assets/logo.svg"
import { ReactComponent as Icon1 } from "../assets/icons/icon1.svg"
import { ReactComponent as Icon2 } from "../assets/icons/icon2.svg"
import { ReactComponent as Icon3 } from "../assets/icons/icon3.svg"
import { ReactComponent as Icon5 } from "../assets/icons/icon5.svg"
import { ReactComponent as Icon6 } from "../assets/icons/icon6.svg"
import { ReactComponent as Icon7 } from "../assets/icons/icon7.svg"
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import { ReactComponent as Search } from '../assets/search.svg';


const sidebarNavigation = [
  { name: 'Popular NFT', path: '/popularNFT', icon: Icon1, arrow: Arrow },
  { name: 'New NFT', path: '/newNFT', icon: Icon2, arrow: Arrow },
  { name: 'Collection', path: '/collection', icon: Icon3, arrow: Arrow },
  { name: 'Auctions', path: '/auctions', icon: Icon5, arrow: Arrow },
  { name: 'Launchpad', path: '/launchpad', icon: Icon6, arrow: Arrow },
]

const sidebarNavigationEnd = [
  { name: 'Support', path: '/support', icon: Icon7, current: false, arrow: Arrow },
]

const Mainpage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [modalRegisterActive, setModalRegisterActive] = useState()
  const [isUserRegister, setIsUserRegister] = useState(false)
  const [isLoggedin, setIsLoggedin] = useState(false)
  const location = useLocation()
  const isDashboard = location.pathname.includes("dashboard")
  console.log(location.pathname, "location")
  useEffect(() => {
    const isUserLoggedin = localStorage.getItem("isLoggedin")
    console.log(isUserLoggedin, "isUserLoggedin")
    if (isUserLoggedin) { setIsLoggedin(true) }
  }, []);

  return (
    <div className="min-h-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-screen flex-1 flex-col bg-[#131313] pb-4">
                <div className='w-full px-4 lg:hidden'>
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <Close className='w-10 h-10 mt-4' />
                  </button>
                </div>
                <nav
                  className="mt-[40px] h-full overflow-scroll"
                  aria-label="Sidebar"
                >
                  <div className='w-full text-center'>
                    <button className='w-[340px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold' onClick={() => setModalRegisterActive(true)}>
                      Connect Wallet
                    </button>
                  </div>
                  <nav className="flex flex-col" aria-label="Sidebar">
                    <p className='text-[#F9FAFA80] uppercase font-gilroy text-sm mt-[40px] ml-[55px]'>main menu</p>
                    <div className="space-y-2 ml-[50px] mt-5">
                      {sidebarNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setSidebarOpen(false)}
                          className='group flex items-center text-lg w-[219px] h-[60px] font-gilroyMedium text-white tracking-wide'
                        >
                          <item.icon className="mr-[6px] h-[30px] w-[30px] flex-shrink-0" aria-hidden="true" />
                          {item.name}
                          <item.arrow className="ml-[26px] h-[18px] w-[18px] flex-shrink-0" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                    <p className='text-[#F9FAFA80] uppercase font-gilroy text-sm mt-[60px] ml-[55px]'>more</p>
                    <div className='ml-[50px] mt-5'>
                      {sidebarNavigationEnd.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setSidebarOpen(false)}
                          className='flex items-center text-lg w-[219px] h-[60px] font-gilroyMedium text-white tracking-wide'
                        >
                          <item.icon className="mr-[6px] h-[30px] w-[30px] flex-shrink-0" aria-hidden="true" />
                          {item.name}
                          <item.arrow className="ml-[26px] h-[18px] w-[18px] flex-shrink-0" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </nav>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Sidebar for desktop */}
      {!isDashboard && <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-[259px] lg:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-[#131313] pt-[30px] pb-4">
          <div className="flex flex-shrink-0 items-center ml-[45px]">
            <div className='hidden lg:flex justify-start items-center flex-1'>
              <Link to="/">
                <Logo />
              </Link>
            </div>
          </div>
          <nav className="flex flex-1 flex-col overflow-y-auto" aria-label="Sidebar">
            <p className='text-[#F9FAFA80] uppercase font-gilroy text-sm mt-[58px] ml-[45px]'>main menu</p>
            <div className="space-y-2 px-5 mt-5">
              {sidebarNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className='flex flex-row justify-between items-center pl-[18px] text-lg w-[219px] h-[60px] font-gilroyMedium text-white tracking-wide'
                >
                  <div className='flex flex-row'>
                    <item.icon className="mr-[6px] h-[30px] w-[30px] flex-shrink-0" aria-hidden="true" />
                    <p>{item.name}</p>
                  </div>
                  <item.arrow className="h-[18px] w-[18px] flex-shrink-0 mr-5" aria-hidden="true" />
                </NavLink>
              ))}
            </div>
            <p className='text-[#F9FAFA80] uppercase font-gilroy text-sm mt-[58px] ml-[45px]'>more</p>
            <div className='px-5 mt-5'>
              {sidebarNavigationEnd.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className='flex flex-row justify-between items-center pl-[18px] text-lg w-[219px] h-[60px] font-gilroyMedium text-white tracking-wide'
                >
                  <div className='flex flex-row'>
                    <item.icon className="mr-[6px] h-[30px] w-[30px] flex-shrink-0" aria-hidden="true" />
                    <p>{item.name}</p>
                  </div>
                  <item.arrow className="h-[18px] w-[18px] flex-shrink-0 mr-5" aria-hidden="true" />
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>}

      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="flex fixed lg:absolute lg:ml-[256px] inset-0 h-[70px] flex-shrink-0 bg-[#131313] lg:bg-transparent justify-between lg:justify-start z-50">
          <div className='flex items-center'>
            <button
              type="button"
              className="px-4 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Nav className='w-10 h-10' />
            </button>
          </div>
          <div className='flex lg:hidden items-center'>
            <Link to="/">
              <LogoMini className='w-[50px] h-[50px]' />
            </Link>
          </div>
          <div className='flex lg:hidden items-center px-4'>
            <SearchMob className='w-10 h-10' />
          </div>
          {/* Search bar */}
          <div className="hidden lg:flex lg:flex-row justify-between lg:ml-[40px] 3xl:ml-[120px] lg:w-[1200px] lg:pt-[30px] z-30">
            <div className="flex flex-row">
              <form className="flex" action="#" method="GET">
                <div className="relative xl:w-[560px] h-[56px] border-2 border-[#3b3c3c] rounded-[41px] text-black">
                  <input
                    id="search-field"
                    name="search-field"
                    className="w-[400px] block h-full border-transparent pl-[30px] text-[#828383] placeholder-[#828383] bg-transparent focus:border-transparent font-gilroyMedium focus:outline-none focus:ring-0 text-[16px]"
                    placeholder="Search Collections and Creators"
                    type="search"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 pr-4 md:pr-[30px] flex items-center" aria-hidden="true">
                    <Search className="h-[19px] w-[19px] text-[#828383]" aria-hidden="true" />
                  </div>
                </div>
              </form>
            </div>
            <div className="ml-4 hidden md:flex md:flex-row md:mt-5 items-center space-x-3 mr-5">
              {isUserRegister || isLoggedin ? <button className='w-[213px] h-[58px] rounded-[41px] text-white bg-transparent text-[18px] font-gilroy tracking-wide border-2 border-[#3b3c3c]'>
                Подключенный кошель
              </button> : <button className='w-[190px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold -mt-[1px]' onClick={() => setModalRegisterActive(true)}>
                Connect Wallet
              </button>}
              {isUserRegister || isLoggedin ? <Link to="/dashboard" className='w-[154px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-center text-[18px] font-gilroy tracking-wide font-semibold'>
                <p className='mt-[14px]'>Dashboard</p>
              </Link> : ""}
            </div>
          </div>
        </div>
        <Navpage />
      </div>
      <ModalRegister active={modalRegisterActive} setActive={setModalRegisterActive} setIsUserRegister={setIsUserRegister} />
    </div>
  )
}

export default Mainpage;