import { React, Fragment, useEffect, useState } from "react";
import Footer from "../components/Footer"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import { ReactComponent as Search } from "../assets/search.svg";
import { Transition, Menu } from '@headlessui/react';
import { ReactComponent as StatusTop } from "../assets/statustop.svg"
import { config } from "../config";
import axios from "axios";

const PopularNFT = () => {

  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);

  let d1 = new Date();
  d1.setMonth(d1.getMonth() - 1);   
  d1.setHours(0, 0, 0, 0);

  let d2 = new Date();
  d2.setDate(d1.getDate() - 7);   
  d2.setHours(0, 0, 0, 0);

  let d3 = new Date();
  d3.setDate(d1.getDate() - 1);   
  d3.setHours(0, 0, 0, 0);

  const [from, setFrom] = useState(d1);
  const [month] = useState(d1);
  const [week] = useState(d2);
  const [day] = useState(d3);

  const onFromChange = (from)=>{
    setFrom(from);
  }
 
  const onSearchTextChange = (e)=>{
    setSearchText(e.target.value);
  }

  const fetch = ()=>{

    axios.get(`${config.api}/collections/popular?text=${searchText}&from=${from}`)
    .then((response) => {
        const images = response.data;
        setImages(images);
    });

  }
  
  useEffect(()=>{

    fetch();

  },[from, searchText])

  let imagesHtml = images.map((nft)=>{
    return (
      <div className='bg-[#1a1a19] w-[320px] h-[402px] lg:w-[260px] lg:h-[339px] rounded-[15px] cursor-pointer'>
         <a href={`/item/${nft._id}`}>
         <div className="overflow-hidden relative px-[10px] pt-[10px]">
        <img
          src={nft.data.url}
          alt="/"
          className="w-[300px] h-[313px] lg:w-[240px] lg:h-[250px] object-cover rounded-[10px] object-center group-hover:opacity-75"
        />
        <StatusTop className='absolute -mt-[309px] ml-[256px] lg:-mt-[246px] lg:ml-[196px]' />
      </div>
      <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">{nft.collection} #{nft.id}</h3>
      <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">{nft.data.name}</p>
         </a>
      </div>
    )
  })

  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[973px] lg:h-[673px]' />
      <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[350px] h-[240px] md:w-[400px] 2xl:w-[1573px] lg:h-[673px]' />
      <div className="relative z-30 mt-[110px] lg:mt-[188px] pl-5 lg:pl-0 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
        <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold'>Popular Nft</p>
        <div className='flex flex-col lg:flex-row mt-3.5 lg:mt-2 justify-between'>
          <form className="flex mt-3 pr-5 xl:pr-1" action="#" method="GET">
            <div className="relative w-full 3xl:w-[460px] h-[56px] border-2 border-[#3b3c3c] rounded-[41px] text-black">
               <input
                id="search-field"
                name="search-field"
                className="block h-full border-transparent pl-[30px] text-[#828383] placeholder-[#828383] bg-transparent focus:border-transparent font-gilroyMedium focus:outline-none focus:ring-0 text-[16px]"
                placeholder="Search"
                type="search"
                value={searchText}
                onChange={onSearchTextChange}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 pr-4 md:pr-[30px] flex items-center" aria-hidden="true">
                <Search className="h-[19px] w-[19px] text-[#828383] mr-2 lg:mr-0" aria-hidden="true" />
              </div>
            </div>
          </form>
          <div className='block whitespace-nowrap lg:ml-[30px] mt-[15px] lg:mt-[12px] space-x-2.5 lg:flex lg:flex-row w-full overflow-x-scroll horizontal_slider'>
            {/* <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[112px] h-[56px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy'>
              <p>Solana</p>
            </button> */}
            <button className='inline-block lg:flex lg:flex-row items-center justify-center w-[130px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323] text-base font-gilroy'>
              <p>Ethereum</p>
            </button>
            {/* <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[119px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
              <p>Polygon</p>
            </button>
            <button className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[78px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323]  text-base font-gilroy'>
              <p>All</p>
            </button> */}
          </div>
          <Menu as="div" className="relative">
            <div className="flex mt-[15px] lg:mt-[12px] pr-5 xl:pr-0">
              <Menu.Button className='w-full flex flex-row items-center justify-center lg:w-[171px] h-[56px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy hover:border-[#beff55]'>
                <p>Last 30 days</p>
                <ArrowDown className="ml-2.5" />
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
              <Menu.Items className="absolute -ml-[2px] z-10 mt-2 w-[179px] h-[148px] rounded-[15px] border-2 border-[#3b3c3c] bg-[#131313] py-[3px] px-[3px] focus:outline-none">
                <button onClick={()=>{ onFromChange(month);}} className="w-[169px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                  <p className="-ml-[16px] text-white text-base font-gilroy">
                    Last 30 days
                  </p>
                </button>
                <button onClick={()=>{ onFromChange(week);}}  className="w-[169px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                  <p className="-ml-[26px] text-white text-base font-gilroy">
                    Last 7 days
                  </p>
                </button>
                <button onClick={()=>{ onFromChange(day);}}  className="w-[169px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                  <p className="-ml-[33px] text-white text-base font-gilroy">
                    Last 1 day
                  </p>
                </button>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className='mt-[34px] lg:mt-14 -ml-3 lg:ml-0 w-full overflow-x-hidden'>
          <div className='flex flex-col lg:flex-row lg:flex-wrap w-full items-center lg:items-start gap-3.5 lg:gap-[2.55rem]'>
             {
                imagesHtml
             }
          </div>
        </div>
        <div className="-ml-5 lg:ml-0">
          {/* <div className="flex flex-row justify-center">
            <button className='flex mt-[30px] lg:mt-[80px] items-center justify-center w-[350px] lg:w-[228px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-[18px] font-gilroy cursor-pointer'>
              Show More Items
              <ArrowDown className="ml-3" />
            </button>
          </div> */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PopularNFT;