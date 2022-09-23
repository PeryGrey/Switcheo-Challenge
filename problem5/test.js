const { ethers } = require("ethers");

// https://ropsten.etherscan.io/address/0x8e9132c7d18dc05e3590787dbfab8e4a821cc862#transactions
// your contract address
const ADDR = "0x8E9132c7D18dC05e3590787dbfAb8E4a821Cc862";
// your contract ABI
const ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "walletAddr", "type": "address" }, { "internalType": "address[]", "name": "tokenAddr", "type": "address[]" }], "name": "getBalances", "outputs": [{ "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }], "internalType": "struct UtilityContract.ReturnBalance[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }]

// some wallet address with token balance
const ADDRESS = "0x4ecAd0D968C18bBC0c7Dc1FDf7512975807Fc196";

// token contract addresses
const TOKENS = [
  "0xaD6D458402F60fD3Bd25163575031ACDce07538D",  //DAI
  "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",  //UniSwap
];

// contract deployed on Ropsten using Infura
const provider = new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/c7f53d2cf9084bcfbe02014394827c86");

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  // not sure how to extract required output values 
  // however, interacting with the smart contract returns required output
  const balances = await contract.getBalances(ADDRESS, TOKENS);

  return balances;
};

test().then(console.log);