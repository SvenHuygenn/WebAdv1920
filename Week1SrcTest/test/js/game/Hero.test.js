import Hero from '../../../src/js/game/Hero'

import Point from '../../../src/js/game/Point'

let point;
let hero;

beforeEach(() => {
    point = new Point(2,2);
    hero = new Hero(point);
})

describe('Movement',
    () => {
        it ('Should change position when moveLeft is called.',
        () => {
            let originalPos = hero.X;
            let newPos = hero.moveLeft();
            expect(originalPos == newPos).toBeFalsy();
        })
        it ('Should change position when moveRight is called',
            () => {
                let originalPos = hero.X;
                let newPos = hero.moveRight();
                expect(originalPos == newPos).toBeFalsy();
            })
        it ('X value should be higher when moveRight is called',
            () => {
            let originalPos = hero.X;
            hero.moveRight();
            let newPos = hero.X;
            expect(originalPos).toBeLessThan(newPos);
            })
        it ('X value should be lower when moveLeft is called',
            () => {
                let originalPos = hero.X;
                hero.moveLeft();
                let newPos = hero.X;
                expect(originalPos).toBeGreaterThan(newPos);
            })
    })