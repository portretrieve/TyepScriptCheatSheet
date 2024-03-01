class Animal {
  private age: number;
  private breed: string;

  constructor(age: number, breed: string) {
    this.age = age;
    this.breed = breed;
  }

  display(): void {
    console.log(this.age + " : " + this.breed);
  }

  public get getAge(): number {
    return this.age;
  }

  public set setAge(value: number) {
    this.age = value;
  }
}

class dog extends Animal {
  private name: string;

  constructor(age: number, breed: string, name: string) {
    super(age, breed);
    this.name = name;
  }

  display(): void {
    console.log("Hello I am: " + this.name + ", age: " + this.getAge);
  }
}
