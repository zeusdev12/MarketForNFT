import axios from 'axios';

export const getDifference = ()=>{
    return new Promise((resolve, reject)=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=1&interval=daily`)
        .then(function (response) {
            const data = response.data;
            const prices = data.prices;
            let a = prices[0][1]
            let b = prices[1][1]
            const differens = 100 * Math.abs( ( a - b ) / ( (a+b)/2 ) );
            let diff = a > b ? '+ ' + differens.toFixed(2) : '- ' + differens.toFixed(2);
            resolve(diff);
        });
    });
}

export const getPrices = ()=>{
    return new Promise((resolve, reject)=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=1&interval=daily`)
        .then(function (response) {
            const data = response.data;
            const prices = data.prices;
            resolve(prices);
        });
    });
}

export const getTokenInfo =(contract, id)=>{
    return new Promise((resolve, reject)=>{
        contract.methods.tokenURI(id.toString()).call().then((uri)=>{
            contract.methods.ownerOf(id.toString()).call().then((owner)=>{
                resolve({ uri, owner, id });
            });
        });
    });
}

export const formatAddress = (address) =>{
    if(!address || !address.length){
        return "";
    }
    let start = address.slice(0,6);
    let end = address.slice(address.length-5,address.length);
    return start + "...." + end;
}

export const formatDate = (unix_timestamp) =>{
    let a = new Date(unix_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}
