// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Vault {
    receive() external payable {}

    constructor() {}

    mapping(string => uint256) public balances;
    uint counter = 0;

    function createCompany(string memory name) public {
        balances[name] = 0;
    }

    function deposit(string memory name) public payable {
        balances[name] += msg.value;
    }

    function distribute(uint256 amount, string memory name) public {
        balances[name] -= amount;
        payable(msg.sender).transfer(amount);
    }
}