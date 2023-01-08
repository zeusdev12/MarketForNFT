import { React, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import axios from 'axios';
import { ReactComponent as Blur } from "../assets/blurs/blur.svg"
import { config } from '../config';
import { useParams } from 'react-router-dom';


const MyCollectionEdit = ({ web3, account }) => {

  const params = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState();
  const [file, setFile] = useState();
  const [type, setType] = useState();

  const fetch = () => {

    axios.get(`${config.api}/collections/get?address=${params.address}`)
      .then((response) => {
        const data = response.data;
        setName(data.name);
        setAuthor(data.author);
        setTotalSupply(data.totalSupply);
        setDescription(data.description);
        setLogo(data.logo);
        setType(data.type);
        setAddress(data.address);
        setData(data);
      });

  }

  useEffect(() => {

    fetch();

  }, [web3, account]);

  const onFileChange = (e) => {

    let files = e.target.files;
    let file = files[0];

    if (files && file) {
      let reader = new FileReader();
      reader.onload = function (readerEvt) {
        let binaryString = readerEvt.target.result;
        setFile(binaryString)
      };
      reader.readAsDataURL(file);
    }
  }

  const onSave = () => {

    if (name.length == 0) {
      alert("Not correct name!");
      return;
    }

    if (author.length == 0) {
      alert("Not correct author!");
      return;
    }

    if (description.length == 0) {
      alert("Not correct description!");
      return;
    }

    if (totalSupply == 0) {
      alert("Not correct totalSupply!");
      return;
    }

    if (!logo && !file) {
      alert("Not correct logo!");
      return;
    }

    let requestData = {
      name,
      author,
      description,
      type,
      totalSupply,
      logo: file ? file : logo,
      _id: data._id,
      address: data.address,
      owner: data.owner,
    }

    axios.post(`${config.api}/collections/update`, requestData)
      .then((response) => {
        console.log(response)
      });


  }


  return (
    <div className='min-h-screen overflow-hidden bg-[#0c0c0c] background'>
      <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[400px] h-[350px] md:w-[400px] 2xl:w-[973px] lg:h-[673px]' />
      <Blur className='absolute top-0 mt-[70px] lg:mt-0 right-0 z-10 w-[350px] h-[240px] md:w-[400px] 2xl:w-[1273px] lg:h-[673px]' />
      <div className="relative z-30 mt-[110px] lg:mt-[188px] lg:ml-[40px] 3xl:ml-[120px] lg:max-w-[1200px]">
        <div className='relative z-30 text-center md:w-[560px] px-5 md:px-0 md:mx-auto'>
          <p className='text-white text-[36px] lg:text-[54px] font-gilroy font-semibold leading-[40px] sm:leading-none'>Collection edit</p>
          <div className="text-white mt-[40px] lg:mt-[60px]">
            <div className="mt-[8px] lg:mt-[16px] text-left">
              <label className="text-[#828383] text-[16px] font-gilroyMedium">Logo</label>
              {
                logo && !file &&
                <img
                  src={`${config.api}/${logo}`}
                  alt="/"
                  className="h-[80px] w-[80px] mt-1 rounded-full" />
              }{
                file &&
                <img
                  src={file}
                  alt="/"
                  className="h-[80px] w-[80px] mt-1 rounded-full" />
              }
              <input
                type="file"
                onChange={onFileChange}
                className="flex text-[#828383] mt-1"
              />
            </div>
            <div className="mt-[8px] lg:mt-[16px] text-left">
              <label className="text-[#828383] text-[16px] font-gilroyMedium">Address</label>
              <input
                type="text"
                className="mt-1 flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                value={address}
                disabled={true}
              />
            </div>
            <div className="mt-[8px] lg:mt-[16px] text-left">
              <label className="text-[#828383] text-[16px] font-gilroyMedium">Name</label>
              <input
                type="text"
                className="mt-1 flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                value={name}
                onChange={(e) => { setName(e.target.value); }}
              />
            </div>
            <div className="mt-[8px] lg:mt-[16px] text-left">
              <label className="text-[#828383] text-[16px] font-gilroyMedium">Author</label>
              <input
                type="text"
                className="mt-1 flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                value={author}
                onChange={(e) => { setAuthor(e.target.value); }}
              />
            </div>
            <div className="mt-[8px] lg:mt-[16px] text-left">
              <label className="text-[#828383] text-[16px] font-gilroyMedium">Total Supply</label>
              <input
                type="number"
                className="mt-1 flex w-full h-[56px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0"
                value={totalSupply}
                onChange={(e) => { setTotalSupply(e.target.value); }}
              />
            </div>
            <div className="mt-[8px] lg:mt-[16px] text-left">
              <label className="text-[#828383] text-[16px] font-gilroyMedium">Description</label>
              <textarea
                rows={20}
                type="number"
                className="mt-1 flex w-full h-[156px] rounded-[10px] border-2 border-[#3b3c3c] bg-transparent text-[#828383] placeholder-[#828383] text-[16px] px-5 focus:outline-none focus:ring-0 py-[17px]"
                value={description}
                onChange={(e) => { setDescription(e.target.value); }}
              />
            </div>
            <div className="mt-[8px] lg:mt-[16px] text-left">
              <label className="text-[#828383] text-[16px] font-gilroyMedium">Type</label>
              <select
                value={type}
                onChange={(e) => { setType(e.target.value); }}
                className="mt-1 flex bg-transparent text-[#828383]"
              >
                <option value="regular" className="bg-transparent">Regular</option>
                <option value="launchpad" className="bg-transparent">Launchpad</option>
                <option value="upcomming" className="bg-transparent">Upcomming</option>
                <option value="new" className="bg-transparent">New</option>
              </select>
            </div>
            <div className="mt-[30px] lg:mt-[40px]">
              <button onClick={onSave} className="relative w-full lg:w-[125px] h-[58px] rounded-[41px] text-black bg-[#beff55] text-[18px] font-gilroy tracking-wide font-semibold text-center before:absolute before:top-0 before:-left-[100px] before:w-[40px] before:h-full before:bg-white before:blur-[30px] before:skew-x-[30deg] hover:before:left-[300px] sm:hover:before:left-52 hover:before:duration-1000 overflow-hidden">Update</button>
            </div>
          </div>
        </div>
        <div className="-ml-5 lg:ml-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MyCollectionEdit;