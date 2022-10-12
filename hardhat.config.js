require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "MXUJK33lMlmG9RfgVl9Q8GbCz0znMtDn";

const GOERLI_PRIVATE_KEY = "d3df328a7be85e4ecb3f052124101ed26f859c92e6ca90a61a6ab56eb891a71e";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
