import Point from './Point';

export default class Line {
    constructor(point1,point2){
        if (!(point1 instanceof Point) || !(point2 instanceof Point)) {
            throw new Error("Parameter is not a point!");
        }
        this.point1 = point1;
        this.point2 = point2;
    }

    get getPoint1(){
        return this.point1;
    }
    get getPoint2(){
        return this.point2;
    }

    toString() {
        return `('Point 1: '${this.point1},' point 2: '${this.point2})`;
    }
}