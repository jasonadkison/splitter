var Splitter = artifacts.require("./Splitter.sol");

module.exports = function(deployer, addresses) {
  deployer.deploy(Splitter, '0xeedda834c53e2cee3da65fe646588789e83b9599', '0x511eaba1765417480391def4b0217ef56ee2c6e5');
};
