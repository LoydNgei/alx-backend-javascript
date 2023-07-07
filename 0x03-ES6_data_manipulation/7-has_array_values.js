// For us to check if all elements in the array exist within the set,
// We have to loop through the array first and apply a condition to
// check for common elements in both

function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
