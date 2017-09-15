pragma solidity ^0.4.6;

contract Splitter {
    address public owner;
    address public bob;
    address public carol;

    mapping(address => uint) public balances;

    event LogContribution(address from, uint amount);

    function Splitter(address _bob, address _carol) {
        owner = msg.sender;
        bob = _bob;
        carol = _carol;
    }

    function() payable {
        require(msg.value > 0);

        if (msg.sender == owner) {
            uint splitAmount = msg.value / 2;

            balances[bob] += splitAmount;
            balances[carol] += splitAmount;
        }

        LogContribution(msg.sender, msg.value);
    }

}
