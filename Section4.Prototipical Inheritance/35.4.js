function Shape(){

}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function extend(Child, parent)
{
    Child.prototype = Object.create(parent.prototype);
    Child.prototype.constructor = Child;

}
function Circle(radius){
    this.radius = radius;
}
extend(Circle, Shape);
Circle.prototype.draw = function() {
    console.log('draw');
}

function Square(size){
    this.size = size;
}

extend(Square, Shape);


let c = new Circle(5);
let s = new Shape();
let sq = new Square(10);
console.log(sq);
let a = 5; 



