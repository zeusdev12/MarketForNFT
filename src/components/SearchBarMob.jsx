import React, { useEffect, useState } from 'react';
import { ReactComponent as Search } from '../assets/search.svg';
import { collections } from "../data";
import { ReactComponent as Validate } from "../assets/validate.svg"
import Section1Card1 from "../assets/cards/section1card1.png"

export const SearchBarMob = () => {

    const [searchText, setSearchText] = useState("");
    const [result, setResult] = useState([]);

    const onSearchtextChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        if (text.length > 0) {
            let searchResult = [];
            for (let i = 0; i < collections.length; i++) {
                if ((collections[i]["name"].toLowerCase().indexOf(text.toLowerCase()) > -1) || (collections[i]["owner"].toLowerCase().indexOf(text.toLowerCase()) > -1)) {
                    searchResult.push(collections[i]);
                }
            }
            setResult(searchResult);
        } else {
            setResult([]);
        }
    }

    const resultHtml = result.map((r) => {
        return (
            <button className='w-[266px] flex flex-row items-center justify-left xl:w-[506px] h-[70px] bg-transparent rounded-[15px] px-3 hover:bg-[#242424] text-white text-base font-gilroy ml-[18px]'>
                <div className='flex flex-row'>
                    <div className='relative'>
                        <img
                            src={Section1Card1}
                            alt="/"
                            className='h-[50px] w-[50px] rounded-full mr-4'
                        />
                        <Validate className="absolute ml-[34px] -mt-[15px] w-[15px] h-[15px]" />
                    </div>
                    <div className='flex flex-col text-left'>
                        <p className='font-gilroy max-w-[160px] truncate text-white text-[18px] mt-[4px]'>{r.name}</p>
                        <p className='font-gilroy max-w-[160px] truncate text-[#828383] text-[14px] -mt-[3px]'>{r.owner}</p>
                    </div>
                </div>
            </button>
        )
    });

    return (
        <div className="flex flex-row lg:hidden">
            <form className="flex" action="#" method="GET">
                <div className="relative w-[300px] h-[50px] border-2 border-[#3b3c3c] rounded-[41px] text-black">
                    <input
                        className="w-[263px] block h-full border-transparent pl-[30px] text-[#828383] placeholder-[#828383] bg-transparent focus:border-transparent font-gilroyMedium focus:outline-none focus:ring-0 text-[16px]"
                        placeholder="Search"
                        value={searchText}
                        onChange={onSearchtextChange}
                    />
                    {
                        result.length != 0 &&
                        <div className='flex flex-col w-[300px] rounded-[15px] max-h-max bg-[#131313] mt-5'>
                            <p className='mt-[10px] font-gilroy text-[18px] ml-[30px] text-[#828383]'>Found <span className='text-white font-gilroy text-[18px]'>1 similarities</span></p>
                            <div className='mb-[10px]'>
                                {resultHtml}
                            </div>
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default SearchBarMob;