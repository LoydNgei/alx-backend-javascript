function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  myMap.forEach((quantity, item) => {
    if (quantity === 1) {
      myMap.set(item, 100);
    } else {
      myMap.set(item, quantity);
    }
  });
  return myMap;
}

export default updateUniqueItems;
