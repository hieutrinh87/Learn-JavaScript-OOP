// Object.getPrototypeOf(myObj);

// myObj.__proto__ (parent of myObj)
// Constructor.prototype()


function Circle(radius){
    this.radius = radius;
    this.toString = function(){
        console.log('Radius = ' + this.radius);
    }
};

Circle.prototype

let c = new Circle(10);
console.log(Circle.prototype);
// console.log(c.toString());

// let array = [];
// console.log(array.__proto__);