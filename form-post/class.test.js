var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Polygon = (function () {
    function Polygon(height, width) {
        this.height = 0;
        this.width = 0;
        this.height = height;
        this.width = width;
    }
    Polygon.prototype.area = function () {
        return this.calcArea();
    };

    Polygon.prototype.calcArea = function () {
        return this.height * this.width;
    };

    Polygon.prototype.waitForIt = function () {
        return new Promise(function (resolve, reject) {
            resolve("foo bar");
        });
    };
    return Polygon;
})();

var Square = (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        _super.call(this, side, side);
    }
    Square.prototype.foo = function () {
        return "bar";
    };
    return Square;
})(Polygon);

var myBase = (function () {
    function myBase() {
    }
    myBase.prototype.funcA = function () {
        return "A";
    };

    myBase.prototype.funcB = function () {
        return "B";
    };
    return myBase;
})();

var myExtendedBase = (function (_super) {
    __extends(myExtendedBase, _super);
    function myExtendedBase() {
        _super.apply(this, arguments);
    }
    myExtendedBase.prototype.funcC = function () {
        return "C";
    };
    return myExtendedBase;
})(myBase);
