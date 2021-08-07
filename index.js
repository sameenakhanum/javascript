//  Data types
// 1. Primitive data types
// 2. Refferential data type


// 1.Primitive data types
//  string
//  Number
//  Boolean
//  Undefine
//  Null
//  Symbol

// var name = 'sameena';
// var age = 22;
// var areyougirl = true;
// var n = null;
// var firstName =


// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(areyougirl));
// console.log(typeof(n));
// console.log(typeof(firstName));





// Arrays - collection of data items under a string name 

// var colors = ['black','perple','pink','blue']
// console.log(colors);

// console.log(colors[3]);
// console.log(colors.length);


// var colors = ['black','perple','pink','blue']

// push - add the element at last
// colors.push('white');

// pop - remove the element at last
// colors.pop()

// unshift - add the element at fist
// colors.unshift('yellow');

// shift - remove the element at first
// colors.shift();

// splice
// colors.splice(2,0,'brown')

// console.log(colors);


// concat

// var a = [black, white]
// var b = [pink,perple]
// var c = a.concat(b);
// var c =b.concat(a);
// console.log(c);

// iterating over an array

// var animals = ['cat', 'dog','fox','duck','sheep','deer','lion','fox','hen','camel']
// for(var i=0; i<= animals.length -1; i++) {
//     console.log(animals[i]);
// }



// object : collection of key value pair

// var student = {
//     name: 'sameena',
//     age: 22,
//     address: 'banglore, karnataka'
// };
// console.log(student);

// accessing the object using dot notation

// console.log(student.name);
// console.log(student.age);
// console.log(student.address);

// accessing the object using bracket notation

// console.log(student['name']);
// console.log(student['age']);
// console.log(student['address']);

// var student ={
//     name: 'sameena khanum',
//     age: 22,
//     address:{
//         city: 'Banglore',
//         area: 'Bapujinagar',
//         pinCode: 560026
//     }
// }
// console.log(student);
// console.log(student.name);
// console.log(student.address.city);
// console.log(student['address']['area']);


// var student ={
//         name: 'sameena khanum',
//         age: 22,
//         address:{
//             city: 'Banglore',
//             area: 'Bapujinagar',
//             pinCode: 560026
//         }
//     }

//     var student2 = student;
//     console.log(student);
//     console.log(student2);

// function inside the object called method

// var video={
//     name: 'access 101 js tutorial',
//     play: function(){
//         console.log('video played');
//     }
// }
// console.log(video.name);
// console.log(video.play());

