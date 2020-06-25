var Tx = require('ethereumjs-tx');
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/f70238fa8087435282657727198de6a5');

const account1 = "0x23Cc89bF9762353c06958c0aF6F41761C1012edA"; // Account2 of my wallet


const privateKey1 = "4F769387F80481A55C8BA8FD2054D5D2514D1DA941035FC1097AD366F2A13C9E";


const privateKey1Buffer = Buffer.from(privateKey1, 'hex');

const contractAddress = "0x4e759250E8dC230FCfB9453d8BEbE1Ae5d79E58A"

const abi = [
	{
		"inputs": [],
		"name": "doSomeWork",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contract = new web3.eth.Contract(abi, contractAddress);

console.log("Buffer 1 = ",privateKey1Buffer);


web3.eth.getTransactionCount(account1, (err, txCount)=>{


    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        to: contractAddress,
        data: contract.methods.setAge(54).encodeABI()
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
    });

});

contract.methods.getAge().call(function (err,result){
    console.log("Age = ",result);
});


