/**
 * @file ClaimProcessor Smart Contract Tests
 */

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ClaimProcessor", function () {
  let claimProcessor;
  let mockToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy mock token
    const MockToken = await ethers.getContractFactory("MockERC20");
    mockToken = await MockToken.deploy("Mock Token", "MOCK", ethers.parseEther("1000000"));
    await mockToken.deployed();

    // Deploy ClaimProcessor
    const ClaimProcessor = await ethers.getContractFactory("ClaimProcessor");
    claimProcessor = await ClaimProcessor.deploy(mockToken.address);
    await claimProcessor.deployed();
  });

  describe("Claim Submission", function () {
    it("Should allow submitting a claim", async function () {
      const policyAddress = addr1.address;
      const claimAmount = ethers.parseEther("100");
      const description = "Test claim";
      const documentHash = ethers.keccak256(ethers.toUtf8Bytes("test"));

      const tx = await claimProcessor.connect(addr1).submitClaim(
        policyAddress,
        claimAmount,
        description,
        documentHash
      );

      await expect(tx).to.emit(claimProcessor, "ClaimSubmitted");

      const claim = await claimProcessor.getClaimDetails(0);
      expect(claim.claimant).to.equal(addr1.address);
      expect(claim.claimAmount).to.equal(claimAmount);
    });

    it("Should reject claim with zero amount", async function () {
      await expect(
        claimProcessor.connect(addr1).submitClaim(
          addr1.address,
          0,
          "Test",
          ethers.keccak256(ethers.toUtf8Bytes("test"))
        )
      ).to.be.revertedWith("Claim amount must be positive");
    });
  });

  describe("Claim Details", function () {
    it("Should retrieve claim details", async function () {
      const claimAmount = ethers.parseEther("100");
      const description = "Test claim";

      await claimProcessor.connect(addr1).submitClaim(
        addr1.address,
        claimAmount,
        description,
        ethers.keccak256(ethers.toUtf8Bytes("test"))
      );

      const claim = await claimProcessor.getClaimDetails(0);
      expect(claim.claimAmount).to.equal(claimAmount);
      expect(claim.claimDescription).to.equal(description);
    });

    it("Should get claimant claims", async function () {
      await claimProcessor.connect(addr1).submitClaim(
        addr1.address,
        ethers.parseEther("100"),
        "Test claim",
        ethers.keccak256(ethers.toUtf8Bytes("test"))
      );

      const claims = await claimProcessor.getClaimantClaims(addr1.address);
      expect(claims.length).to.equal(1);
      expect(claims[0]).to.equal(0);
    });
  });
});
