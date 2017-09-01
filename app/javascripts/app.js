import Web3 from 'web3';
import Promise from 'bluebird';
import contract from 'truffle-contract';
import splitter_artifacts from '../../build/contracts/Splitter.json';

// Assume we're running a local node. Metamask is buggy or we'd prefer it here instead.
// This app is for learning purposes anyways.
window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Promisify web3 methods for convenience.
// web3 1.* beta supports promises out of the box, but is buggy
Promise.promisifyAll(web3.eth, { suffix: 'Promise' });
Promise.promisifyAll(web3.version, { suffix: 'Promise' });

const Splitter = contract(splitter_artifacts);
Splitter.setProvider(web3.currentProvider);

window.addEventListener('load', () => {
  web3.eth.getAccountsPromise().then(accs => {
    console.log('accounts', accs);
  });

  // contract balance
  Splitter.deployed()
    .then(instance => instance.address)
    .then(address => web3.eth.getBalance(address))
    .then(balance => {
      console.log('balance', web3.fromWei(balance.toString(10), 'ether'), 'ether');
    });

});
