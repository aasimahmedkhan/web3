
console.log(Web3);

const rpcURL = "http://127.0.0.1:7545";
let web3 = new Web3(rpcURL);

let address = "0xdB89Ff79AEdF8E7696a5e42fD36ccF40144614E8";

web3.eth.getBalance(address, (err, wei)=>{
    console.log("Wei",wei);
    let balance = web3.utils.fromWei(wei,"ether");

    console.log("Balance",balance); 

});