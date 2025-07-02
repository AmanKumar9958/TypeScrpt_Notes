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
class Laptop {
    constructor(name, price, year = 2025) {
        this.name = name;
        this.price = price;
        this.year = year;
        this.name = name;
        this.price = price;
    }
}
let l1 = new Laptop("M1 Air", 58000);
let l2 = new Laptop("M1 Pro", 120000);
l1.year = 2020;
console.log(l1);
console.log(l2);
