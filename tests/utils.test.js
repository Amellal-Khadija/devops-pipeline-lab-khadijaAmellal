const { formatResult, isValidNumber, roundTo } = require('../src/utils');

describe('Utils', () => {
  describe('formatResult', () => {
    test('formats result correctly', () => {
      expect(formatResult('5 + 3', 8)).toBe('  5 + 3 = 8');
    });

    test('handles decimal results', () => {
      expect(formatResult('10 / 3', 3.333)).toBe('  10 / 3 = 3.333');
    });
  });

  describe('isValidNumber', () => {
    test('returns true for valid numbers', () => {
      expect(isValidNumber(42)).toBe(true);
      expect(isValidNumber(0)).toBe(true);
      expect(isValidNumber(-10)).toBe(true);
      expect(isValidNumber(3.14)).toBe(true);
    });

    test('returns false for invalid values', () => {
      expect(isValidNumber(NaN)).toBe(false);
      expect(isValidNumber(Infinity)).toBe(false);
      expect(isValidNumber('42')).toBe(false);
      expect(isValidNumber(null)).toBe(false);
      expect(isValidNumber(undefined)).toBe(false);
    });
  });

  describe('roundTo', () => {
    test('rounds to 2 decimal places by default', () => {
      expect(roundTo(3.14159)).toBe(3.14);
    });

    test('rounds to specified decimal places', () => {
      expect(roundTo(3.14159, 3)).toBe(3.142);
      expect(roundTo(3.14159, 0)).toBe(3);
    });

    test('handles whole numbers', () => {
      expect(roundTo(5, 2)).toBe(5);
    });
  });
});
