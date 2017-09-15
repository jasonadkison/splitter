import { Splitter } from './contracts';

let watching = false;

export const watchContributions = () => {
  return (dispatch, getState) => {
    if (!watching) {
      watching = true;

      Splitter.deployed()
        .then(instance => instance.LogContribution({}, { fromBlock: 0}).watch((err, log) => {
          if (err) {
            console.error('log error', err);
          } else {
            return dispatch({
              type: 'RECEIVE_CONTRIBUTION_LOG',
              from: log.args.from,
              amount: log.args.amount.toString(10),
              txn: log.transactionHash,
            });
          }
        }));
    }
  };
};

export const fetchAccounts = () => {
  return (dispatch) => {
    return window.web3.eth.getAccountsPromise()
      .then(accounts => {
        return dispatch({ type: 'RECEIVE_ACCOUNTS', accounts });
      });
  };
};

export const fetchBalance = () => {
  return (dispatch) => {
    Splitter.deployed()
      .then(instance => instance.address)
      .then(address => web3.eth.getBalance(address))
      .then(balance => {
        return dispatch({
          type: 'RECEIVE_BALANCE',
          value: window.web3.fromWei(balance.toString(10), 'ether')
        });
      });
  };
}

export const fetchStats = () => {
  return (dispatch, getState) => {
    const {accounts} = getState();
    let splitter;
    const stats = {};
    return Splitter.deployed()
      .then(instance => {
        splitter = instance;
        stats.address = splitter.address;
        return web3.eth.getBalance(splitter.address);
      })
      .then(balance => {
        stats.balance = balance.toString(10);
        return splitter.owner.call({ from: accounts[0] });
      })
      .then(alice => {
        stats.alice = alice;
        return web3.eth.getBalance(alice);
      })
      .then(aliceBalance => {
        stats.aliceBalance = aliceBalance.toString(10);
        return splitter.bob.call({ from: accounts[0] });
      })
      .then(bob => {
        stats.bob = bob;
        return web3.eth.getBalance(bob);
      })
      .then(bobBalance => {
        stats.bobBalance = bobBalance.toString(10);
        return splitter.balances.call(stats.bob, { from: accounts[0] });
      })
      .then(bobSplit => {
        stats.bobSplit = bobSplit.toString(10);
        return splitter.carol.call({ from: accounts[0] });
      })
      .then(carol => {
        stats.carol = carol;
        return web3.eth.getBalance(carol);
      })
      .then(carolBalance => {
        stats.carolBalance = carolBalance.toString(10);
        return splitter.balances.call(stats.carol, { from: accounts[0] });
      })
      .then(carolSplit => {
        stats.carolSplit = carolSplit.toString(10);
      })
      .then(() => {
        dispatch({ type: 'RECEIVE_STATS', stats });
      });
  };
};

export const sendContribution = (from, value) => {
  return (dispatch, getState) => {
    return Splitter.deployed()
      .then(instance => {
        return web3.eth.sendTransaction({ to: instance.address, from, value, gas: 444444 });
      });
  };
};
