// Explicit Types: Primitives
let character1: string;
character1 = "John";
let age1: number = 10;
let isloggedIn: Boolean = true;

console.log(character1, " aged: ", age1, " , ", " is logged in: ", isloggedIn);

// Arrays : Explicit Types
let array1: string[] = [];

// Union Types: When a variable can be of different types
let age2: string | number | boolean = 10;
let array2: (string | number)[] = [];

// Objects

// If ninjaOne is of type object
// It can be object, array, function, String Object, Number Object, Boolean Object
let ninjaOne: object;

ninjaOne = new String("I am a String Object");
ninjaOne = new Number("I am a Number Object");
ninjaOne = new Boolean("I am a Boolean Object");

ninjaOne = { name: "Peter", age: 15 };
ninjaOne = ["I am a function and of object type too."];
ninjaOne = () => console.log("I am a function and of object type too.");

//Define specific type of object
let ninja2: {};
let ninja3: { name: string; age: number; country: string };
let ninja4: [];
let ninja5: String;
let ninja6: Number;
let ninja7: Boolean;

// ninja2 can only be of type {} and can assume any properties
//as Properties are not explicitly defined
ninja2 = { color: "Red", life: 13 };
ninja2 = { xyz: 10, abc: true, mmn: "Hahaha" };

// ninja3 must be an object with specific properties
ninja3 = { name: "John", age: 13, country: "India" };
