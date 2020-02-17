import WereldObject from './WereldObject';
export default class Hero extends WereldObject{
    constructor(location){
        super(location);
    }

    moveDown(){
        this.location.y -= 1;
    }

    moveUp(){
        this.location.y +=1;
    }

    moveRight(){
        this.location.x += 1;
    }

    moveLeft(){
        this.location.x -= 1;
    }
}