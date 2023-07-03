/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const [index, value] of Object.entries(reportWithIterator)) {
    result += `${value}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      result += ' | ';
    }
  }

  return result;
}
