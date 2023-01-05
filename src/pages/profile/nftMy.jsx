import { useState } from "react";
import ModalListNft from "./ModalListNft";
import ModalWithdrawNft from "./ModalWithdrawNft";

export const NftMy = ({data, text, account, serviceBalance, getMy, getBalance})=>{

    const [modalListActive, setModalListActive] = useState();
    const [modalWithdrawActive, setModalWithdrawActive] = useState();

    let display = 'inline-block';
    if(data.data.name && text && text.length != 0){
        if(data.data.name.toLowerCase().indexOf(text.toLowerCase()) == (-1)){
            display = 'none';
        }
    }

    return(
        <div className='inline-block bg-[#1a1a19] w-[260px] rounded-[15px] cursor-pointer' style={{ display: display }}>
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
             <button onClick={()=> setModalListActive(true)} className="border-2 border-[#3b3c3c] hover:border-[#beff55] text-white font-gilroyMedium tracking-wide text-[16px] bg-transparent w-[127px] h-[46px] rounded-[41px]">
                Edit
             </button>
             <button onClick={()=> setModalWithdrawActive(true)} className="border-2 border-[#3b3c3c] hover:border-[#beff55] text-white font-gilroyMedium tracking-wide text-[16px] bg-transparent w-[127px] h-[46px] rounded-[41px]">
                Withdraw
             </button>
             {
                modalListActive &&
                <ModalListNft getMy={getMy} active={modalListActive} setActive={setModalListActive} account={account} _price={data.price} _id={data._id} _status={data.status}/>
             }
             {
                modalWithdrawActive &&
                <ModalWithdrawNft id={data.id} address={data.address} getBalance={getBalance} getMy={getMy} serviceBalance={serviceBalance}  setActive={setModalWithdrawActive} account={account} _price={data.price} _id={data._id} _status={data.status}/>
             }
        </div>
    )
}

export default NftMy;