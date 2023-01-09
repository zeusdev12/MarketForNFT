import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { config } from '../../config';


export const NftBlock = ({ type })=>{

    const [nfts, setNft] = useState([]);

    useEffect(()=>{
        axios.get(`${config.api}/collections/type?type=${type}&limit=4`)
        .then((response) => {
            setNft(response.data);
        });
    },[])
    
    let newNft = nfts.map((nft, i)=>{
        return(
            <div key={i} className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[339px] rounded-[15px] cursor-pointer'>
                <Link to={`/item/${nft._id}`}>
                 <div className="overflow-hidden relative px-[10px] pt-[10px]">
                     <img
                         src={nft.data.url}
                         alt="/"
                         className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                     />
                </div>
                <h3 className="mt-[12px] max-w-[250px] truncate text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">{nft.collection} #{nft.id}</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">{nft.author}</p>
                </Link>
             </div>
        )
    });

    return (
        <>
            {
                newNft
            }
        </>
    )
}

export default NftBlock;