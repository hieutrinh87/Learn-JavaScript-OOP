function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('Draw');
    }
}

let c = new Circle(10);

for (const key in c) {
    if (typeof(c[key] !== 'function'))
     {
        console.log(key, c[key]);
     }   
}     

const key = Object.keys(c);
console.log(key);

if ('radius' in c)
console.log(true);