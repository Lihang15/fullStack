"use strict";
exports.__esModule = true;
exports.jsx = exports.B = exports.foo = void 0;
exports.foo = 123;
var A = /** @class */ (function () {
    function A() {
    }
    A.num = 111;
    return A;
}());
exports["default"] = A;
var B = /** @class */ (function () {
    function B() {
    }
    B.f = function () {
        console.log(B.num);
    };
    B.num = 111;
    return B;
}());
exports.B = B;
exports.jsx = 'jsxjsx';
