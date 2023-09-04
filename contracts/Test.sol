// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./Bn128G1.sol";

contract Test is Bn128G1  {
    uint public count;
    function Batch(uint256 a) public {
        for(uint i; i<8; i++) {
            aG(a);
        }
    }
    function aG(uint256 a) public returns (uint256, uint256) {
        count++;
        return ecmul(getGx(), getGy(), a);
    }
}
