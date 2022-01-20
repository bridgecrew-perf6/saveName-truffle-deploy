// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SaveName {

    mapping(address => string) public names;

    uint256     feePrice;
    address     owner;

    constructor(uint256 _feePrice) {
        require(_feePrice > 0, 'fee should be greater than 0');
        feePrice = _feePrice;
        owner = msg.sender;
    }

    function setName(string memory _name) external payable {
        if(owner != msg.sender) {
            require(msg.value >= feePrice, 'You should pay for saving');
            (payable(owner)).transfer(msg.value);
        }
        names[msg.sender] = _name;
    }
}