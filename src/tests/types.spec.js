/* eslint no-console:0 */
import * as tap from 'tap'
import { typeov } from '..'
const test = tap.test
test('float', t => {
  t.equal(typeov(Math.PI), 'float', '=== Math.PI/3.14')
  t.equal(typeov(6.666666666), 'float', '=== 6.666666666')
  t.equal(typeov(6.6), 'float', '=== 6.6')
  t.equal(typeov(.6), 'float', '=== .6')
  t.equal(typeov(0.6), 'float', '=== 0.6')
  t.equal(typeov(1e99), 'float', '=== 1e99')
  t.end()
})
test('number', t => {
  t.equal(typeov(666), 'number', '=== 666')
  t.equal(typeov(+0), 'number', '=== +0')
  t.equal(typeov(-0), 'number', '=== -0')
  t.equal(typeov(0), 'number', '=== 0')
  t.equal(typeov(1e6), 'number', '=== 1e6')
  t.end()
})
test('string', t => {
  t.equal(typeov('hello world'), 'string', '=== hello world')
  t.end()
})
test('boolean', t => {
  t.equal(typeov(true), 'boolean', '=== true')
  t.equal(typeov(false), 'boolean', '=== false')
  t.equal(typeov(Boolean()), 'boolean', '=== Boolean()')
  t.end()
})
test('symbol', t => {
  t.equal(typeov(Symbol()), 'symbol', '=== Symbol()')
  t.end()
})
test('null', t => {
  t.equal(typeov(null), 'null', null, '=== null')
  t.end()
})
test('infinity', t => {
  t.equal(typeov(Infinity), 'infinity', '=== Infinity')
  t.equal(typeov(-Infinity), 'infinity', '=== -Infinity')
  t.equal(typeov(+Infinity), 'infinity', '=== +Infinity')
  t.end()
})
test('undefined', t => {
  t.equal(typeov(undefined), 'undefined', '=== undefined')
  t.end()
})
test('function', t => {
  t.equal(typeov(function(){}), 'function', '=== function(){}')
  t.end()
})
test('object', t => {
  t.equal(typeov({}), 'object', '=== {}')
  t.equal(typeov(Object.create(null)), 'object', '=== Object.create(null)')
  t.equal(typeov(new function(){}), 'object', '=== new function(){}')
  t.end()
})
test('array', t => {
  t.equal(typeov([]), 'array', '=== []')
  t.equal(typeov(Array()), 'array', '=== Array()')
  t.end()
})
test('date', t => {
  t.equal(typeov(new Date), 'date', '=== new Date')
  t.end()
})
test('json', t => {
  t.equal(typeov('[{"A": "B"}]'), 'json', '!== [{"A": "B"}]')
  t.notEqual(typeov('[{a: "B"}]'), 'json', '!== [{a: "B"}]')
  t.equal(typeov('{"A":"B"}'), 'json', '=== {"A":"B"}')
  t.notEqual(typeov('{a:"B"}'), 'json', '!== {a:"B"}')
  t.end()
})
test('promise', t => {
  t.equal(typeov(Promise.resolve(true)), 'promise', '=== Promise.resolve(true)')
  t.end()
})
test('set', t => {
  t.equal(typeov(new Set), 'set', '=== new Set')
  t.end()
})
test('weakset', t => {
  t.equal(typeov(new WeakSet), 'weakset', '=== new WeakSet')
  t.end()
})
test('map', t => {
  t.equal(typeov(new Map), 'map', '=== new Map')
  t.end()
})
test('weakmap', t => {
  t.equal(typeov(new WeakMap), 'weakmap', '=== new WeakMap')
  t.end()
})
test('regexp', t => {
  t.equal(typeov(/regex/), 'regexp', '=== /regex/')
  t.equal(typeov(new RegExp), 'regexp', '=== new RegExp')
  t.equal(typeov(RegExp()), 'regexp', '=== RegExp()')
  t.end()
})
test('buffer', t => {
  t.equal(typeov(new Buffer(0)), 'buffer', '=== new Buffer')
  t.end()
})
