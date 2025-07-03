"use strict";
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
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        User.userCount++;
    }
    static getUserCount() {
        return User.userCount;
    }
}
User.userCount = 0;
let u1 = new User("Aman", 20);
let u2 = new User("Rahul", 22);
console.log(User.getUserCount()); // 2
let u3 = new User("Priya", 25);
console.log(User.getUserCount()); // 3
