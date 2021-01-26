const fs = require('fs');
const { EOL } = require('os');

const gimmeInput = () => (process.stdin.isTTY
  ? process.argv.slice(2)
  : fs.readFileSync('/dev/stdin').toString().split(EOL).filter(Boolean));

module.exports = {
  gimmeInput,
};
