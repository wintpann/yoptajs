const fs = require('fs');
const config = require('./config.yopta');
let input;
try {
  input = fs.readFileSync('./' + process.argv[2], 'utf8');
} catch (e) {
  console.log('File reading error');
  process.exit(1);
}
Object.keys(config).forEach(key => {
  input = input.replace(new RegExp(config[key], 'g'), key)
});
fs.writeFileSync(process.argv[2] + '.js', input);

const { spawn } = require("child_process");

const node = spawn("node", [process.argv[2] + '.js']);

node.stdout.on("data", data => {
  console.log(`${data}`);
});

node.stderr.on("data", data => {
  console.log(`${data}`);
});

node.on('error', (error) => {
  console.log(`${error.message}`);
});

node.on('exit', () => {
  fs.unlinkSync(process.argv[2] + '.js');
});