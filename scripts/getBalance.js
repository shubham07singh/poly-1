const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/shubham.sol/shubham.json");

const tokenAddress = "0x9938B0304bec4E99e5449a6e1DDa70Fc6f449B28"; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xE6c82A490314A404E4b2976cc26dA0Aa2F089902"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " NFTs in your wallet.");
  }
  
// This pattern is recommanded to be able to use async/await everywhere and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });