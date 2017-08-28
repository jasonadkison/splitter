var Splitter = artifacts.require("./Splitter.sol");

contract('Splitter', function(accounts) {

  var contract;
  var alice = accounts[0];
  var bob = accounts[1];
  var charlie = accounts[2];

  beforeEach(() => {
    return Splitter.new(bob, charlie, {from:alice})
      .then(instance => {
        contract = instance;
      });
  });

  it('should be owned by alice', () => {
    return contract.owner({from:alice})
      .then(owner => {
        assert.strictEqual(owner, alice, 'contract is not owned by alice');
      });
  });

  it('should have a total balance', () => {
    return contract.split({from: alice, value: 6})
      .then(txn => {
        return contract.totalBalance();
      })
      .then(balance => {
        assert.equal(balance.toString(10), 6, 'total balance is set');
        return contract.split({from: alice, value: 6})
          .then(txn => {
            return contract.totalBalance();
          })
          .then(balance => {
            assert.equal(balance.toString(10), 12, 'total balance is sum of all contributions');
          });
      });
  });

  it('splits contributions between bob and charlie', () => {
    return contract.split({from: alice, value: 10})
      .then(txn => {
        return contract.balances(bob, {from:alice});
      })
      .then(bobBalance => {
        assert.equal(bobBalance, 5, 'failed to split 10 into 5 for bob');
        return contract.balances(charlie, {from:alice});
      })
      .then((charlieBalance) => {
        assert.equal(charlieBalance, 5, 'failed to split 10 into 5 for charlie');
      });
  });
});
