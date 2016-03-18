/* eslint no-console:0 */
import * as tap from 'tap'
const test = tap.test
test('requires', t => {
  const typeov = require('../..').typeov
  t.equal(typeof typeov, 'function')
  t.end()
})
