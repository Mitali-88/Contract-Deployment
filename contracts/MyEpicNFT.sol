// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./contracts/tokens/nf-token-metadata.sol";
import "./contracts/ownership/ownable.sol";

contract JettNFT is NFTokenMetadata, Ownable {
    constructor() {
        nftName = "Bit Lords NFT Minter";
        nftSymbol = "XFM";
    }

    function mint(
        address _to,
        uint256 _tokenId,
        string calldata _uri
    ) external onlyOwner {
        require(_to != address(0), "Invalid recipient address");
        require(bytes(_uri).length > 0, "URI cannot be empty");

        super._mint(_to, _tokenId);
        super._setTokenUri(_tokenId, _uri);
    }
}
