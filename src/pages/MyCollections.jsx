import { React, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import { ReactComponent as Search } from "../assets/search.svg";
import { Transition, Menu } from '@headlessui/react';
import axios from 'axios';
import { config } from '../config';

const MyCollections = ({ web3, account }) => {

  const [collections, setCollections] = useState([]);

  const fetch = ()=>{

    axios.get(`${config.api}/collections/my?address=${account}`)
    .then((response) => {
        const collections = response.data;
        setCollections(collections);
    });

  }

  const onDelete = (_id)=>{

    if (window.confirm("Delete collections ?") == true){
      axios.post(`${config.api}/collections/delete`,{ account, _id})
      .then((response) => {
        fetch();
      });
    }

  }

  useEffect(()=>{

    fetch();

  },[web3, account]);



  const collectionsHtml = collections.map((col, i)=>{

    return(
            <div key={i} className="grid grid-cols-7 hover:bg-[#252624] cursor-pointer w-[1145px] text-right justify-between items-center px-[30px] h-[56px] bg-[#1a1a19] rounded-[10px] mt-1.5">
               <div className="flex items-center relative">
                    <p className="text-[#888888] text-[16px] font-gilroy mr-[15px]">{i+1}</p>
                    <img
                    src={`${config.api}/${col.logo}`}
                    alt="/"
                    className="w-[40px] h-[40px] rounded-full mr-[15px]"
                    />
                    <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-left">{col.name}</p>
              </div>
              <p className="text-white text-[16px] font-gilroy whitespace-nowrap text-left pl-[220px]">
                 <Link to={`/collections/edit/${col.address}`}>
                    Edit
                 </Link>
                 <Link to={`/collections/mint/${col.address}`} className="ml-[40px]">
                    Mint 
                 </Link>
                 <button className="ml-[40px]" onClick={()=>{ onDelete(col._id)}}>Delete</button>
              </p>
            </div>
    )
  });

  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className="relative z-30 mt-[110px] lg:mt-[188px] pl-5 lg:pl-0 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
        <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold'>My Collections</p>
        <div className='flex flex-col lg:flex-row mt-3.5 lg:mt-2 justify-between'>
           <a href="/collections/add" className="text-white ">Add </a>
           <a href="/collections/create" className="text-white ">Create </a>
        </div>
        <div className="overflow-x-scroll mr-5 lg:mr-0 mt-[40px] lg:mt-[50px] space-y-1.5 max-h-max border-2 border-[#303d1b] rounded-[15px] px-[10px] py-[10px] horizontal_slider">
          {
            collectionsHtml
          }
        </div>
        <div className="-ml-5 lg:ml-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MyCollections;