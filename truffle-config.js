const HDWalletProvider = require('@truffle/hdwallet-provider');
// require('dotenv').config();
module.exports = {
// PRIVATE_KEY="SEED PHRASE";
  networks: {
    xinfin: {
      provider: () => new HDWalletProvider(
        PRIVATE_KEY,
        'https://rpc.xinfin.network'),
      network_id: 50,
      gasLimit: 6721975,
      confirmation: 2,
    },
    apothem: {
      provider: () => new HDWalletProvider(
        PRIVATE_KEY,
        'https://erpc.apothem.network/'),
      network_id: 51,
      gasLimit: 21000,
      confirmation: 2,
    }
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.0",
    }
  },
};