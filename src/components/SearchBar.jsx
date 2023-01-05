import React, { useEffect, useState } from 'react';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Validate } from "../assets/validate.svg"
import axios from 'axios';
import { config } from '../config';

export const SearchBar = () => {

    const [searchText, setSearchText] = useState("");
    const [result, setResult] = useState([]);
    const [collections, setCollections] = useState([]);

    useEffect(()=>{
        axios.get(`${config.api}/collections/list`)
        .then((response) => {
            setCollections(response.data);
        });
    },[])

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

    const resultHtml = result.map((r, i) => {
        return (
            <a  href={`/collection/${r.address}`} key={i} className='w-[406px] flex flex-row items-center justify-left xl:w-[506px] h-[70px] bg-transparent rounded-[15px] hover:bg-[#242424] text-white ml-7 text-base font-gilroy px-4'>
                <div className='flex flex-row'>
                    <div className='relative'>
                        <img
                            src={`${config.api}/${r.logo}`}
                            alt="/"
                            className='h-[50px] w-[50px] rounded-full mr-4'
                        />
                        <Validate className="absolute lg:ml-[34px] -mt-[15px] w-[15px] h-[15px]" />
                    </div>
                    <div className='flex flex-col text-left'>
                        <p className='font-gilroy lg:max-w-[400px] truncate text-white text-[18px] mt-[4px]'>{r.name}</p>
                        <p className='font-gilroy lg:max-w-[400px] truncate text-[#828383] text-[14px] -mt-[3px]'>{r.author}</p>
                    </div>
                </div>
            </a>

        )
    });

    return (
        <div className="flex flex-row">
            <form className="flex" action="#" method="GET">
                <div className="relative w-[360px] xl:w-[560px] h-[56px] border-2 border-[#3b3c3c] rounded-[41px] text-black">
                    <input
                        className="w-[300px] xl:w-[400px] block h-full border-transparent pl-[30px] text-[#828383] placeholder-[#828383] bg-transparent focus:border-transparent font-gilroyMedium focus:outline-none focus:ring-0 text-[16px]"
                        placeholder="Search Collections and Creators"
                        value={searchText}
                        onChange={onSearchtextChange}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 pr-4 md:pr-[30px] flex items-center" aria-hidden="true">
                        <Search className="h-[19px] w-[19px] text-[#828383]" aria-hidden="true" />
                    </div>
                    {
                        result.length !== 0 &&
                        <div className='flex flex-col w-[360px] xl:w-[560px] rounded-[15px] max-h-max bg-[#131313] mt-3'>
                            <p className='mt-[10px] font-gilroy text-[18px] ml-[30px] text-[#828383]'>Found <span className='text-white font-gilroy text-[18px]'>{result.length} similarities</span></p>
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

export default SearchBar;