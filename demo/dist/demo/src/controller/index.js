"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var typing_1 = require("../../../typing");
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super.call(this) || this;
        _this.post = function (req, res, next) {
            res.send('this is / ::post!');
        };
        _this.get = function (req, res, next) {
            res.send('this is / ::get!');
        };
        _this["delete"] = function (req, res, next) {
            res.send('this is delete');
        };
        return _this;
    }
    return Index;
}(typing_1.Action));
module.exports = new Index();