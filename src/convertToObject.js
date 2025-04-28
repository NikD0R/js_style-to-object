'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayStrings = sourceString.split(';');

  const arrayWithNoSpaces = arrayStrings
    .map((element) => element.trim())
    .filter((element) => element.trim() !== ' ');

  const result = arrayWithNoSpaces.reduce((status, element) => {
    const parts = element.split(':').map((part) => part.trim());

    if (parts[0] !== undefined || parts[1] !== undefined) {
      return { ...status, [parts[0]]: parts[1] };
    }
  }, {});

  return result;
}

module.exports = convertToObject;
