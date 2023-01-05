import React, { useState, useEffect, Fragment } from "react";
import { useParams } from 'react-router-dom';
import { Transition, Menu } from '@headlessui/react'
import "./OpenPageNFT.css"
import { ReactComponent as StatusTop } from "../assets/statustop.svg"
import { ReactComponent as ArrowDown } from "../assets/arrowdown.svg"
import { ReactComponent as Validate } from '../assets/validate.svg'
import Footer from "./Footer";
import { config } from "../config";
import NftCard from "./nftCard/nftCard";
import { getDifference, formatAddress, formaStringDate } from "../contracts/utils";
import axios from 'axios';

const OpenPageNFT = ({ onBuy, account }) => {

    const params = useParams();
    const [collection, setCollection] = useState({});
    const [images, setImages] = useState([]);
    const [current, setCurrent] = useState({});
    const [difference, setDifference] = useState('0');

    useEffect(() => {

        axios.get(`${config.api}/nft/get?id=${params.id}`)
        .then((response)=>{
            const nft = response.data;
            axios.get(`${config.api}/collections/get?address=${nft.address}`)
            .then((response) => {

                const collection = response.data;
                setCollection(collection);
                setCurrent(nft);
                axios.get(`${config.api}/nft/collection?address=${nft.address}&limit=5`)
                .then((response) => {
                    const list = response.data;
                    let other = list.filter((l)=>{ return l._id !== nft._id });
                    setImages(other);
                });
            });
        });

        getDifference().then((diff) => {
            setDifference(diff);
        });

    }, [params.id, account]);

    const onBuyClick = () => {
        onBuy(current.owner, current.id, current.price, collection.address)
    }

    const otherNft = images.map((nft, i) => {
        return <NftCard key={i} data={nft}></NftCard>
    });

    return (
        <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
            <div className='mt-[140px] lg:mt-[208px] flex flex-col lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1200px]'>
                {/* Header section */}
                <div className="relative flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8 overflow-hidden items-center lg:items-start px-4 lg:px-0">
                    <div className="flex flex-col">
                        <p className="mt-[40px] lg:mt-0 text-[#828383] text-sm uppercase font-gilroyMedium">{formaStringDate(collection.createdAt)}</p>
                        <p className="mt-[30px] text-white text-[36px] lg:text-[62px] font-gilroy font-semibold leading-[40px] lg:leading-[65px]">{collection.name} #{current.id}</p>
                        <div className="flex items-center">
                            {
                                collection.author  &
                                <>
                                    <p className="mt-[13px] text-[#beff55] text-base lg:text-xl font-gilroy">{collection.author}</p>
                                    <Validate className='mt-3 ml-[10px] w-[15px] h-[15px]' />
                                </>
                            }
                        </div>
                        <p className="mt-[30px] text-[#828383] text-base lg:text-lg font-gilroy font-semibold max-w-[560px]">
                            {collection.description}
                        </p>

                        <Menu as="div" className="relative mt-[30px]">
                            <div className="flex flex-col border-2 border-[#3b3c3c] rounded-[15px] max-w-[560px] lg:max-w-[560px] max-h-[251px] px-[30px] lg:hover:border-[#beff55]">
                                <Menu.Button className="flex flex-row max-w-[560px] lg:max-w-[497px] justify-between items-center h-[60px]">
                                    <p className="text-lg font-gilroy text-white">More Details</p>
                                    <ArrowDown />
                                </Menu.Button>
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
                                        <div className="flex flex-col">
                                            <div className="flex flex-row mt-3 justify-between max-w-[560px] lg:max-w-[497px]">
                                                <p className="text-lg font-gilroy text-white">Contract Address</p>
                                                <p className="text-lg font-gilroy text-[#828383]">{formatAddress(current.address)}</p>
                                            </div>
                                            <div className="flex flex-row mt-3 justify-between max-w-[560px] lg:max-w-[497px]">
                                                <p className="text-lg font-gilroy text-white">Token ID</p>
                                                <p className="text-lg font-gilroy text-[#828383]">{current.id}</p>
                                            </div>
                                            <div className="flex flex-row mt-3 justify-between max-w-[560px] lg:max-w-[497px]">
                                                <p className="text-lg font-gilroy text-white">Token Standard</p>
                                                <p className="text-lg font-gilroy text-[#828383]">ERC721</p>
                                            </div>
                                            <div className="flex flex-row mt-3 justify-between max-w-[560px] lg:max-w-[497px] pb-4 lg:pb-[40px]">
                                                <p className="text-lg font-gilroy text-white">Owner</p>
                                                <p className="text-lg font-gilroy text-[#828383]">{formatAddress(current.owner)}</p>
                                            </div>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        </Menu>


                        <div className="mt-[40px] h-[184px] max-w-[560px] lg:max-w-[560px] lg:h-[131px] rounded-[15px] bg-[#181818] justify-between">
                            <div className="flex flex-col lg:flex-row p-[30px] lg:max-w-[560px] justify-between">
                                <div className="grid">
                                    <div className="bg-[#beff55] w-[68px] h-[25px] text-center rounded-[29px]">
                                        <p className="text-black font-gilroyMedium font-semibold text-sm mt-[2px]"> {difference} %</p>
                                    </div>
                                    <div>
                                        <p className="mt-[2px] text-[36px] font-gilroy font-semibold text-white tracking-wider">{current.price} ETH</p>
                                    </div>
                                </div>
                                {
                                    current && current.owner !== account && current.status == "listed" &&
                                    <button onClick={onBuyClick} className='lg:w-[190px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold mt-1 lg:mt-2'>Buy Now</button>
                                }
                                {
                                     current && current.status == "delisted" &&
                                    <p className='lg:w-[190px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold mt-1 lg:mt-2'>Delisted</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="lg:mr-5 3xl:mr-0">
                        <div className="bg-[#1a1a19] w-[369px] h-[369px] 2xl:w-[560px] 2xl:h-[560px] rounded-[15px]">
                            <div className="overflow-hidden relative px-[10px] py-[10px]">
                                {
                                    current && current.data &&
                                    <img alt="img" src={current.data.url} className="w-[349px] h-[349px] 2xl:w-[540px] 2xl:h-[540px] rounded-[10px] object-cover object-center group-hover:opacity-75"></img>
                                }
                                <StatusTop className='absolute right-0 top-0 mt-[14px] mr-[14px] xl:mt-[17px] xl:mr-[17px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-30 mt-[80px] lg:mt-[150px] lg:mr-5 pl-4 lg:pl-0">
                    <div className='flex flex-row justify-between'>
                        <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold leading-[40px] lg:leading-[50px]'>Other NTFs in this <br /> collection</p>
                        <div className="hidden md:block mr-4 lg:mr-0">
                            <a href={`/collection/${collection.address}`} className='flex flex-row items-center justify-center w-[205px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy mt-5'>
                                See All Collection
                            </a>
                        </div>
                    </div>
                    <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                        <div className='block whitespace-nowrap space-x-5 lg:space-x-[2.85rem]'>
                            {
                                otherNft
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href={`/collection/${collection.address}`} className='flex md:hidden mt-[30px] items-center justify-center w-[319px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] text-base font-gilroy'>
                        See All Collection
                    </a>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default OpenPageNFT;