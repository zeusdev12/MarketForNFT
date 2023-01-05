import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react';
import { ReactComponent as Close } from "../../assets/close.svg";
import axios from 'axios';
import { config } from "../../config";

const ModalWithdrawOpen = ({ active, setActive, account, web3, getBalance, serviceBalance }) => {

    const [open, setOpen] = useState(true);
    const [amount, setAmount] = useState(0);
    const [reciever, setReciever] = useState("");
    const [busy, setBusy] = useState();
    const fee = 0.001;

    const onConfirm = ()=>{

        if(reciever.length == 0){
            alert("Not correct reciever address!");
            return;
        }

        if(parseFloat(amount) != amount || amount == 0){
            alert("Not correct Ammount!");
            return;
        }
        if((serviceBalance - amount) - fee < 0){
            alert("Insufficient balance!");
            return;
        }

        setBusy(true);

        const deploy = async () => {
      
            const createTransaction = await web3.eth.accounts.signTransaction(
               {
                  from: config.serviceAddress,
                  to: reciever,
                  value: web3.utils.toWei(amount, 'ether'),
                  gas: '21000',
               },
               config.serviceKey
            );
         
            const createReceipt = await web3.eth.sendSignedTransaction(
               createTransaction.rawTransaction
            );
            
            let data = {
                to: config.serviceAddress,
                eth: fee,
                status: "completed",
                crypto: "eth",
                type: "fee",
                from: account
            }
            axios.post(`${config.api}/transactions/create`, data ).then(()=>{
                let data = {
                    eth: amount,
                    status: "completed",
                    crypto: "eth",
                    type: "withdraw",
                    from: account
                }
                axios.post(`${config.api}/transactions/create`, data ).then(()=>{
                    getBalance();
                    setActive(false);
                });
            });

         };
         
         deploy();
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] lg:w-[560px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="flex flex-col mt-[20px] text-center">
                        <p className="text-white text-[26px] font-gilroy font-semibold">Withdraw Eth</p>
                        <p className="text-white text-[14px] font-gilroy font-semibold">Transaction fee {fee} Eth</p>
                    </div>
                    <div className="flex flex-col mt-[35px] px-[15px] lg:px-[30px]">
                        <input
                            type="reciever"
                            name="reciever"
                            id="reciever"
                            className="flex w-full mt-[15px] h-[56px] rounded-[10px] text-[#828383] text-[16px] font-gilroy font-semibold placeholder-[#828383] border-2 border-[#2a2a2a] px-[20px] focus:outline-none focus:ring-0 bg-transparent"
                            placeholder="Reciever"
                            aria-describedby=""
                            value={reciever}
                            onChange={(e)=>{ setReciever(e.target.value)}}
                        />
                    </div>
                    <div className="flex flex-col mt-[35px] px-[15px] lg:px-[30px]">
                        <input
                            type="amount"
                            name="amount"
                            id="amount"
                            className="flex w-full mt-[15px] h-[56px] rounded-[10px] text-[#828383] text-[16px] font-gilroy font-semibold placeholder-[#828383] border-2 border-[#2a2a2a] px-[20px] focus:outline-none focus:ring-0 bg-transparent"
                            placeholder="Amount"
                            aria-describedby="amount-description"
                            value={amount}
                            onChange={(e)=>{ setAmount(e.target.value)}}
                        />
                    </div>
                    <div className="flex mt-[30px] justify-center px-4 lg:px-0 pb-[30px]">
                        {
                            !busy &&
                            <button onClick={onConfirm} className="w-full lg:w-[227px] h-[58px] rounded-[52px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center lg:ml-[20px] mt-[5px] lg:mt-0">
                                Confirm the Transfer
                            </button>
                        }
                        {
                            busy &&
                            <p> Please waite! </p>
                        }
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalWithdrawOpen;