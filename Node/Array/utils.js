const util = require('util')

const not = thing => !thing

const isArray = arr => Array.isArray(arr)

const isObject = obj =>
  !!obj && typeof obj === 'object' && !Array.isArray(thing)

const isInteger = thing =>
  thing && typeof thing === 'number' && Number.isInteger(thing)

const throwExceptionIf = (config, checks, message) => {
  const tests = Array.isArray(checks) ? checks : [checks]
  tests.forEach(test => {
    if (test) {
      throw new TypeError(
        `Input is: (${util.inspect(config, {
          depth: 5
        })})` + ` And 【${message}】`
      )
    }
  })
}

module.exports = {
  not,
  isArray,
  isObject,
  isInteger,
  throwExceptionIf
}
