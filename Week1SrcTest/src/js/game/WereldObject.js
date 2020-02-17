import Point from "./Point";


export default class WereldObject{
   constructor(point){
       if(!point instanceof Point){
           error('Argument is not a point!');
       }
       this.location = point;
   }

   get X(){
       return this.location.x;
   }
   get Y() {
       return this.location.y;
   }

   set X(newX) {
      this._location = newX;
   }
   set Y(newY){
       this._location = newY;
   }
}

