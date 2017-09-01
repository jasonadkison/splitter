import { Splitter } from './contracts';

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
