const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calc.add(1, 2)).toBe(3);
    });

    test('adds negative numbers', () => {
      expect(calc.add(-5, -3)).toBe(-8);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(calc.subtract(10, 4)).toBe(6);
    });

    test('handles negative results', () => {
      expect(calc.subtract(3, 8)).toBe(-5);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(calc.multiply(6, 7)).toBe(42);
    });

    test('handles zero multiplication', () => {
      expect(calc.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(calc.divide(20, 4)).toBe(5);
    });

    test('throws error on division by zero', () => {
      expect(() => calc.divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('power', () => {
    test('calculates power correctly', () => {
      expect(calc.power(2, 4)).toBe(16);
    });

    test('handles power of zero', () => {
      expect(calc.power(5, 0)).toBe(1);
    });
  });

  describe('sqrt', () => {
    test('calculates square root', () => {
      expect(calc.sqrt(16)).toBe(4);
    });

    test('throws error for negative numbers', () => {
      expect(() => calc.sqrt(-4)).toThrow('Cannot calculate square root of negative number');
    });
  });
});
