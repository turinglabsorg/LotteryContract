import Web3 from 'web3';

const web3 = () => {
  try {
    if (window.web3) {
      return new Web3(window.web3.currentProvider);
    } else {
      alert('Installa Metamask!');
    }
  } catch (err) {
    console.log('ERROR', err);
  }
};

export default web3();
