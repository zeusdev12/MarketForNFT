import { useEffect, useState } from "react";
import { ReactComponent as Vector } from "../../assets/icons/Deposit/vector.svg"

export const NftMy = ({ ipfs, price, text})=>{

    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://ipfs.io/ipfs/${ipfs.replace("ipfs://","")}`)
        .then((response) => response.json())
        .then((body) =>{
            body.url = `https://ipfs.io/ipfs/${body.image.replace("ipfs://","")}`;
            setData(body);
        });
    },[]);

    let display = 'inline-block';
    if(data.name && text.length != 0){
        if(data.name.toLowerCase().indexOf(text.toLowerCase()) == (-1)){
            display = 'none';
        }
    }

    
    return(
        <div className='inline-block bg-[#1a1a19] w-[260px] h-[369px] rounded-[15px] cursor-pointer' style={{ display: display }}>
             <div className="overflow-hidden relative px-[10px] pt-[10px]">
                <img
                    src={data.url}
                    alt="/"
                    className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                 />
            </div>
            <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">{data.name}</h3>
             <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5 uppercase">{data.description}</p>
            <div className="flex flex-row justify-end">
                <Vector className="mr-3 mt-[9px]"/>
                <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">{price}</p>
            </div>
         </div>
    )

}

export default NftMy;