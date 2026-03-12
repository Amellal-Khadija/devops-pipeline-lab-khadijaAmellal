const Calculator = require('./calculator');
const { formatResult } = require('./utils');

function run() {
  console.log('=== DevOps Pipeline Lab - Node.js App ===');
  console.log('\nCalculator Demo:');
  
  const calc = new Calculator();
  
  console.log(formatResult('5 + 3', calc.add(5, 3)));
  console.log(formatResult('10 - 4', calc.subtract(10, 4)));
  console.log(formatResult('6 * 7', calc.multiply(6, 7)));
  console.log(formatResult('20 / 4', calc.divide(20, 4)));
  console.log(formatResult('2^4', calc.power(2, 4)));
  
  console.log('\n✅ Application running successfully!');
}

if (require.main === module) {
  run();
}

module.exports = { run };
