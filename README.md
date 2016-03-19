# typeov [![Build Status][travis-image]][travis-url]
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

# It's pretty small!
```js
/* 1.0.3;  735b */
"use strict";function typeov(e){var n=Array.isArray,t=Number.isNaN,r=Number.isSafeInteger,o=Number.isFinite;switch("undefined"==typeof e?"undefined":_typeof(e)){case"string":return"string";case"object":return null===e?"null":n(e)?"array":"object";case"number":return t(e)?"nan":r(e)?"number":o(e)?"float":"infinity";case"undefined":return"undefined";case"function":return"function";case"boolean":return"boolean";case"symbol":return"symbol";default:return"unsure?"}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};exports.typeov=typeov;
```

# Usage
```js
import { typeov } from 'typeov'
const a = []
if (typeov(a) === 'array') {
  // true => array
}
if (typeof(a) === 'array') {
  // false => object
}
```

```js
var typeov = require('typeov').typeov
var b = Math.PI
if (typeov(b) === 'float') {
  // true
}
```

### Possible return values
- array
- boolean
- float
- function
- infinity
- null
- number
- object
- symbol
- undefined

### TODO
- json


[npm-version-url]: https://www.npmjs.com/package/typeov
[npm-version-image]: https://img.shields.io/npm/v/typeov.svg
[npm-license-url]: https://github.com/moimikey/typeov/blob/master/LICENSE
[npm-license-image]: https://img.shields.io/npm/l/typeov.svg
[npm-downloads-url]: https://www.npmjs.com/package/typeov
[npm-downloads-image]: https://img.shields.io/npm/dm/typeov.svg
[npm-deps-url]: https://david-dm.org/moimikey/typeov
[npm-deps-image]: https://img.shields.io/david/moimikey/typeov.svg
[npm-devdeps-url]: https://david-dm.org/moimikey/typeov
[npm-devdeps-image]: https://img.shields.io/david/dev/moimikey/typeov.svg
[travis-url]: https://travis-ci.org/moimikey/typeov
[travis-image]: https://travis-ci.org/moimikey/typeov.svg?branch=master
