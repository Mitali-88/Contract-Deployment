const JettNFT = artifacts.require("JettNFT");

module.exports = async function (deployer) {
  // Deploy the NFT contract
  await deployer.deploy(JettNFT);

  // Access the deployed contract
  const nftContract = await JettNFT.deployed();

  // Mint an NFT
  const account = "0x80793f2eFe8fB2d553Ca2C82AF9ABd415327161e";
  const tokenId = "117";
  const tokenURI = "https://bafybeidvcjkmdtagb3s5prc7g3wxswhpj6hdklm3dr4cc2xsklacb5ap2q.ipfs.dweb.link/Minithon.png";

  await nftContract.mint(account, tokenId, tokenURI);

  console.log("NFT Contract Address:", JettNFT.address);
  console.log("Minted NFT #1");
};
