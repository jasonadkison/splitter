pragma solidity ^0.4.6;

contract Splitter {
    address public owner;
    address public bob;
    address public charlie;
    
    uint public totalBalance;
    
    mapping(address => uint) public balances;
    
    function Splitter(address _bob, address _charlie) {
        owner = msg.sender;
        bob = _bob;
        charlie = _charlie;
    }
    
    function split() payable returns(bool) {
        require(msg.sender == owner);
        require(msg.value > 0);
        
        totalBalance += msg.value;
        
        uint splitAmount = msg.value / 2;
        
        balances[bob] += splitAmount;
        balances[charlie] += splitAmount;

        return true;
    }

}
