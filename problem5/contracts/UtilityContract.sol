// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface ERC20 {
    function balanceOf(address who) external view returns (uint256);
}

contract UtilityContract {

    struct ReturnBalance {
        address token;
        uint256 balance;
    }

    constructor() {}

    function getBalances(address walletAddr, address[] calldata tokenAddr) public view 
    returns (ReturnBalance[] memory) {

        ReturnBalance[] memory BalanceOutputArray = new ReturnBalance[](tokenAddr.length);

        // loop through all token addresses of walletAddr to get required output values
        for (uint i=0; i<tokenAddr.length ; i++) {
            address curToken = tokenAddr[i];
            uint256 tokenBalance = ERC20(curToken).balanceOf(walletAddr);
            BalanceOutputArray[i] = ReturnBalance(curToken,tokenBalance);
        }

        return BalanceOutputArray;
    }
}