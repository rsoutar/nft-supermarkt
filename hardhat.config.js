require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "ad8de800f03840a19e8ea8ff2fd48025"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/${projectId}",
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/${projectId}",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
