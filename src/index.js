export function typeov(input) {
  const isArray = Array.isArray
  const isNaN = Number.isNaN
  const isSafeInteger = Number.isSafeInteger
  const isFinite = Number.isFinite
  switch(typeof input) {
    case 'string':
      return 'string'
    case 'object':
      if (input === null) return 'null'
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
