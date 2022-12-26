import Collection from "../collection/collection";
import Web3 from 'web3';
import { collections } from "../../data";
import { config } from "../../config";


export const Collections = ({ onPay })=>{

    const provider = new Web3.providers.HttpProvider(config.rpc);
    const web3 = new Web3(provider);
    
    let collectionsHtml = web3 ? collections.map((collection, i)=>{
        return <Collection collection={collection} key={i} web3={web3} onPay={onPay} ></Collection>
    }): [];

    return (
        <div>
            {  
                collectionsHtml
            }
        </div>
    )
}

export default Collections;