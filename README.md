# typeov [![Build Status][travis-image]][travis-url]
[![Version][npm-version-image]][npm-version-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

## Install (~1900 bytes)

```bash
npm install --save typeov
yarn add typeov
```

## Usage

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

## Notes

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

## License
[![License][npm-license-image]][npm-license-url]

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
