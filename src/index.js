function add(a, b) {
  return a + b;
}

if (require.main === module) {
  console.log('Hello from Node.js app');
}

module.exports = { add };
