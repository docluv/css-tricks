class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }

    waitForIt() {

        return new Promise(function (resolve, reject) {

            resolve("foo bar");

        });

    }

    height = 0;
    width = 0;

}


class Square extends Polygon {

    constructor(side) {

        super(side, side);

    }

    foo() {

        return "bar";

    }

}


class myBase {

    funcA() {

        return "A";

    }

    funcB() {
        return "B";
    }

}


class myExtendedBase extends myBase {

    funcC() {

        return "C";
    }
}