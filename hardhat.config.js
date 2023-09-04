require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    lineaTestnet: {
      gasPrice:30e9,
      url: "https://rpc.goerli.linea.build",
      accounts: [process.env.PK]
    },        
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [process.env.PK],
    },
    metisTestnet: {
      url: 'https://goerli.gateway.metisdevops.link',
      accounts: [process.env.PK],
    }
  }
};
