export function typeov(input) {
  const isArray = Array.isArray
  const isNaN = Number.isNaN
  const isSafeInteger = Number.isSafeInteger
  const isFinite = Number.isFinite
  const isPromise = obj => Object.prototype.toString.call(obj) === '[object Promise]'
  const isDate = obj => Object.prototype.toString.call(obj) === '[object Date]'
  const isJSON = obj => {
    try {
      return !!JSON.parse(obj)
    } catch (e) {
      return false
    }
  }
  switch(typeof input) {
    case 'string':
      if (isJSON(input)) return 'json'
      return 'string'
    case 'object':
      if (input === null) return 'null'
      if (isPromise(input)) return 'promise'
      if (isDate(input)) return 'date'
      if (isArray(input)) return 'array'
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
    default:
      return void 0
  }
}
