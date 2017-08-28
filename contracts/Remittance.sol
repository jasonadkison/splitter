pragma solidity ^0.4.6;

contract Remittance {
    address public owner;
    bytes32 public passhash;
    uint public totalBalance;
    
    function Remittance(string password) payable {
        owner = msg.sender;
        passhash = keccak256(password);
        totalBalance = msg.value;
    }
    
    function deposit() payable {
        require(msg.value > 0);
        totalBalance += msg.value;
    }
    
    function withdrawal(string password) returns(bool) {
        require(passhash == keccak256(password));
        msg.sender.transfer(this.balance);
        totalBalance = 0;
        return true;
    }
}
