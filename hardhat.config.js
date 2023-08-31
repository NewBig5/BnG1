require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    lineaTestnet: {
      gasPrice:3e9,
      url: "https://rpc.goerli.linea.build",
      accounts: [process.env.PK]
  }
  }
};
