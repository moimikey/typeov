/* eslint no-console:0 */
import * as tap from 'tap'
import { typeov } from '..'
const test = tap.test
test('float', t => {
  t.equal(typeov(Math.PI), 'float')
  t.end()
})
test('number', t => {
  t.equal(typeov(666), 'number')
  t.equal(typeov(+0), 'number')
  t.equal(typeov(-0), 'number')
  t.end()
})
test('string', t => {
  t.equal(typeov('hello world'), 'string')
  t.end()
})
test('boolean', t => {
  t.equal(typeov(true), 'boolean')
  t.end()
})
test('symbol', t => {
  t.equal(typeov(Symbol()), 'symbol')
  t.end()
})
test('null', t => {
  t.equal(typeov(null), 'null')
  t.end()
})
test('infinity', t => {
  t.equal(typeov(Infinity), 'infinity')
  t.equal(typeov(-Infinity), 'infinity')
  t.equal(typeov(+Infinity), 'infinity')
  t.end()
})
test('undefined', t => {
  t.equal(typeov(undefined), 'undefined')
  t.end()
})
test('function', t => {
  t.equal(typeov(function(){}), 'function')
  t.end()
})
test('object', t => {
  t.equal(typeov({}), 'object')
  t.end()
})
test('array', t => {
  t.equal(typeov([]), 'array')
  t.end()
})
