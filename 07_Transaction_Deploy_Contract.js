var Tx = require('ethereumjs-tx');
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/f70238fa8087435282657727198de6a5');

const account1 = "0x23Cc89bF9762353c06958c0aF6F41761C1012edA"; // Account2 of my wallet


const privateKey1 = "4F769387F80481A55C8BA8FD2054D5D2514D1DA941035FC1097AD366F2A13C9E";


const privateKey1Buffer = Buffer.from(privateKey1, 'hex');



web3.eth.getTransactionCount(account1, (err, txCount)=>{

    const data = "0x608060405234801561001057600080fd5b5061019b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063303b519214610046578063967e6e65146100c9578063d5dcf127146100e7575b600080fd5b61004e610115565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561008e578082015181840152602081019050610073565b50505050905090810190601f1680156100bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100d1610152565b6040518082815260200191505060405180910390f35b610113600480360360208110156100fd57600080fd5b810190808035906020019092919050505061015b565b005b60606040518060400160405280601681526020017f446f20536f6d6520576f726b20666f722048756d616e00000000000000000000815250905090565b60008054905090565b806000819055505056fea264697066735822122022b4fd601e56c4be03f3f33d715f0806476c544f83cd57bf270f380a0c9453e564736f6c63430006060033"


    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data:     data
      }

    const tx = new Tx.Transaction(txObject,  { chain: 'ropsten', hardfork: 'petersburg' });
    tx.sign(privateKey1Buffer);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');


    web3.eth.sendSignedTransaction(raw, (err, txHash) => {

    console.log('err:', err);
    console.log('txHash:', txHash);
    });

});



