import React, { useEffect } from 'react';
import Navpage from './Navpage';
import "./Mainpage.css"
import ModalConnectWallet from './ModalConnectWallet';
import { Link, NavLink } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import Web3 from 'web3';
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from 'walletlink'
import { formatAddress } from '../contracts/utils';
import { config } from '../config';
import { ABI } from '../contracts/nft';

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
const Tx = require('ethereumjs-tx').Transaction;
const Common = require('ethereumjs-common').default;

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


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalConnectWalletActive, setModalConnectWalletActive] = useState();

  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();

  const onConnectMetamask = async ()=>{

    if(window.ethereum){
      const web3 =  new Web3(window.ethereum);
      await window.ethereum.enable();
      web3.eth.getAccounts().then((e) =>{
        localStorage.setItem('provider', 'm');
        setWeb3(web3);
        setAccount(e[0]);
        setModalConnectWalletActive(false);
      });
    }else{
       alert("Please install metamask extension")
    }

  }

  const onConnectWalletConnect = async ()=>{

    const provider =  await new WalletConnectProvider({infuraId: config.infura});
    await provider.enable();
    const web3 = await new Web3(provider);
    web3.eth.getAccounts().then(e =>{
        localStorage.setItem('provider', 'w');
        setWeb3(web3);
        setAccount(e[0]);
        setModalConnectWalletActive(false);
     });

  }

  const onConnectCoinbase = async ()=>{
  
    const walletLink = new WalletLink({});
    const provider = walletLink.makeWeb3Provider(config.infura, 1);
    await provider.enable();
    const web3 = new Web3(provider);
    web3.eth.getAccounts().then(e =>{
      localStorage.setItem('provider', 'c');
      setWeb3(web3);
      setAccount(e[0]);
      setModalConnectWalletActive(false);
   });

  }

  const checkConnection = ()=>{
     let provider = localStorage.getItem('provider');
     if(provider == 'm'){
      onConnectMetamask();
     }else if(provider == 'w'){
      onConnectWalletConnect();
     }else if(provider == 'c'){
      onConnectWalletConnect();
     }
  }

  const transferToken = (owner, to, id, contractAddress)=>{

    const BSC_FORK = Common.forCustomChain(
          'mainnet',
          {
             name: 'Binance Smart Chain Mainnet',
             networkId: 97,
             chainId: 97,
             url: config.rpc
          },
          'istanbul',
    );

    const provider = new Web3.providers.HttpProvider(config.rpc);
    const web3 = new Web3(provider);

    const privateKey = Buffer.from("8ecde3cb39bd68246b9e56ce2ab693653abe7481d68b24e942582c0123d59393", 'hex');
    const contract = new web3.eth.Contract(ABI, contractAddress, { from: owner });

    web3.eth.getTransactionCount(owner).then((count) => {
      
       let rawTransaction = {
           'from': owner,
           'gasPrice': web3.utils.toHex(20 * 1e9),
           'gasLimit': web3.utils.toHex(410000),
           'to': contractAddress,
           'value': 0x0,
           'data': contract.methods.transferFrom(owner, to, id).encodeABI(),
           'nonce': web3.utils.toHex(count)
       };
   
       let transaction = new Tx(rawTransaction, { 'common': BSC_FORK });
       transaction.sign(privateKey);
       web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
       .on('receipt', function(receipt){
            alert("Done!");             
       }).on('error', function(error){
            alert("Something wrong!");    
       });

   });

  }

  const onBuy = (owner, id, amount, contractAddress)=>{
    if(web3){
       web3.eth.sendTransaction({
          from: account,
          to: owner, 
          value: web3.utils.toWei(amount.toString(), "ether"), 
       }, function(err, transactionHash) {
             if(!err){
                transferToken(owner, account, id, contractAddress);
             }else{
                alert("Something wrong!");
             }
       });
    }else{
          setModalConnectWalletActive(true);
    }
}


  useEffect(()=>{
    checkConnection();
  },[])


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
                    {
                       !account &&
                        <button className='relative w-[340px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden' onClick={() => setModalConnectWalletActive(true)}>
                        <p onClick={() => setSidebarOpen(false)}>Connect Wallet</p>
                      </button>
                    }
                    {
                        account &&
                        <button className='w-[340px] h-[58px] rounded-[41px] text-white bg-transparent text-[18px] font-gilroy tracking-wide border-2 border-[#3b3c3c]'>
                          { formatAddress(account) }
                        </button>
                      }
                      {
                         account &&
                         <button className='mt-5 w-[340px] h-[58px] rounded-[41px] text-black bg-[#beff55]'>
                            <Link to="/profile" className='text-black text-center text-[18px] font-gilroy tracking-wide font-semibold'>
                              <p>Profile</p>
                            </Link>
                          </button>
                      }
                    {/* <button className='w-[340px] h-[58px] rounded-[41px] text-white bg-transparent text-[18px] font-gilroy tracking-wide border-2 border-[#3b3c3c]'>
                      Подключенный кошель
                    </button>
                    <button className='mt-5 w-[340px] h-[58px] rounded-[41px] text-black bg-[#beff55]'>
                    <Link to="/profile" className='text-black text-center text-[18px] font-gilroy tracking-wide font-semibold'>
                      <p>Profile</p>
                    </Link>
                    </button> */}
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
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-[259px] lg:flex-col">
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
                    <item.icon className="mr-[8px] -mt-[1px] h-[30px] w-[30px] flex-shrink-0" aria-hidden="true" />
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
                    <item.icon className="mr-[8px] -mt-[1px] h-[30px] w-[30px] flex-shrink-0" aria-hidden="true" />
                    <p>{item.name}</p>
                  </div>
                  <item.arrow className="h-[18px] w-[18px] flex-shrink-0 mr-5" aria-hidden="true" />
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>

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
            <div className="hidden md:flex md:flex-row md:mt-5 items-center space-x-3 mr-5">
              {
                account &&
                <button className='w-[213px] h-[58px] rounded-[41px] text-white bg-transparent text-[18px] font-gilroy tracking-wide border-2 border-[#3b3c3c]'>
                 { formatAddress(account) }
                </button>
              } 
              {
                 !account &&
                 <button className='relative w-[190px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold -mt-[1px] before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden' onClick={() => setModalConnectWalletActive(true)}>
                  <p onClick={() => setSidebarOpen(false)}>Connect Wallet</p>
                </button>
              }
              {
                 account &&
                 <Link to="/profile" className='relative w-[111px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-center text-[18px] font-gilroy tracking-wide font-semibold before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden'>
                  <p className='mt-[14px]'>Profile</p>
                </Link>
              }
            </div>
          </div>
        </div>
        <Navpage onBuy={onBuy}/>
      </div>
      <ModalConnectWallet active={modalConnectWalletActive} setActive={setModalConnectWalletActive} onConnectCoinbase={onConnectCoinbase} onConnectMetamask={onConnectMetamask} onConnectWalletConnect={onConnectWalletConnect}/>
    </div>
  )
}

export default Mainpage;