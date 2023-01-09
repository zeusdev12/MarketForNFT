import React, { useEffect, useState } from 'react';
import CollectionUpcoming from "../collection/collectionUpcoming";
import axios from 'axios';
import { config } from '../../config';


export const Upcoming = ({ })=>{

    const [collections, setCollections] = useState([]);

    useEffect(()=>{
        axios.get(`${config.api}/collections/list?type=upcoming`)
        .then((response) => {
            setCollections(response.data);
        });
    },[])
    
    let collectionsHtml = collections.map((collection, i)=>{
        return <CollectionUpcoming collection={collection} key={i}></CollectionUpcoming>
    });

    return (
        <div>
            {  
                collectionsHtml
            }
        </div>
    )
}

export default Upcoming;