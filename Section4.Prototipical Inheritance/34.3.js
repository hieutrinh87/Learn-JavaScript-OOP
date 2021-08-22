function Shape(){

}
parent.prototype.duplicate = function(){
    console.log('duplicate');
}

function child(radius){
    this.radius = radius;
}
child.prototype = Object.create(parent.prototype);
child.prototype.constructor = child;

child.prototype.draw = function() {
    console.log('draw');
}
let c = new child(5);
let s = new parent();
let a = 5; 



