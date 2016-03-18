# typeov [![Build Status][travis-image]][travis-url]
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

# Usage
```js
import { typeov } from 'typeov'
if (typeov(something) === 'array') {
  ...
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
