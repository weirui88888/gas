module.exports = (arr, index = 1) => {
  if (!Array.isArray(arr)) {
    return new TypeError('Expected Array, got ' + typeof arr)
  }
  if (arr.length === 0) {
    return null
  }

  return Array.from({ length: index > arr.length ? arr.length : index }).reduce(
    (acc, prev, index) => {
      return [...acc, arr[index]]
    },
    []
  )
}
