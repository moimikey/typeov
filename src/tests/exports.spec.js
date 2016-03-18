/* eslint no-console:0 */
import { typeov } from '../..'
import * as tap from 'tap'
const test = tap.test
test('exports', t => {
  t.equal(typeof typeov, 'function')
  t.end()
})
