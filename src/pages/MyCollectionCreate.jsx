import { React, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import axios from 'axios';
import { config } from '../config';


const MyCollectionCreate = ({ web3, account }) => {

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [description, setDescription] = useState("");
  const [symbol, setSymbol] = useState("");
  const [file, setFile] = useState();
  const [type, setType] = useState();
  const [busy, setBusy] = useState();

  const onFileChange = (e)=>{

    let files = e.target.files;
    let file = files[0];

    if (files && file) {
      let reader = new FileReader();
      reader.onload = function(readerEvt) {
          let binaryString = readerEvt.target.result;
          setFile(binaryString)
      };
      reader.readAsDataURL(file);
    }
  }

  const onSave = ()=>{


    if(name.length == 0){
      alert("Not correct name!");
      return;
    }

    if(symbol.length == 0){
      alert("Not correct symbol!");
      return;
    }

    if(author.length == 0){
      alert("Not correct author!");
      return;
    }

    if(description.length == 0){
      alert("Not correct description!");
      return;
    }

    if(totalSupply == 0){
      alert("Not correct totalSupply!");
      return;
    }

    if(!file){
      alert("Not correct logo!");
      return;
    }

    setBusy(true);

    axios.post(`${config.api}/contract/create`, { name, symbol }).then((response)=>{

        const compiled = response.data;
        const contract = new web3.eth.Contract(compiled.abi);

        contract.deploy({
          data: compiled.bytecode,
          arguments: [],
        }).send({
          from: account
        }, function(error, transactionHash){ 
               console.log(transactionHash)
         })
        .on('error', function(error){  console.log(error) })
        .on('transactionHash', function(transactionHash){   console.log(transactionHash) })
        .on('receipt', function(receipt){

          let requestData = {
            name, 
            author,
            description,
            type,
            totalSupply,
            logo: file,
            owner: account,
            address: receipt.contractAddress
          }

          axios.post(`${config.api}/collections/create`,requestData )
          .then((response) => {
              window.location.href = '/collections';
          });

        });

    }).catch((err)=>{
        console.log(err);
        alert("Something wraong!");
    });

  }


  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className="relative z-30 mt-[110px] lg:mt-[188px] pl-5 lg:pl-0 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
        <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold'>Create Nft Collection</p>
        <div className='flex flex-col lg:flex-row mt-3.5 lg:mt-2 justify-between'>
        </div>
        <div className="text-white">
               <div>
                <label>Logo</label>
                {
                  file &&
                  <img src={file}/>
                }
                <input
                  type="file"
                  onChange={onFileChange}
                />
             </div>
             <div>
                <label>Name</label>
                <input
                  type="text"
                  className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                  value={name}
                  onChange={(e)=>{ setName(e.target.value); }}
                />
             </div>
             <div>
                <label>Symbol</label>
                <input
                  type="text"
                  className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                  value={symbol}
                  onChange={(e)=>{ setSymbol(e.target.value); }}
                />
             </div>
             <div>
                <label>Author</label>
                <input
                  type="text"
                  className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                  value={author}
                  onChange={(e)=>{ setAuthor(e.target.value); }}
                />
             </div>
             <div>
                <label>Total Supply</label>
                <input
                  type="number"
                  className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                  value={totalSupply}
                  onChange={(e)=>{ setTotalSupply(e.target.value); }}
                />
             </div>
             <div>
                <label>Description</label>
                <textarea
                  rows={20}
                  type="number"
                  className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                  value={description}
                  onChange={(e)=>{ setDescription(e.target.value); }}
                />
             </div>
             <div>
                <label>Type</label>
                <select
                   value={type}
                   onChange={(e)=>{ setType(e.target.value); }}
                >
                   <option value="launchpad">Launchpad</option>
                   <option value="new">New</option>
                </select>
             </div>
             {
                !busy &&
                <div>
                    <button onClick={onSave} className="relative w-[125px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden">Save</button>
                </div>
             }
        </div>
        <div className="-ml-5 lg:ml-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MyCollectionCreate;