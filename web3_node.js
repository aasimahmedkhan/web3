
const Web3 = require("web3");

console.log(Web3);

const rpcURL = "http://127.0.0.1:7545";


let web3 = new Web3(rpcURL);

console.log("web3 instance = ", web3);

let address = "0x22f1A17fd9BBb61Cafbba1179A4e86c703e3D600";

web3.eth.getBalance(address, (err, wei)=>{
    console.log("Wei",wei);
    let balance = web3.utils.fromWei(wei,"ether");

    console.log("Balance",balance); 

});