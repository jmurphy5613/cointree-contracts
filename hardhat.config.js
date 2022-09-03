require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/3_zFhV0Y5aI8awvm-9ERRR8bK7NBKGSM",
      accounts: ["69bd377d96685a9d822d8c091335c70bf92f5ceb3ed69f08bd284d305013ab98"],
    },
  }
};
