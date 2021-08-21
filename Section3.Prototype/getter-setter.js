// function Circle(radius){
//     this.radius = radius;
//     let defaultLocation = {x:0, y:0};

//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     }

//     this.draw = function(){
//         computeOptimumLocation(0.1);
//         console.log('Draw');
//     }

// Object.defineProperty(this,'defaultLocation',
//         {
//             get: function(){
//             return defaultLocation;
//             },
//             set: function(value)
//             {
//                 defaultLocation = value;
//             }
//         }
//     )
// }

// const circle = new Circle(10);
// console.log(circle.defaultLocation);

// tao read only properties

//Thuc hanh geter, seter

// function Diem(_x = 0, _y = 0){
//     let x = _x;
//     let y = _y;
//     this.Show = function(){
//         console.log(`x = ${x} y = ${y}`);
//     }
//     Object.defineProperty(this, 'x',
//     {
//         get: function(){
//             return x;
//         },
//         set: function(value){
//             x = value;
//         }
//     })
//     Object.defineProperty(this,'y',
//     {
//         get: function(){
//         return y;
//         },
//         set: function(value)
//         {
//             y = value;
//         }
//     }
// )
// }

// const d = new Diem(1,1);
// d.y = 2;
// console.log(d.y);
// d.Show();

// function Person(Name, Age, Tall){
//     this.Name = Name;
//     this.Age = Age;
//     this.Tall = Tall;
//     this.Info = function(){
//         console.log(`Name: ${Name}, Age: ${Age}, ${Tall}`);
//     }
//     let Married = 'Single';
//     Object.defineProperty(this, 'Married', {
//         set: function(value){
//             Married = value;
//         },
//         get: function(){
//             return Married;
//         } 
//     })
// }
// let p = new Person('Trinh Van Hieu', 34, 168);
// p.Info();
// console.log(p.Married);