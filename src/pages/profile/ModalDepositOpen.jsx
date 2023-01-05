import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react';
import { ReactComponent as Close } from "../../assets/close.svg";
import axios from 'axios';
import { config } from "../../config";

const ModalDepositOpen = ({ active, setActive, account, web3, getBalance }) => {

    const [open, setOpen] = useState(true);
    const [amount, setAmount] = useState(0);
    const [busy, setBusy] = useState();

    const onConfirm = ()=>{

        if(parseFloat(amount) != amount || amount == 0){
            alert("Not correct Ammount!");
            return;
        }

        setBusy(true);

        web3.eth.sendTransaction({
            from: account,
            to: config.serviceAddress,
            value: web3.utils.toWei(amount.toString(), "ether"),
          }, function (err, transactionHash) {
    
            if (!err) {
                let data = {
                    to: account,
                    eth: amount,
                    status: "completed",
                    crypto: "eth",
                    type: "deposit"
                }
                axios.post(`${config.api}/transactions/create`, data ).then(()=>{
                    getBalance();
                    setActive(false);
                });
            } else {
              alert("Something wrong!");
              setBusy(false);
            }
    
          });
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] h-[370px] lg:w-[560px] lg:h-[400px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="flex flex-col mt-[20px] text-center">
                        <p className="text-white text-[36px] lg:text-[46px] font-gilroy font-semibold">Deposit Etherium</p>
                    </div>
                    <div className="flex flex-col mt-[30px] lg:mt-[40px] px-[15px] lg:px-[30px]">
                        <input
                            id="amount"
                            className="flex w-full h-[56px] rounded-[10px] text-[#828383] text-[16px] font-gilroy font-semibold placeholder-[#828383] border-2 border-[#2a2a2a] px-[20px] focus:outline-none focus:ring-0 bg-transparent"
                            placeholder="Amount"
                            aria-describedby="amount-description"
                            value={amount}
                            onChange={(e)=>{ setAmount(e.target.value)}}
                        />
                    </div>
                    <div className="flex mt-[30px] justify-center px-4 lg:px-0">
                        {
                            !busy &&
                            <button onClick={onConfirm} className="w-full lg:w-[227px] h-[58px] rounded-[52px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center">
                                Confirm the Transfer
                            </button>
                        }
                        {
                            busy &&
                            <p className="text-white font-gilroy text-[26px] font-semibold text-center tracking-wide"> Please waite! </p>
                        }
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalDepositOpen;