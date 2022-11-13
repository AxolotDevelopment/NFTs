import { BigNumber } from "ethers";

export const MAX_FRAKTIONS = 10000;

export const LARGEST_UINT256 = BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export const contracts = [ // old ones
  {providerChainId:1, address: '0x0000000000000000000000000000000000000000'},
  {providerChainId:4, address: '0xFf3532447a93497471279150602B6ec24ae1170f'},
  {providerChainId:5, address: '0xA916BbdB90bA3BA7DCca09F2D3B249180f7fE0D2'},
]
export const marketContracts = [
    {providerChainId:1, address: '0x244763Ea2039D880B62D2BA427d8919Eba6ee50B'},
    {providerChainId:5, address: '0x8318e867e6DcbD10DD1362a56bb14Deb183a0362'},
    {providerChainId:80001, address: '0xc7320868d7Fb03FA6b85CAc237ef641e1B049131'}
]
export const factoryContracts = [
    {providerChainId:1, address: '0x5DF977d385254D9a66ab8cD35e87E1E0c419b135'},
    {providerChainId:5, address: '0x73e6EBdD5F815c3467dE3B38beB6D868365E31D3'},
    {providerChainId:80001, address: '0x0098C5c96946c404261bd0F542212CEf66FE9320'}
]
export const tokenizeTokenContracts = [
    {providerChainId:1, address:'0x1f81f8f262714cc932141c7C79495B481eF27258'},
    {providerChainId:5, address:'0x963bd88090531e014a0F55F5a0BcE23c42F20335'},
    {providerChainId:80001, address: '0x67f0Ea24932F77a0C7f62795460076D096636FaF'}
];
export const lpTokenContracts = [
    {providerChainId:1, address:'0x2763f944fc85CAEECD559F0f0a4667A68256144d'},
    {providerChainId:4, address:'0x9A18671771a15CA42442F0970852670A3972A789'},
];
export const airdropContract = [
    {providerChainId:1, address:'0x3CAf9755CE1b3db4eCF6498058E4cC5AD98446E9'},
    {providerChainId:4, address:'0xdA64d4c447476Ef26FD929d63Ec8f1C81C267854'},
];
export const partnerAirdropContract = [
    {providerChainId:1, address:'0x418A5396e7E5d28CF64A58863382A5FB2671487E'},
    {providerChainId:4, address:''},
];
export const lpStakingContracts = [
    {providerChainId:1, address:'0x9286Ea5E9b22262D4C1f142F1DD35Ffb1EaacD03'},
    {providerChainId:4, address:'0x85F625355a5DeCebb5F1609c7197597F3B125411'},
]
export const tradingRewardsContracts = [
    {providerChainId:1, address:'0x2BA1B4cE0dedc2eE0dA59EEf31a25de42AdBe0C5'},
    {providerChainId:4, address:'0x92E52AF0D07b1d4cE0DA9041C1a2eC164c75174e'},
]
export const feeSharingContracts = [
    {providerChainId:1, address:'0xa74a87Da1E4c6f3a742D3e4DDe6750a957Ca3aC3'},
    {providerChainId:4, address:'0xe398a2Cfa41440e7d33bbdC76f0a65C9Ca3D8373'},
]

export const networkNames = {
  1: "ETH Mainnet",
  3: "Ropsten Testnet",
  4: "Rinkeby Testnet",
  5: "Göerli Testnet",
  80001: "Mumbai Testnet",
};

export const networkLabels = {
  1: "Mainnet",
  3: "Ropsten",
  4: "Rinkeby",
  5: "Goerli",
  80001: "Mumbai",
};

export const networkCurrencies = {
  1: {
    name: "Ethereum",
    symbol: "ETH",
  },
  3: {
    name: "Ethereum",
    symbol: "ETH",
  },
  4: {
    name: "Ethereum",
    symbol: "ETH",
  },
  5: {
    name: "Ethereum",
    symbol: "ETH",
  },
  80001: {
    name: "POLYGON",
    symbol: "MATIC",
  },
};

export const chainUrls = {
  1: {
    rpc: "https://mainnet.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_ID,
    explorer: "https://etherscan.io/",
    chainId: 1,
    name: networkNames[1],
    openSeaApi: 'https://api.opensea.io/api/v1/',
    alchemyApi: 'https://eth-mainnet.alchemyapi.io/v2/'
  },
  3: {
    rpc: "https://ropsten.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_ID,
    explorer: "https://ropsten.etherscan.io/",
    chainId: 3,
    name: networkNames[3]
  },
  4: {
    rpc: "https://rinkeby.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_ID,
    explorer: "https://rinkeby.etherscan.io/",
    chainId: 4,
    name: networkNames[4],
    openSeaApi: 'https://rinkeby-api.opensea.io/api/v1/',
    alchemyApi: 'https://eth-rinkeby.alchemyapi.io/v2/'
  },
  5: {
    rpc: "https://goerli.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_ID,
    explorer: "https://goerli.etherscan.io/",
    chainId: 5,
    name: networkNames[5],
    openSeaApi: 'https://api.opensea.io/api/v1/',
    alchemyApi: 'https://eth-goerli.alchemyapi.io/v2/'
  },
  80001: {
    rpc: "https://polygon-mumbai.infura.io/v3/" + process.env.NEXT_PUBLIC_INFURA_ID,
    explorer: "https://goerli.etherscan.io/",
    chainId: 80001,
    name: networkNames[80001],
    openSeaApi: 'https://api.opensea.io/api/v1/',
    alchemyApi: 'https://polygon-mumbai.alchemyapi.io/v2/'
  },
};
