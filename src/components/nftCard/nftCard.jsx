export const NftCard = ({ data, text, date, from})=>{

    let display = 'inline-block';
    if(data.data.name && text && text.length != 0){
        if(data.data.name.toLowerCase().indexOf(text.toLowerCase()) == (-1)){
            display = 'none';
        }
    }

    if(date < from){
        display = 'none';
    }

    return(
        <div className='inline-block border border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[339px] rounded-[15px] cursor-pointer' style={{ display: display }}>
             <a href={`/item/${data._id}`}>
                <div className="overflow-hidden relative px-[10px] pt-[10px]">
                    <img
                        src={data.data.url}
                        alt="/"
                        className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-[12px] text-[20px] font-gilroy text-white hover:text-[#beff55] max-w-[250px] truncate px-5">{data.data.name}</h3>
                <p className="text-sm font-gilroy max-w-[250px] truncate text-[#888989] px-5">{data.data.description}</p>
             </a>
        </div>
    )

}

export default NftCard;