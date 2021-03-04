const defaultComparator = (a, b) => a - b

module.exports = (arr, comparator) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected Array, got ' + typeof arr)
  }
  comparator = comparator || defaultComparator

  for (var i = 1, length = arr.length; i < length; ++i) {
    if (comparator(arr[i - 1], arr[i]) > 0) return false
  }

  return true
}
