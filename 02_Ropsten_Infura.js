
console.log(Web3);

const rpcURL = "https://ropsten.infura.io/v3/f70238fa8087435282657727198de6a5";
let web3 = new Web3(rpcURL);

let address = "0x23Cc89bF9762353c06958c0aF6F41761C1012edA";

web3.eth.getBalance(address, (err, wei)=>{
    console.log("Wei",wei);
    let balance = web3.utils.fromWei(wei,"ether");

    console.log("Balance",balance); 

});