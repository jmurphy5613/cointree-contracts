
const main = async () => {
  const vault = await hre.ethers.getContractFactory("Vault");
  const deployedVault = await vault.deploy();
  console.log("vault deployed to: ", deployedVault.address);

  const NFT = await hre.ethers.getContractFactory("CoinTreeNFT");
  const deployedNFT = await NFT.deploy();
  console.log("NFT deployed to: ", deployedNFT.address);
}

main()