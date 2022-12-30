import React, { useEffect, useState } from 'react';
import { ReactComponent as Search } from '../assets/search.svg';
import { collections } from "../data";

export const SearchBar = ()=>{

    const [searchText, setSearchText] = useState("");
    const [result, setResult] = useState([]);

    const onSearchtextChange = (e)=>{
        const text = e.target.value;
        setSearchText(text);
        if(text.length > 0){
            let searchResult = [];
            for(let i = 0; i < collections.length; i++){
                if((collections[i]["name"].toLowerCase().indexOf(text.toLowerCase()) > -1) || (collections[i]["owner"].toLowerCase().indexOf(text.toLowerCase()) > -1)){
                    searchResult.push(collections[i]);
                }
            }
            setResult(searchResult);
        }else{
            setResult([]);
        }
    }

    const resultHtml = result.map((r, i)=>{
        return(
            <li key={i}>{r.name} {r.owner}</li>
        )
    });

    return(
        <div className="flex flex-row">
              <form className="flex" action="#" method="GET">
                <div className="relative xl:w-[560px] h-[56px] border-2 border-[#3b3c3c] rounded-[41px] text-black">
                  <input
                    id="search-field"
                    name="search-field"
                    className="w-[400px] block h-full border-transparent pl-[30px] text-[#828383] placeholder-[#828383] bg-transparent focus:border-transparent font-gilroyMedium focus:outline-none focus:ring-0 text-[16px]"
                    placeholder="Search Collections and Creators"
                    type="search"
                    value={searchText}
                    onChange={onSearchtextChange}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 pr-4 md:pr-[30px] flex items-center" aria-hidden="true">
                    <Search className="h-[19px] w-[19px] text-[#828383]" aria-hidden="true" />
                  </div>
                </div>
              </form>
              {
                 result.length != 0 &&
                 <ul>
                    { resultHtml }
                 </ul>
              }
        </div>
    )
}

export default SearchBar;