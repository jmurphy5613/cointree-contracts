
const main = async () => {
  const contract = await hre.ethers.getContractFactory("Vault");
  const deployedContract = await contract.deploy();
  console.log("contract deployed to: ", deployedContract.address);
}

main()