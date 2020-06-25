







console.log(Web3);

const rpcURL = "https://ropsten.infura.io/v3/f70238fa8087435282657727198de6a5";
let web3 = new Web3(rpcURL);

let address = "0x4e759250E8dC230FCfB9453d8BEbE1Ae5d79E58A";

let abi = [
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
];

const contract = new web3.eth.Contract(abi, address);

//console.log("Contract", contract);
//console.log("Methods", contract.methods);
//console.log("GetAge", contract.methods.getAge);
//console.log("doSomeWork", contract.methods.doSomeWork);

contract.methods.getAge().call(function(err, result){
	console.log("Age = ", result);
});

contract.methods.doSomeWork().call(function(err, result){
	console.log("Work = ", result);
});

