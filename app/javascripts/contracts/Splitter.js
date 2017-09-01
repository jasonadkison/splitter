import contract from 'truffle-contract';
import splitter_artifacts from '../../../build/contracts/Splitter.json';
const Splitter = contract(splitter_artifacts);

export default Splitter;
