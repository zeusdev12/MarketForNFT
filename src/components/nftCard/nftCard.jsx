import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const NftCard = ({ ipfs, address, id })=>{

    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://ipfs.io/ipfs/${ipfs.replace("ipfs://","")}`)
        .then((response) => response.json())
        .then((body) =>{
            body.url = `https://ipfs.io/ipfs/${body.image.replace("ipfs://","")}`;
            setData(body);
        });
    },[]);

    
    return(
        <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
             <a href={`/OpenPageNFT/${address}/${id}`}>
                <div className="overflow-hidden relative">
                    <img
                        src={data.url}
                        alt="/"
                        className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"
                    />
                </div>
                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">{data.name}</h3>
                <p className="text-sm font-gilroy text-[#888989] px-5">{data.description}</p>
             </a>
        </div>
    )

}

export default NftCard;