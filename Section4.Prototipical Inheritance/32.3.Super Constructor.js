function parent(color){
this.color = color;
}
parent.prototype.duplicate = function(){
    console.log('duplicate');
}

function child(radius, color){
    parent.call(this, color);
    this.radius = radius;
}
child.prototype = Object.create(parent.prototype);
child.prototype.constructor = child;

child.prototype.draw = function() {
    console.log('draw');
}
let s = new parent();
let c = new child(5, 'red');
console.log(c);





