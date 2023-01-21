function removeFromArray(array, ...elemRemove) {
  return array.filter((filtered) => {
    return !elemRemove.includes(filtered);
  });
}

// Do not edit below this line
module.exports = removeFromArray;
