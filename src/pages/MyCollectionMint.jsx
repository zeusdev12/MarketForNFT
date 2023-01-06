import { React, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import axios from 'axios';
import { config } from '../config';
import { useParams } from 'react-router-dom';
import { ABI } from "../contracts/nft";


const MyCollectionMint = ({ web3, account }) => {

  const params = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [fileImg, setFileImg] = useState();
  const [access, setAccess] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(()=>{

      if(web3 && account){

        const contract = new web3.eth.Contract(ABI, params.address, { from: account });
        contract.methods.owner().call().then((owner)=>{
          setAccess(account === owner);
        });

      }

  },[web3, account]);

  const onFileChange = (e)=>{

    let files = e.target.files;
    let file = files[0];
    setFileImg(file);

    if (files && file) {
      var reader = new FileReader();
      reader.onload = function(readerEvt) {
          let binaryString = readerEvt.target.result;
          setFile(binaryString)
      };
      reader.readAsDataURL(file);
    }

  }

  const mint = (hash, nft)=>{

    const contract = new web3.eth.Contract(ABI, params.address, {from: account });

    contract.methods.totalSupply().call().then((total)=>{
     
      contract.methods.mint(config.serviceAddress, hash).send({ from : account }).then((trx)=>{
     
        nft.url = `https://ipfs.io/ipfs/${nft.image.replace("ipfs://","")}`;
  
        let data = {
            data: nft,
            owner: account,
            address: params.address,
            id: total+1,
            status: 'delisted',
            price: 0.0001,
            name: name
        }
  
        axios.post(`${config.api}/nft/create`, data).then(()=>{
            window.location.href = '/collections';
        }).catch((err)=>{
            console.log(err);
            alert("Something wraong!");
        });
  
      }).catch(()=>{
         alert("Something wraong!");
      });

    }).catch(()=>{
        alert("Something wraong!");
    });

  } 

  const sendJsonToIPFS = async (hash) => {

    try {
   
        const data = {
            "attributes": [],
            "description": description,
            "image": hash,
            "name": name
        }
        
        const resFile = await axios({
            method: "post",
            url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
            data: JSON.stringify(data),
            headers: {
                'pinata_api_key': `${config.pinataApiKey}`,
                'pinata_secret_api_key': `${config.pinataApiSecret}`,
                'Content-Type': 'application/json'
            },
        });

        const jsonHash = `ipfs://${resFile.data.IpfsHash}`;
        mint(jsonHash, data);
    }catch(e){
        console.log(e)
    }
}

  const sendFileToIPFS = async (e) => {
       
    if (fileImg) {
        try {

            const formData = new FormData();
            formData.append("file", fileImg);

            const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': `${config.pinataApiKey}`,
                    'pinata_secret_api_key': `${config.pinataApiSecret}`,
                    "Content-Type": "multipart/form-data"
                },
            });

            const hash = `ipfs://${resFile.data.IpfsHash}`;  
            sendJsonToIPFS(hash);


        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error)
        }
    }
  }

  const onSave = ()=>{
    
    if(name.length == 0){
      alert("Not correct name!");
      return;
    }

    if(description.length == 0){
      alert("Not correct description!");
      return;
    }

    if(!file){
      alert("Not correct file!");
      return;
    }

    setBusy(true);
    sendFileToIPFS();

  }


  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <div className="relative z-30 mt-[110px] lg:mt-[188px] pl-5 lg:pl-0 lg:px-0 lg:mr-5 lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1170px]">
        <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold'>Collection Mint</p>
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
                <label>Description</label>
                <textarea
                  rows={20}
                  type="number"
                  className="flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                  value={description}
                  onChange={(e)=>{ setDescription(e.target.value); }}
                />
             </div>
             {
              access && !busy &&
              <div>
                  <button onClick={onSave} className="relative w-[125px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden">Mint</button>
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

export default MyCollectionMint;