import InputParser from './inputParser.js';
import Queue from './aiQueue.js';
const inputParser = new InputParser();
const queue = new Queue();
inputParser.listen();
setTimeout(() => {
  inputParser.stop();
}, 20000);


