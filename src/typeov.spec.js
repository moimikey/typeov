const { t } = require('tap')
const { typeov } = require('./typeov')

t.test('array', t => {
  t.equal(typeov([]), 'array', '=== []')
  // eslint-disable-next-line
  t.equal(typeov(Array()), 'array', '=== Array()')
  t.end()
})

t.test('boolean', t => {
  t.equal(typeov(true), 'boolean', '=== true')
  t.equal(typeov(false), 'boolean', '=== false')
  t.equal(typeov(Boolean()), 'boolean', '=== Boolean()')
  t.end()
})

t.test('buffer', t => {
  // eslint-disable-next-line
  t.equal(typeov(new Buffer(0)), 'buffer', '=== new Buffer')
  t.equal(typeov(Buffer.from('')), 'buffer', '=== Buffer.from()')
  t.end()
})

t.test('date', t => {
  t.equal(typeov(new Date()), 'date', '=== new Date')
  t.end()
})

t.test('float', t => {
  t.equal(typeov(Math.PI), 'float', '=== Math.PI/3.14')
  t.equal(typeov(6.666666666), 'float', '=== 6.666666666')
  t.equal(typeov(6.6), 'float', '=== 6.6')
  // eslint-disable-next-line
  t.equal(typeov(.6), 'float', '=== .6')
  t.equal(typeov(0.6), 'float', '=== 0.6')
  t.equal(typeov(1e99), 'float', '=== 1e99')
  t.end()
})

t.test('function', t => {
  t.equal(typeov(function () {}), 'function', '=== function(){}')
  t.end()
})

t.test('infinity', t => {
  t.equal(typeov(Infinity), 'infinity', '=== Infinity')
  t.equal(typeov(-Infinity), 'infinity', '=== -Infinity')
  t.equal(typeov(+Infinity), 'infinity', '=== +Infinity')
  t.end()
})

t.test('json', t => {
  t.equal(typeov('[{"A": "B"}]'), 'json', '!== [{"A": "B"}]')
  t.not(typeov('[{a: "B"}]'), 'json', '!== [{a: "B"}]')
  t.equal(typeov('{"A":"B"}'), 'json', '=== {"A":"B"}')
  t.not(typeov('{a:"B"}'), 'json', '!== {a:"B"}')
  t.end()
})

t.test('map', t => {
  t.equal(typeov(new Map()), 'map', '=== new Map')
  t.end()
})

t.test('nan', t => {
  t.equal(typeov(NaN), 'nan', '=== NaN')
  t.end()
})

t.test('null', t => {
  t.equal(typeov(null), 'null', '=== null')
  t.end()
})

t.test('number', t => {
  t.equal(typeov(666), 'number', '=== 666')
  t.equal(typeov(+0), 'number', '=== +0')
  t.equal(typeov(-0), 'number', '=== -0')
  t.equal(typeov(0), 'number', '=== 0')
  t.equal(typeov(1e6), 'number', '=== 1e6')
  t.end()
})

t.test('object', t => {
  t.equal(typeov({}), 'object', '=== {}')
  t.equal(typeov(Object.create(null)), 'object', '=== Object.create(null)')
  // eslint-disable-next-line
  t.equal(typeov(new function () {}), 'object', '=== new function(){}')
  t.end()
})

t.test('promise', t => {
  t.equal(typeov(Promise.resolve(true)), 'promise', '=== Promise.resolve(true)')
  t.end()
})

t.test('regexp', t => {
  t.equal(typeov(/regex/), 'regexp', '=== /regex/')
  t.equal(typeov(new RegExp()), 'regexp', '=== new RegExp')
  t.equal(typeov(RegExp()), 'regexp', '=== RegExp()')
  t.end()
})

t.test('set', t => {
  t.equal(typeov(new Set()), 'set', '=== new Set')
  t.end()
})

t.test('string', t => {
  t.equal(typeov('hello world'), 'string', '=== hello world')
  t.end()
})

t.test('symbol', t => {
  t.equal(typeov(Symbol('@@')), 'symbol', '=== Symbol()')
  t.end()
})

t.test('undefined', t => {
  t.equal(typeov(undefined), 'undefined', '=== undefined')
  t.end()
})

t.test('weakmap', t => {
  t.equal(typeov(new WeakMap()), 'weakmap', '=== new WeakMap')
  t.end()
})

t.test('weakset', t => {
  t.equal(typeov(new WeakSet()), 'weakset', '=== new WeakSet')
  t.end()
})
