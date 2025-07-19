// classes & objects in JS

// class Laptop{
//     name = "M1 Air";
//     price = 58000;
// }

// let l1 = new Laptop();
// let l2 = new Laptop();
// console.log(l1);
// console.log(l2);

// constructor example
// class Laptop{
//     constructor(public name: string, public price: number, public year: number = 2025) {
//         this.name = name;
//         this.price = price;
//     }
// }
// let l1 = new Laptop("M1 Air", 58000);
// let l2 = new Laptop("M1 Pro", 120000);
// l1.year = 2020;
// console.log(l1);
// console.log(l2);


// Access Modifiers Examples
// class Bottle{
//     protected bottlePrice: number = 200;

//     constructor(private brand: string, public material: string){}

//     getBrand(): string {
//         return this.brand;
//     }

//     getPrice(): number {
//         return this.bottlePrice;
//     }
// }

// class MiltonBottle extends Bottle{
//     constructor(brand: string, material: string){
//         super(brand, material);
//     }

//     showInfo(){
//         console.log("Material: " + this.material);
//         console.log("Brand: " + this.getBrand());
//         console.log("Price: " + this.getPrice());
//     }
// }

// let mb1 = new MiltonBottle("Milton", "Plastic");
// mb1.getBrand(); // Accessible
// mb1.getPrice(); // Accessible
// mb1.bottlePrice; // Not accessible, as it's protected


// Readonly Example
// class user{
//     readonly name: string;
//     private _age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this._age = age;
//     }

//     get age(): number {
//         return this._age;
//     }

//     set age(value: number) {
//         if (value < 0) {
//             throw new Error("Age cannot be negative");
//         }
//         this._age = value;
//     }
//     display(): void {
//         console.log(`Name: ${this.name}, Age: ${this._age}`);
//     }
// }

// let u1 = new user("Aman", 20);
// u1.age = 22; // Valid
// // u1.name = "Rahul"; // Error: Cannot assign to 'name' because it is a read-only property
// u1.display();


// Optional Properties Example
// class user{
//     constructor(public name: string, public age?: number) {}

//     display(): void {
//         console.log(`Name: ${this.name}, Age: ${this.age !== undefined ? this.age : "Not provided"}`);
//     }
// }

// let u1 = new user("Aman", 20);
// let u2 = new user("Rahul");
// u1.display(); // Name: Aman, Age: 20
// u2.display(); // Name: Rahul, Age: Not provided


// Getters and Setters Example
// class User{
//     constructor(public _name: string, public _age: number){}

//     get name(): string {
//         return this._name;
//     }

//     set name(value: string) {
//         if (value.length < 3) {
//             throw new Error("Name must be at least 3 characters long");
//         }
//         this._name = value;
//     }
// }

// let u1 = new User("Aman", 20);
// console.log(u1.name); // Aman
// u1.name = "Rahul"; // Valid
// console.log(u1); // Name changed to Rahul

// Static keyword Example
// class User{
//     static userCount: number = 0;

//     constructor(public name: string, public age: number) {
//         User.userCount++;
//     }

//     static getUserCount(): number {
//         return User.userCount;
//     }
// }

// let u1 = new User("Aman", 20);
// let u2 = new User("Rahul", 22);
// console.log(User.getUserCount()); // 2
// let u3 = new User("Priya", 25);
// console.log(User.getUserCount()); // 3


// Functions

function add(a: number, b: number): number{
    return a + b;
}
// console.log(add(5, 10));

function fun(name: string, age: number, cbfun: (arg: string) => void){
    cbfun("Callback function");
    console.log(`Name: ${name}, Age: ${age}`);
}
// fun("Aman", 20, (arg: string) => {
//     console.log('Arg: ' + arg);
// })


// optional parameter
function abcd(name: string, age: number, gender?: string){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Gender ${gender !== undefined ? gender: "Not provided"}`);
}
// abcd("Aman", 20); // error 
// abcd("Aman", 20, "Male")


// Default parameter
function info(name: string, age: number, work: string = "Web Developer"){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Work: ${work}`);
}
// info("Aman", 20); // Work will be "Web Developer"

// Rest parameter
// we have have so many parameters like abcd(10, 20, 30, 40, 50, 60, 70, 80, 90, 100), so for this we have to take that much arguments.
function sum(...args: number[]){
    console.log(args);
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    console.log(`Total: ${total}`);
}
// sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

// Difference between rest and spread operator
// Rest operator is used to collect all the arguments into an array, while spread operator is used to spread the elements of an array into individual elements.
function display(...args: string[]){
    console.log(args);
}
let arr = ["Aman", "Rahul", "Priya"];
// display(...arr); // Spread operator

function collect(...args: string[]){
    console.log(args);
}
// collect("Aman", "Rahul", "Priya"); // Rest operator

// Rest: "A", "B", "C" → ["A", "B", "C"]
// Spread: ["A", "B", "C"] → "A", "B", "C"

// Generic Functions Example
function genericFunction<T>(arg: T){
    console.log(arg);
}
// genericFunction<string>("Hello, Generics!");
// genericFunction<number>(123);

// Typescript automatically infers the type based on the argument passed
// genericFunction("Hello Aman");
// genericFunction(121);