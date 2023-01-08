import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react';
import { ReactComponent as Close } from "../../assets/close.svg";
import axios from 'axios';
import { config } from "../../config";

const ModalListNft = ({ setActive, account, _id, _status, _price, getMy }) => {

    const [open, setOpen] = useState(true);
    const [price, setPrice] = useState(_price);
    const [status, setStatus] = useState(_status);

    const onConfirm = () => {

        if (parseFloat(price) != price || price == 0) {
            alert("Not correct Price!");
            return;
        }

        let data = {
            _id: _id,
            account: account,
            price: price,
            status: status
        }

        axios.post(`${config.api}/nft/update`, data).then(() => {
            getMy();
            setActive(false);
        });

    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={true ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] lg:w-[560px]  overflow-hidden h-[445px] lg:h-[476px]" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="flex flex-col mt-[20px] text-center">
                        <p className="text-white text-[36px] lg:text-[46px] font-gilroy font-semibold">Update</p>
                    </div>
                    <div className="flex flex-col mt-[35px] px-[15px] lg:px-[30px]">
                        <select
                            value={status}
                            onChange={(e) => { setStatus(e.target.value); }}
                            className="bg-transparent text-[#828383] text-[17px] font-gilroy font-semibold border-2 border-[#2a2a2a] px-4 h-[56px] rounded-[10px]"
                        >
                            <option value="listed" className="bg-black text-[17px] font-gilroy font-semibold">Listed</option>
                            <option value="delisted" className="bg-black text-[17px] font-gilroy font-semibold">Delisted</option>
                        </select>
                    </div>
                    <div className="flex flex-col px-[15px] lg:px-[30px]">
                        <input
                            type="price"
                            name="price"
                            id="price"
                            className="flex w-full mt-[15px] h-[56px] rounded-[10px] text-[#828383] text-[16px] font-gilroy font-semibold placeholder-[#828383] border-2 border-[#2a2a2a] px-[20px] focus:outline-none focus:ring-0 bg-transparent"
                            placeholder="Price"
                            aria-describedby="price"
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }}
                        />
                    </div>
                    <div className="flex mt-[30px] justify-center px-4 lg:px-0 pb-[30px]">
                        <button onClick={onConfirm} className="w-full lg:w-[227px] h-[58px] rounded-[52px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center lg:ml-[20px] mt-[5px] lg:mt-0">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalListNft;