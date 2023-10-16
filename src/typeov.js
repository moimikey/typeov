exports.typeov = function typeov (input) {
  const isArray = Array.isArray
  const isNaN = Number.isNaN
  const isSafeInteger = Number.isSafeInteger
  const isFinite = Number.isFinite
  const is = obj => Object.prototype.toString.call(obj)
  const isBuffer = obj => is(obj) === '[object Uint8Array]'
  const isDate = obj => obj instanceof Date
  const isMap = obj => is(obj) === '[object Map]'
  const isPromise = obj => (is(obj) === '[object Promise]' || obj.constructor) && obj.constructor.name === 'Promise'
  const isRegexp = obj => obj instanceof RegExp
  const isSet = obj => is(obj) === '[object Set]'
  const isWeakMap = obj => is(obj) === '[object WeakMap]'
  const isWeakSet = obj => is(obj) === '[object WeakSet]'
  const isJSON = obj => {
    try {
      return !!JSON.parse(obj)
    } catch (e) {
      return false
    }
  }
  switch (typeof input) {
    case 'string':
      if (isJSON(input)) return 'json'
      return 'string'
    case 'object':
      if (input === null) return 'null'
      if (isArray(input)) return 'array'
      if (isDate(input)) return 'date'
      if (isRegexp(input)) return 'regexp'
      if (isPromise(input)) return 'promise'
      if (isSet(input)) return 'set'
      if (isWeakSet(input)) return 'weakset'
      if (isMap(input)) return 'map'
      if (isWeakMap(input)) return 'weakmap'
      if (isBuffer(input)) return 'buffer'
      return 'object'
    case 'number':
      if (isNaN(input)) return 'nan'
      if (isSafeInteger(input)) return 'number'
      if (isFinite(input)) return 'float'
      return 'infinity'
    case 'undefined':
      return 'undefined'
    case 'function':
      return 'function'
    case 'boolean':
      return 'boolean'
    case 'symbol':
      return 'symbol'
    /**
     * @see https://node-tap.org/coverage/#handling-impossible-cases
     */
    /* c8 ignore start */
    default:
      throw Error('Unknown type')
    /* c8 ignore stop */
  }
}
