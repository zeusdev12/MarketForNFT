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
                    <img src={data.url}  className="h-[250px] w-[240px] object-cover rounded-[10px] object-center group-hover:opacity-75"></img>
                </div>
            }
        </div>
    )

}

export default Image;