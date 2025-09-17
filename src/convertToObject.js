'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleSheet = {};

  const input = sourceString.split(';');

  const inputTrimmed = input.map((item) => item.trim());
  const inputFiltered = inputTrimmed.filter((item) => item.length >= 1);

  inputFiltered.forEach((item) => {
    const coloneIndex = item.indexOf(':');
    const key = item.slice(0, coloneIndex).trim();
    const value = item.slice(coloneIndex + 1).trim();

    styleSheet[key] = value;
  });

  return styleSheet;
}
module.exports = convertToObject;
