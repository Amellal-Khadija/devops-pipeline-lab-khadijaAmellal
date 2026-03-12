/**
 * Format a calculation result for display
 * @param {string} operation - The operation description
 * @param {number} result - The calculation result
 * @returns {string} Formatted result string
 */
function formatResult(operation, result) {
  return `  ${operation} = ${result}`;
}

/**
 * Validate if a value is a number
 * @param {*} value - Value to validate
 * @returns {boolean} True if value is a number
 */
function isValidNumber(value) {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Round a number to specified decimal places
 * @param {number} num - Number to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded number
 */
function roundTo(num, decimals = 2) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

module.exports = {
  formatResult,
  isValidNumber,
  roundTo
};
