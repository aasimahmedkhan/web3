console.log(Web3);

const rpcURL = "wss://ropsten.infura.io/ws/v3/f70238fa8087435282657727198de6a5";
let web3 = new Web3(rpcURL);

let address = "0x9D115bfd5F6cCe1a6e95d955E0C0DCE243ABdBa1";

let abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "logString",
		"type": "event"
	},
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
		"stateMutability": "nonpayable",
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

const contract = new web3.eth.Contract(abi, address);


contract.methods.getAge().call(function(err, result){
	console.log("Age = ", result);
});

contract.methods.doSomeWork().call(function(err, result){
	console.log("Work = ", result);
});

contract.events.logString(
	{fromBlock: 0},
	function (error, result) {
    console.log("callback = ",event); 
	}).on ("connected", function() {

	})
	  .on("data", function() {

	})

contract.events.logString({
    fromBlock: 0
}, function(error, event){ 
	console.log("callback = ",event); 
})
.on("connected", function(subscriptionId){
    console.log("connected = ",subscriptionId);
})
.on('data', function(event){
    console.log("data = ",event); // same results as the optional callback above
})
.on('changed', function(event){
	// remove event from local database
	console.log("changed = ",event);
})
.on('error', function(error, receipt) {
	console.log("error = ",error);
	console.log("receipt = ",receipt); // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.

});


/*var subscription = web3.eth.subscribe('logs', {
    address : address
}, function(error, result){
		console.log("error 1 = ", error);
		console.log("result 1 = ", result);
});*/




contract.getPastEvents(
	'logString',
	{
	 fromBlock: 0,
	 toBlock: 'latest'	
	},
	(err, events) => { 
		console.log("Events = " , events);
		console.log("Error = " , err);

	 }
) 

