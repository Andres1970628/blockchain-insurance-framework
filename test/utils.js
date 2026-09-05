/**
 * @file Mock ERC20 Token for Testing
 */

const { ethers } = require("hardhat");

async function deployMockToken() {
  const MockToken = await ethers.getContractFactory("MockERC20");
  const token = await MockToken.deploy(
    "Mock Insurance Token",
    "MOCK",
    ethers.parseEther("1000000")
  );
  await token.deployed();
  console.log("Mock Token deployed to:", token.address);
  return token;
}

module.exports = { deployMockToken };
