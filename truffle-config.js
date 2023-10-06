const HDWalletProvider = require('@truffle/hdwallet-provider');
// require('dotenv').config();
module.exports = {
// PRIVATE_KEY="grit bronze stadium vanish universe soon swallow dinner modify aspect glad nasty";
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
        "grit bronze stadium vanish universe soon swallow dinner modify aspect glad nasty",
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