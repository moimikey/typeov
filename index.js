'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.typeov = typeov;
function typeov(input) {
  var isArray = Array.isArray;
  var isNaN = Number.isNaN;
  var isSafeInteger = Number.isSafeInteger;
  var isFinite = Number.isFinite;
  switch (typeof input === 'undefined' ? 'undefined' : _typeof(input)) {
    case 'string':
      return 'string';
    case 'object':
      if (input === null) return 'null';
      if (isArray(input)) return 'array';
      return 'object';
    case 'number':
      if (isNaN(input)) return 'nan';
      if (isSafeInteger(input)) return 'number';
      if (isFinite(input)) return 'float';
      return 'infinity';
    case 'undefined':
      return 'undefined';
    case 'function':
      return 'function';
    case 'boolean':
      return 'boolean';
    case 'symbol':
      return 'symbol';
    default:
      return 'unsure?';
  }
}