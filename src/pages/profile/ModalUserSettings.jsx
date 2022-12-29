import { React, useState, Fragment, useEffect } from "react";
import { Transition } from '@headlessui/react';
import { ReactComponent as Close } from "../../assets/close.svg";
import axios from 'axios';
import { config } from "../../config";

const ModalConnectWallet = ({ active, setActive, account, getProfile }) => {

    const [open, setOpen] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        if(account){
            axios.get(`${config.api}/users/user-profile?address=${account}`)
            .then((response)=>{
                let data = response.data;
                setName(data.name);
                setEmail(data.email);
            });
        }
    },[account]);

    const onSave = ()=>{
        axios.post(`${config.api}/users/update-user`, { name: name, email: email, address: account }).then(()=>{
            getProfile();
            setActive(false);
        });
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={active ? "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-100" : "fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex items-center justify-center z-50 scale-0"} onClick={() => setActive(false)}>
                <div className="rounded-[15px] bg-[#131313] w-[320px] h-[477px] lg:w-[560px] lg:h-[442px] overflow-hidden" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-row w-full justify-end p-[9px] lg:p-5">
                        <Close className="cursor-pointer" onClick={() => setActive(false)} />
                    </div>
                    <div className="text-white font-gilroy text-[36px] lg:text-[46px] font-semibold text-center leading-[40px] lg:leading-[50px] mt-4 tracking-wide">
                        <p>Profile Settings</p>
                    </div>
                    <div className="mt-[30px] lg:mt-[40px] px-[15px] lg:px-[30px] space-y-3.5">
                        <input
                            type="name"
                            name="name"
                            id="name"
                            className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                            placeholder="Username"
                            aria-describedby="name-description"
                            value={name}
                            onChange={(e)=>{ setName(e.target.value); }}
                        />
                        {/* <input
                            type="name"
                            name="name"
                            id="name"
                            className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                            placeholder="Display name"
                            aria-describedby="name-description"
                        /> */}
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                            placeholder="Email"
                            aria-describedby="email-description"
                            value={email}
                            onChange={(e)=>{ setEmail(e.target.value); }}
                        />
                    </div>
                    <div className="text-center px-[15px] lg:px-0 mt-[30px]">
                        <button onClick={onSave} className="relative w-full lg:w-[174px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden">
                            Save Settings
                        </button>
                    </div>
                </div>
            </div>
        </Transition.Root>
    )
}


export default ModalConnectWallet;