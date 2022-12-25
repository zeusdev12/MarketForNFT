import { useEffect, useState } from "react";

export const Image = ({ ipfs })=>{

    const [data, setData] = useState();

    useEffect(()=>{
        fetch(`https://ipfs.io/ipfs/${ipfs.replace("ipfs://","")}`)
        .then((response) => response.json())
        .then((body) =>{
            body.url = `https://ipfs.io/ipfs/${body.image.replace("ipfs://","")}`;
            setData(body);
        });
    },[]);

    
    return(
        <div className="image_item">
            {
                data &&
                <div>
                    <img src={data.url}  className="h-full w-full object-cover object-center group-hover:opacity-75 px-[10px] py-[10px]"></img>
                </div>
            }
        </div>
    )

}

export default Image;