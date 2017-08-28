var Remittance = artifacts.require('./Remittance.sol');

contract('Remittance', accounts => {

  var contract;
  var owner = accounts[0];
  var password = "hello world";

  beforeEach(() => {
    return Remittance.new(password, { value: 15 })
      .then(instance => {
        contract = instance;
      });
  });

  it('should have an owner', () => {
    return contract.owner({from: owner})
      .then(_owner => {
        assert.strictEqual(_owner, owner, 'owner is not correctly set');
      });
  });

  it('should hash that password', () => {
    return contract.passhash({from: owner})
      .then(passhash => {
        assert.equal(passhash, web3.sha3(password), 'password hash does not match');
      });
  });

  it('should be created with initial balance', () => {
    return contract.totalBalance()
      .then(balance => {
        assert.equal(balance, 15, 'initial balance not stored');
      });
  });

  it('should handle deposits', () => {
    return contract.deposit({ from: owner, value: 10 })
      .then(txn => {
        return contract.totalBalance()
          .then(balance => {
            assert.equal(balance, 25, 'deposit not added to initial balance');
          });
      });
  });

  it('allows withdrawal with correct password', () => {
    return contract.totalBalance()
      .then(balance => {
        assert.equal(balance, 15, 'initial balance not correct');
        return contract.withdrawal.call(password, {from: accounts[1]})
          .then(success => {
            assert.isTrue(success, 'did not withdraw correctly');
          });
       });
  });


  // TODO: test withdrawal attempt with invalid password
});
