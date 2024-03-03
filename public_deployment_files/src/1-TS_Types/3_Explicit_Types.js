"use strict";
// Explicit Types: Primitives
let character1;
character1 = "John";
let age1 = 10;
let isloggedIn = true;
console.log(character1, " aged: ", age1, " , ", " is logged in: ", isloggedIn);
// Arrays : Explicit Types
let array1 = [];
// Union Types: When a variable can be of different types
let age2 = 10;
let array2 = [];
// Objects
// If ninjaOne is of type object
// It can be object, array, function, String Object, Number Object, Boolean Object
let ninjaOne;
ninjaOne = new String("I am a String Object");
ninjaOne = new Number("I am a Number Object");
ninjaOne = new Boolean("I am a Boolean Object");
ninjaOne = { name: "Peter", age: 15 };
ninjaOne = ["I am a function and of object type too."];
ninjaOne = () => console.log("I am a function and of object type too.");
//Define specific type of object
let ninja2;
let ninja3;
let ninja4;
let ninja5;
let ninja6;
let ninja7;
// ninja2 can only be of type {} and can assume any properties
//as Properties are not explicitly defined
ninja2 = { color: "Red", life: 13 };
ninja2 = { xyz: 10, abc: true, mmn: "Hahaha" };
// ninja3 must be an object with specific properties
ninja3 = { name: "John", age: 13, country: "India" };
