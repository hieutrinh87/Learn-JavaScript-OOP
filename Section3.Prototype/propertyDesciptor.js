// let person = {name: 'Mosh', age: 20};
// Object.defineProperty(person, 'name',{
//     writable: false, // can not change value of name
//     enumerable: false,// can not take from Object.key and for in loop
//     configurable: false // can not delete property.
// });

// Object.defineProperty(person, 'age',{
//     writable: false, // can not change value of name
//     enumerable: true, // can take from object.keys
//     configurable: false // can not delete property.
// });

// person.name = 'John';

// delete person.name // can not delete because configurable: false

// console.log(person);
// // console.log(Object.keys(person));
// for (let key in person) {
//     console.log(key);
// }



// let person = {name: 'Mosh'};
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descriptor);
