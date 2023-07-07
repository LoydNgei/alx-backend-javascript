function cleanSet(set, startString) {
  let newString = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      const newelement = element.slice(startString.length);
      newString += `${newelement}-`;
    }
  }
  newString = newString.slice(0, -1);

  return newString;
}

export default cleanSet;
