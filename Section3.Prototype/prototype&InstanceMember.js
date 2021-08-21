function Circle(radius){
    this.radius = radius;
    this.move = function(){
        this.draw();
        console.log('Move');
    }
}

Circle.prototype.draw = function(){
    console.log('draw');
}

Circle.prototype.toString = function(){
    return 'Circle with radius: ' + this.radius;
}

const c1 = new Circle(1);
const c2 = new Circle(2);
console.log(c2.toString());
console.log(c2.toString());
console.log(c1.move());

let a = 5;