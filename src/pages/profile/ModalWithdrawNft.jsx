import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react';
import { ReactComponent as Close } from "../../assets/close.svg";
import axios from 'axios';
import { config } from "../../config";
import Web3 from "web3";
import { ABI } from "../../contracts/nft";


const Tx = require('ethereumjs-tx').Transaction;
const Common = require('ethereumjs-common').default;

const BSC_FORK = Common.forCustomChain(
    'mainnet',
    {
        name: 'Binance Smart Chain Mainnet',
        networkId: 97,
        chainId: 97,
        url: config.rpc
    },
    'istanbul',
);

const ModalWithdrawNft = ({ setActive, account, serviceBalance, _id, getBalance, getMy, address, id }) => {

    console.log(address, id)

    const [reciever, setReciever] = useState("");
    const [busy, setBusy] = useState();
    const fee = 0.001;

    const onConfirm = () => {

        if (reciever.length == 0) {
            alert("Not correct reciever address!");
            return;
        }

        if (serviceBalance - fee < 0) {
            alert("Insufficient balance!");
            return;
        }

        setBusy(true);

        let data = {
            _id: _id,
            account: account
        }

        axios.post(`${config.api}/nft/withdraw`, data).then(() => {
            let data = {
                to: config.serviceAddress,
                eth: fee,
                status: "completed",
                crypto: "eth",
                type: "fee",
                from: account
            }
            axios.post(`${config.api}/transactions/create`, data).then(() => {

                const provider = new Web3.providers.HttpProvider(config.rpc);
                const web3 = new Web3(provider);

                const privateKey = Buffer.from(config.serviceKey, 'hex');
                const contract = new web3.eth.Contract(ABI, address, { from: config.serviceAddress });

                web3.eth.getTransactionCount(config.serviceAddress).then((count) => {

                    let rawTransaction = {
                        'from': config.serviceAddress,
                        'gasPrice': web3.utils.toHex(20 * 1e9),
                        'gasLimit': web3.utils.toHex(410000),
                        'to': address,
                        'value': 0x0,
                        'data': contract.methods.transferFrom(config.serviceAddress, reciever, id).encodeABI(),
                        'nonce': web3.utils.toHex(count)
                    };

                    let transaction = new Tx(rawTransaction, { 'common': BSC_FORK });
                    transaction.sign(privateKey);
                    web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
                        .on('receipt', function (receipt) {
                            getBalance();
                            getMy();
                        }).on('error', function (error) {
                            alert("Something wrong!");
                        });

                });
            });
        });


    }

    return (
        <Transition.Root show={true} as={Fragment}>
            <div className={true ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] lg:w-[560px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="flex flex-col mt-[20px] text-center">
                        <p className="text-white text-[36px] lg:text-[46px] font-gilroy font-semibold">Withdraw Nft</p>
                        <p className="text-[#828383] text-[18px] font-gilroy">Transaction fee {fee} Eth</p>
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
                            onChange={(e) => { setReciever(e.target.value) }}
                        />
                    </div>
                    <div className="flex mt-[30px] justify-center px-4 lg:px-0 pb-[55px]">
                        {
                            !busy &&
                            <button onClick={onConfirm} className="w-full lg:w-[227px] h-[58px] rounded-[52px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center mt-[5px] lg:mt-0">
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


export default ModalWithdrawNft;