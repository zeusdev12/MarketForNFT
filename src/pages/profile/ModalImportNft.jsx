import { React, useState, Fragment } from "react";
import { Transition } from '@headlessui/react'
import { ReactComponent as Close } from "../../assets/close.svg"
import { config } from "../../config";
import { ABI } from "../../contracts/nft";
import axios from 'axios';


const ModalImportNft = ({ active, setActive, account, web3, getMy}) => {

    const [open, setOpen] = useState(true)
    const [address, setAddress] = useState("");
    const [id, setId] = useState(0);
    const [price, setPrice] = useState(0);
    const [busy, setBusy] = useState();

    const onImport = ()=>{

        if(address.length === 0){
            alert("Not correct address!");
            return;
        }

        if(parseInt(id) != id || id == 0){
            alert("Not correct Id!");
            return;
        }

        if(parseFloat(price) != price || price == 0){
            alert("Not correct Price!");
            return;
        }

        setBusy(true)

        const contract = new web3.eth.Contract(ABI, address, { from: account });
        contract.methods.ownerOf(id.toString()).call().then((owner)=>{
             if(owner === account){

                contract.methods.name().call().then((name)=>{
                    console.log(name)
                    contract.methods.tokenURI(id.toString()).call().then((ipfs)=>{

                        fetch(`https://ipfs.io/ipfs/${ipfs.replace("ipfs://","")}`)
                        .then((response) => response.json())
                        .then((nft) =>{

                            nft.url = `https://ipfs.io/ipfs/${nft.image.replace("ipfs://","")}`;
                            
                            let data = {
                                data: nft,
                                owner: account,
                                address: address,
                                id: id,
                                status: 'listed',
                                price: price,
                                name: name
                            }

                            contract.methods.transferFrom(account, config.serviceAddress, id).send().then((r)=>{
                                axios.post(`${config.api}/nft/create`, data).then(()=>{
                                    getMy();
                                    setActive(false)
                                 }).catch((err)=>{
                                     console.log(err);
                                 });
                            });

                        });
                    });
                });

             }else{
                alert("Something wrong!");
                setBusy(false);
             }
        });

    }


    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] lg:w-[560px] max-h-[600px] lg:max-h-[700px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="text-white font-gilroy text-[36px] lg:text-[46px] font-semibold text-center leading-[40px] lg:leading-[50px] mt-4 tracking-wide">
                        <p>Import nft</p>
                    </div>
                    <div className="mt-[30px] lg:mt-[40px] px-[15px] lg:px-[30px] space-y-3.5">
                        <input
                            type="text"
                            name="address"
                            className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                            placeholder="Address"
                            aria-describedby="address"
                            value={address}
                            onChange={(e)=>{ setAddress(e.target.value); }}
                        />
                        <input
                            type="number"
                            name="id"
                            className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                            placeholder="Token Id"
                            aria-describedby="Id"
                            value={id}
                            onChange={(e)=>{ setId(e.target.value); }}
                        />
                        <input
                            type="number"
                            name="price"
                            className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                            placeholder="Token Price"
                            aria-describedby="price"
                            value={price}
                            onChange={(e)=>{ setPrice(e.target.value); }}
                        />
                    </div>
                    <div className="text-center px-[15px] lg:px-0 mt-[30px] pb-[30px]">
                        {
                            !busy &&
                            <button onClick={onImport} className="relative w-full lg:w-[174px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden">
                                Import
                            </button>
                        }{
                            busy &&
                            <p> Please waite! </p>
                        }
                    
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalImportNft ;