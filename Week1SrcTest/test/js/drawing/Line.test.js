import Point from '../../../src/js/drawing/Point';
import Line from '../../../src/js/drawing/Line';

let point1;
let point2;
let line;
beforeEach(() => {
    point1 = new Point(1,1);
    point2 = new Point(5,5);
    line = new Line(point1,point2);
})

describe('Constructor',
    () => {
        it ('should generate a Line-object for valid args',
            () => {

                expect(line).toBeInstanceOf(Line)
            }
            )
        it ('Should throw error when 1st parameter is not a point',
            () => {
                expect(() => {
                    new Line('a', point2);
                }).toThrow(Error)
            })
        it ('Should throw error when 2nd parameter is not a point',
            () => {
                expect(() => {
                    new Line(point1,'b')
                }).toThrow(Error)
            })
    }
);

describe('Getters',
    ()=> {
       it ('Get should return the correct values',
            () => {
                let point1Return = line.point1;
                let point2Return = line.point2;
                expect(point1Return).toBe(point1);
                expect(point2Return).toBe(point2);
            })
    }
);

describe('toString',
    () => {
        it ('Should return correct string',
            () => {
            let returnString = `('Point 1: '(1,1),' point 2: '(5,5))`;
            expect(returnString).toBe(line.toString());
            })
    }
);


