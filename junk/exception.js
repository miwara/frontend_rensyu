function reduce(array, callback, initialValue) {
  if (typeof callback != 'function') {
    throw new Error(callback + " is not a function");
  }
}

reduce([], null);
