"use strict";
//namespace 用于分组管理 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils1 = exports.Utils = void 0;
var Utils;
(function (Utils) {
    class IPerson1 {
        constructor() {
            this.name = '000000';
        }
    }
    Utils.IPerson1 = IPerson1;
    Utils.a = "namespace";
})(Utils = exports.Utils || (exports.Utils = {}));
var Utils1;
(function (Utils1) {
    class IPerson1 {
        constructor() {
            this.name = '111111';
        }
    }
    Utils1.IPerson1 = IPerson1;
    Utils1.a = "namespace1";
})(Utils1 = exports.Utils1 || (exports.Utils1 = {}));
//别的地方引入方式分两种  现在只有一种了 2已经废弃
//1 通过 import {Utils,Utils1} from './namespace'   Utils.a 这样
//2./// <reference path="xxxx.d.ts"/>  现在这种方式在.ts文件里已经废弃  在.d.ts里还可以用 就是合并两个文件
//# sourceMappingURL=namespace.js.map