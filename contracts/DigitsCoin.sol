// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DefiDigits is ERC20 {
    constructor() ERC20("DefiDigits", "DD") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
}
