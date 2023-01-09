import { Link } from "react-router-dom";

export const CollectionUpcoming = ({ collection }) => {

    return (
        <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[339px] rounded-[15px] cursor-pointer mr-[1.25rem] lg:mr-[2.85rem]'>
            <Link to={`/item/${collection.nft._id}`}>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                    <img
                        src={collection.nft.data.url}
                        alt="/"
                        className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-[12px] text-[20px] max-w-[250px] truncate font-gilroy text-white hover:text-[#beff55] px-5">{collection.name}</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">{collection.author}</p>
            </Link>
        </div>
    )
}

export default CollectionUpcoming;