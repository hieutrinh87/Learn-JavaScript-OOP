function Circle(radius){
    this.radius = radius;
    this.move = function(){
        console.log('move');
    }
}

const c1 = new Circle(1);

Circle.prototype.draw = function(){
    console.log('draw');
}



c1.draw();
// object.key 
console.log(Object.keys(c1));

for (let key in c1) {
console.log(key);
    }