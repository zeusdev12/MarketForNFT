import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { config } from '../../config';
// import Collection1icon from "../../assets/cards/collection1icon.png"
import { ReactComponent as Validate } from '../../assets/validate.svg'
import { ReactComponent as Ellipse } from "../../assets/ellipse.svg"


export const Popular = ({ }) => {

    const [collections, setCollections] = useState([]);
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

    const onFromChange = (from) => {
        setFrom(from);
    }

    useEffect(() => {
        axios.get(`${config.api}/collections/collections-popular?from=${from}`)
            .then((response) => {
                setCollections(response.data);
            });
    }, [from])

    let collectionsHtml = collections.map((collection, i) => {

        return(
            <div key={i} className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[360px] h-[332px] rounded-[15px] cursor-pointer'>
                <a href={`/collection/${collection.address}`}>
                    <div className="overflow-hidden relative px-[20px] pt-[20px] h-[230px]">
                        <div className='flex gap-2'>
                            {
                                collection.nfts.length > 0 &&
                                <img
                                    src={collection.nfts[0]["data"]["url"]}
                                    alt="/"
                                    className="h-[100px] w-[155px] rounded-[15px] object-cover object-center group-hover:opacity-75"
                                />
                            }
                            {
                                collection.nfts.length > 1 &&
                                <img
                                    src={collection.nfts[1]["data"]["url"]}
                                    alt="/"
                                    className="h-[100px] w-[155px] rounded-[15px] object-cover object-center group-hover:opacity-75"
                                />
                            }
                        </div>
                        <div className='flex gap-2 mt-2'>
                            {
                                collection.nfts.length > 2 &&
                                <img
                                    src={collection.nfts[2]["data"]["url"]}
                                    alt="/"
                                    className="h-[100px] w-[100px] rounded-[15px] object-cover object-center group-hover:opacity-75"
                                />
                            }
                            {
                                collection.nfts.length > 3 &&
                                <img
                                    src={collection.nfts[3]["data"]["url"]}
                                    alt="/"
                                    className="h-[100px] w-[100px] rounded-[15px] object-cover object-center group-hover:opacity-75"
                                />
                            }
                            {
                                collection.nfts.length > 4 &&
                                <img
                                    src={collection.nfts[4]["data"]["url"]}
                                    alt="/"
                                    className="h-[100px] w-[100px] rounded-[15px] object-cover object-center group-hover:opacity-75"
                                />
                            }
                        </div>
                    </div>
                    <div className="flex items-center ml-5 mt-5">
                        <Ellipse className='w-[50px] h-[50px] rounded-full' />
                        {/* <img
                        src={Collection1icon}
                        alt=""
                        className='w-[50px] h-[50px] rounded-full'
                    /> */}
                        <Validate className='-ml-[16px] mt-[36px] w-[15px] h-[15px]' />
                        <div className='ml-[14px]'>
                            <h3 className='text-lg font-gilroy max-w-[250px] truncate text-white hover:text-[#beff55]'>{collection.name}</h3>
                            <p className="text-sm -mt-[2px] max-w-[250px] truncate font-gilroy text-[#888989]">{collection.nfts.length} Items</p>
                        </div>
                    </div>
                </a>
            </div>
        )

    });

    return (
        <div className="relative z-30 mt-[80px] lg:mt-[100px] pl-5 lg:px-0 lg:mr-5">
            <p className='text-white text-[36px] lg:text-[46px] font-gilroy font-semibold'>Popular Collections</p>
            <div className='flex flex-row justify-between mt-[20px] lg:mt-[30px]'>
                <div className='block whitespace-nowrap space-x-2.5 lg:flex lg:flex-row w-full overflow-x-scroll horizontal_slider'>
                    <button onClick={() => { setFrom(day) }} className='inline-block lg:flex lg:flex-row items-center justify-center w-[157px] h-[56px] text-white rounded-[41px] bg-[#181818] focus:border-2 focus:border-[#3b3c3c] focus:bg-transparent hover:bg-[#232323] text-base font-gilroy'>
                        <p>Last 24 hours</p>
                    </button>
                    <button onClick={() => { setFrom(week) }} className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[142px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323] focus:border-2 focus:border-[#3b3c3c] focus:bg-transparent text-base font-gilroy'>
                        <p>Last 7 days</p>
                    </button>
                    <button onClick={() => { setFrom(month) }} className='inline-block lg:flex lg:flex-row items-center justify-center text-center w-[153px] h-[56px] text-white rounded-[41px] bg-[#181818] hover:bg-[#232323] focus:border-2 focus:border-[#3b3c3c] focus:bg-transparent text-base font-gilroy'>
                        <p>Last 30 days</p>
                    </button>
                </div>
                <div className="hidden md:block mr-4 lg:mr-0">
                    <Link to="/collection" className='flex flex-row items-center justify-center w-[116px] h-[58px] text-white rounded-[41px] border-2 border-[#beff55] hover:bg-[#beff55] hover:text-black hover:font-gilroy hover:font-semibold text-base font-gilroy'>
                        See All
                    </Link>
                </div>
            </div>
            <div className='mt-[30px] lg:mt-10 block w-full overflow-x-scroll horizontal_slider'>
                <div className='block whitespace-nowrap space-x-5 lg:space-x-12'>

                    {
                        collectionsHtml
                    }

                </div>
            </div>
        </div>
    )
}

export default Popular