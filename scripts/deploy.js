// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Test = await hre.ethers.deployContract("Test");
  let test = await Test.waitForDeployment();

  console.log("test deploy to:", await test.getAddress());

  const a = '0xc86634b7a88ab63ee36bbc5ada82f12a3ea84636eafee806a6623c4d2ddaaa31'
  let tx = await test.aG(a);

  console.log("tx:", tx)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
