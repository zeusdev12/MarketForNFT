import { React, Fragment, useState } from "react";
import { Transition, Menu } from '@headlessui/react';
import ModalListNft from "./ModalListNft";
import ArrowDown from "../../assets/arrow.png"
import ModalWithdrawNft from "./ModalWithdrawNft";
import Vector from "../../assets/icons/Deposit/vector.png"

export const NftMy = ({ data, text, account, serviceBalance, getMy, getBalance }) => {

    const [modalListActive, setModalListActive] = useState();
    const [modalWithdrawActive, setModalWithdrawActive] = useState();

    let display = 'inline-block';
    if (data.data.name && text && text.length != 0) {
        if (data.data.name.toLowerCase().indexOf(text.toLowerCase()) == (-1)) {
            display = 'none';
        }
    }

    return (
        <div className="inline-block h-[580px]">
            <div className='border-[#232323] bg-[#1a1a19] hover:bg-[#242424] w-[260px] h-[437px] rounded-[15px] cursor-pointer' style={{ display: display }}>
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
                    <div className="flex flex-row justify-end">
                        <img
                            src={Vector}
                            alt="/"
                            className="mr-1 w-[15px] h-[15px] mt-[9px]" />
                        <p className="text-[20px] max-w-[200px] truncate font-gilroy text-white pr-5">8.065</p>
                    </div>
                </a>
                <Menu as="div" className="relative">
                    <div className="flex mt-[15px] ml-5 lg:mt-[12px]">
                        <Menu.Button className='flex flex-row items-center justify-center w-[220px] h-[58px] border-2 border-[#3b3c3c] text-white rounded-[41px] text-base font-gilroy hover:border-[#beff55]'>
                            <p>Action</p>
                            <img
                                src={ArrowDown}
                                alt="/"
                                className="ml-2.5" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute flex flex-col z-50 ml-[21px] mt-2 w-[220px] h-[102px] rounded-[15px] border-2 border-[#3b3c3c] bg-[#131313] py-[3px] px-[3px] focus:outline-none">
                            <button className="w-[210px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                                <p className="-ml-[140px] text-white text-base font-gilroy">
                                    Edit
                                </p>
                            </button>
                            <button className="w-[210px] h-[46px] text-white rounded-[10px] bg-transparent hover:bg-[#3b3c3c]">
                                <p className="-ml-[94px] text-white text-base font-gilroy">
                                    Withdraw
                                </p>
                            </button>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            {
                modalListActive &&
                <ModalListNft getMy={getMy} active={modalListActive} setActive={setModalListActive} account={account} _price={data.price} _id={data._id} _status={data.status} />
            }
            {
                modalWithdrawActive &&
                <ModalWithdrawNft id={data.id} address={data.address} getBalance={getBalance} getMy={getMy} serviceBalance={serviceBalance} setActive={setModalWithdrawActive} account={account} _price={data.price} _id={data._id} _status={data.status} />
            }
        </div>
    )
}

export default NftMy;