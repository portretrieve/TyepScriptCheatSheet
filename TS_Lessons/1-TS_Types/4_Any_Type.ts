//When we define the type of any variable as any then we can change it's type to any

let anyTypeObject: any;

anyTypeObject = 10;
anyTypeObject = "Hello";
anyTypeObject = true;
anyTypeObject = Symbol("key");

anyTypeObject = new String("Any type make TS like JS");
anyTypeObject = new Number(10);
anyTypeObject = new Boolean(true);

anyTypeObject = {};
anyTypeObject = [];
anyTypeObject = () => {
  console.log("Any type can be assigned to any type.");
};

//Object with anytype of properties
let person3: { name: any; likes: any };
