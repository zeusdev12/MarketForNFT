
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ABI } from "../../contracts/nft";
import Image from "../image/image";
import { ReactComponent as StatusLive } from "../../assets/statuslive.svg";


const getTokenInfo =(contract, id)=>{
    return new Promise((resolve, reject)=>{
        contract.methods.tokenURI(id.toString()).call().then((uri)=>{
            resolve({ uri });
        });
    });
}

export const Collection = ({collection, web3 })=>{

    const [image, setImage] = useState(null);

    useEffect(()=>{

        const contract = new web3.eth.Contract(ABI, collection.address);

        getTokenInfo(contract, 1).then((result)=>{
            setImage(result);
        });

    },[]);

    return (
        <div className='inline-block bg-[#1a1a19] w-[260px] h-[344px] rounded-[15px] cursor-pointer'>
            <Link to={`/OpenPageNFT/${collection.address}/1`}>
                <div className="overflow-hidden relative">
                    {
                        image &&
                        <Image ipfs={image.uri}></Image>
                    }
                    <StatusLive className='absolute -mt-[256px] ml-[206px]' />
                </div>
                <h3 className="mt-2 text-xl font-gilroy text-white hover:text-[#beff55] px-5">{ collection.name }</h3>
                <div className='flex flex-row'>
                    <p className="text-sm font-gilroy text-[#beff55] uppercase pl-5">live</p>
                    <button className='w-1 h-1 bg-[#beff55] rounded-full mt-2 ml-[5px]'></button>
                </div>
            </Link>
        </div>

    )
}

export default Collection;