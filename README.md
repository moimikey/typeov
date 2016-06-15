# typeov [![Build Status][travis-image]][travis-url]
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

# It's decently~~pretty~~ small!
```js
/* 1.2.0; 1.2KB */
"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj};exports.typeov=function typeov(input){var isArray=Array.isArray;var isNaN=Number.isNaN;var isSafeInteger=Number.isSafeInteger;var isFinite=Number.isFinite;var isPromise=function isPromise(obj){return Object.prototype.toString.call(obj)==="[object Promise]"};var isDate=function isDate(obj){return Object.prototype.toString.call(obj)==="[object Date]"};var isJSON=function isJSON(obj){try{return!!JSON.parse(obj)}catch(e){return false}};switch(typeof input==="undefined"?"undefined":_typeof(input)){case"string":if(isJSON(input))return"json";return"string";case"object":if(input===null)return"null";if(isPromise(input))return"promise";if(isDate(input))return"date";if(isArray(input))return"array";return"object";case"number":if(isNaN(input))return"nan";if(isSafeInteger(input))return"number";if(isFinite(input))return"float";return"infinity";case"undefined":return"undefined";case"function":return"function";case"boolean":return"boolean";case"symbol":return"symbol";default:return undefined}};
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

```js
const jsonString = '[{"version":"1.2.3"}]'
const isJSON = typeov(jsonString) === 'json' // true
```

### Possible return values
- array
- boolean
- buffer
- float
- function
- infinity
- json
- map
- null
- number
- object
- promise
- regexp
- set
- stream
- symbol
- undefined
- weakmap
- weakset

# notes

> Be mindful of what you're checking

```node
> typeov(Symbol)
'function'
> typeov(Symbol())
'symbol'
```

```node
> typeov(Promise)
'function'
> typeov(new Promise(() => {}))
'promise'
> typeov(Promise.resolve(true))
'promise'
```

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
