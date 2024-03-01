// 7 types of Primitive types in TS
//number 	bigint		string		boolean 	null		undefined	symbol

let var1 = "var1 will always be of string type now.";
let var2 = 10; //var2 will always be of number type now.
let var3 = true; //var3 will always be of boolean type now.
let var4 = 905n; // var4 : type bigint. Type bigint always ends in n.
let var5 = null;
let var6 = undefined;

// Symbols are immutable, and unique.
let sym1 = Symbol();
let sym2 = Symbol("key"); // optional string key
let sym3 = Symbol("key");

// Symbols are immutable, and unique.
sym2 === sym3; // false, symbols are unique
