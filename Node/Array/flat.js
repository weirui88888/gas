const util = require('./utils')

module.exports = arr => {
  util.throwExceptionIf(arr, util.not(util.isArray(arr)), 'expect get an arr')
  let res = Array.of()
  return (function acc(inarr) {
    for (let i = 0, length = inarr.length; i < length; i++) {
      const cur = inarr[i]
      if (Array.isArray(cur)) {
        arguments.callee(cur)
      } else {
        res = [...res, cur]
      }
    }
    return res
  })(arr)
}
