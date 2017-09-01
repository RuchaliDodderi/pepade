// ********
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed
// and change the line below to use your deployed address



web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//abi = JSON.parse(add params)
//PepadeContract = web3.eth.contract(abi);

// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed
// and change the line below to use your deployed address
contractInstance = PepadeContract.at('0x2a9c1d265d06d47e8f7b00ffa987c9185aecf672');
// myJsonVar = {something}

// function submitNewOrder() {
// myVar = something;
//  contractInstance.submitNewOrder(myVar, {from: web3.eth.accounts[0]}, function() {
// my code
//  });
//}

