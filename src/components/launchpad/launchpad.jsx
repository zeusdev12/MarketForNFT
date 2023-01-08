import React, { useEffect, useState } from 'react';
import Collection from "../collection/collection";
import axios from 'axios';
import { config } from '../../config';


export const Popular = ({ })=>{

    const [collections, setCollections] = useState([]);

    useEffect(()=>{
        axios.get(`${config.api}/collections/list?type=launchpad`)
        .then((response) => {
            setCollections(response.data);
        });
    },[])
    
    let collectionsHtml = collections.map((collection, i)=>{
        return <Collection collection={collection} key={i}></Collection>
    });

    return (
        <div>
            {  
                collectionsHtml
            }
        </div>
    )
}

export default Popular;