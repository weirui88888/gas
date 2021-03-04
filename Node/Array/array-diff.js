const util = require('./utils')

module.exports = (a, b, expect = 'duplicate') => {
  util.throwExceptionIf(
    a,
    util.not(util.isArray(a)),
    'params a expect get an arr'
  )
  util.throwExceptionIf(
    b,
    util.not(util.isArray(b)),
    'params a expect get an arr'
  )
  util.throwExceptionIf(
    expect,
    util.not(['duplicate', 'intersection', 'difference'].includes(expect)),
    'params expect expect in ["duplicate", "intersection"]'
  )

  a = [...new Set(a)]
  b = [...new Set(b)]

  let outArr = a.length > b.length ? a : b
  let inArr = a.length > b.length ? b : a

  // 并集（去重）
  if (expect === 'duplicate') return [...new Set([...a, ...b])]

  // 交集
  if (expect === 'intersection') return a.filter(aItem => b.includes(aItem))

  // 差集 默认会筛选
  // if (expect === 'difference')
  //   return outArr.filter(outItem => !inArr.includes(outItem))
}
