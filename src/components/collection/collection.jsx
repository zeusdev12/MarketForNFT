import { Link } from "react-router-dom";
import { ReactComponent as StatusLive } from "../../assets/statuslive.svg";

export const Collection = ({collection })=>{

    return (
        <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[339px] rounded-[15px] cursor-pointer mr-[1.25rem] lg:mr-[2.85rem]'>
            <Link to={`/item/${collection.address}/1`}>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                    <img src={collection.nft.data.url}  className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"/>
                    <StatusLive className='absolute -mt-[246px] ml-[196px]' />
                </div>
                <h3 className="mt-[12px] text-xl font-gilroy text-white max-w-[250px] truncate hover:text-[#beff55] px-5">{ collection.name }</h3>
                <div className='flex flex-row'>
                    <p className="text-sm font-gilroy text-[#beff55] uppercase pl-5">live</p>
                    <button className='w-1 h-1 bg-[#beff55] rounded-full mt-2 ml-[5px]'></button>
                </div>
            </Link>
        </div>

    )
}

export default Collection;