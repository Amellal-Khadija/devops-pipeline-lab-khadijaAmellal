const { run } = require('../src/index');

describe('Index', () => {
  test('run function executes without errors', () => {
    // Mock console.log to avoid output during tests
    const originalLog = console.log;
    console.log = jest.fn();

    expect(() => run()).not.toThrow();

    // Restore console.log
    console.log = originalLog;
  });
});
