var Tx = require('ethereumjs-tx');
const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:7545');

const account1 = "0x97142DDDa1aC9D1c5926AA808Ef56D68B17f9C33";
const account2 = "0x4c0d51c7BB60be00094e24df94749a98Ef3e4be8";

const privateKey1 = "1c5ea809225761afaabf2c279654e5ff41a145e0a936cef586c2c11f59b4eb73";
const privateKey2 = "1f6bf242a555fb3e60180d0a961e2694ca24e0ae3cafd0a930fcb6e3a12cbc9c";

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');
const privateKey2Buffer = Buffer.from(privateKey2, 'hex');

console.log("Buffer 1 = ",privateKey1Buffer);
console.log("Buffer 2 = ",privateKey2Buffer);

web3.eth.getTransactionCount(account1, (err, txCount)=>{


    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('7', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx.Transaction(txObject);
    tx.sign(privateKey1Buffer);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    //console.log("tx = ",tx);
    //console.log("serializedTx = ",serializedTx);
    //console.log("raw = ",raw);

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    })




});

