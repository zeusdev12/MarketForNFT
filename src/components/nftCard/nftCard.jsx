import { useEffect, useState } from "react";

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
        <div className='inline-block bg-[#1a1a19] w-[260px] h-[339px] rounded-[15px] cursor-pointer'>
             <a href={`/OpenPageNFT/${address}/${id}`}>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                    <img
                        src={data.url}
                        alt="/"
                        className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-[12px] text-[20px] font-gilroy text-white hover:text-[#beff55] px-5">{data.name}</h3>
                <p className="text-sm font-gilroy text-[#888989] px-5">{data.description}</p>
             </a>
        </div>
    )

}

export default NftCard;