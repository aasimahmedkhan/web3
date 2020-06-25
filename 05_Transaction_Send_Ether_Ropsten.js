var Tx = require('ethereumjs-tx');
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/f70238fa8087435282657727198de6a5');

const account1 = "0x23Cc89bF9762353c06958c0aF6F41761C1012edA"; // Account2 of my wallet
const account2 = "0xCF9e9F9AcdC3A002723ee2D02E4572534a461798"; // Account1 of my wallet

const privateKey1 = "4F769387F80481A55C8BA8FD2054D5D2514D1DA941035FC1097AD366F2A13C9E";
const privateKey2 = "F60E2B6E3453A90788AD24AC8599BDD79DB7F656D9378E22DAA2BA45A758E309";

const privateKey1Buffer = Buffer.from(privateKey1, 'hex');
const privateKey2Buffer = Buffer.from(privateKey2, 'hex');

console.log("Buffer 1 = ",privateKey1Buffer);
console.log("Buffer 2 = ",privateKey2Buffer);

web3.eth.getTransactionCount(account1, (err, txCount)=>{


    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('2', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx.Transaction(txObject,  { chain: 'ropsten', hardfork: 'petersburg' });
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

