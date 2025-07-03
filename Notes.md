# Install TS Globally:
    ```bash
    tsc --init
    ```

# After Running TS code:
## When we run TS code it compiler to JS code, even when there is error but gives the warning in the console.
# Additional Thing:
## If we don't want to compiler the code manually again and again then we can use this:
        ```bash
        tsc --watch
        ```
## this will automatically compile the code into JS
# Data Types in TS:
## 1. Primitive and 2. Reference
# Primitive:
## Number: 1, 2, 3, 4, 5
## String: "Aman"
## Boolean: true or false
# Important Tip:
## If we have these brackets (), {}, [], then all these belongs to reference data types.
# Arrays:
## Basic syntax: `let arr = [1, 2, 3, 4, 5]`
## Creating specific data type array, syntax:
    ```bash
    let arr: number[] = [1, 2, 3, 4, 5]
    ```

# Tuples:
## Syntax: `let myTuple: [number, string] = [12, "Aman"]`, we can't change the order like: ["Aman", 12]

# Difference between Arrays & Tuples:
## In array we can change the element but in tuple we can't change the element.
## In array we have same type of element but in tuple we have different types of elements

# Enumerations:
## It is key value pair, in this we proper of a key using =, and we can access the property using '.', syntax:
    ```bash
    enum userRoles{
        ADMIN = 'admin',
        GUEST = 'guest',
    }
    ```

# Any:
## When we just declare the variable without any value: `let a`, a doesn't have any type of value it can be any like: integer or string. You can say that TS don't work with 'any'.

# Unknown:
## TS work, but we have to define the type of the variable later.
    ```bash
    let a: unknown;
    a = 12;
    a = "Aman";
    if(typeof a == "string"){
        a.toUpperCase();
    }
    ```

# Void:
## When function is not returning anything using 'return' keyword then it is void function.
    ```bash
    function hello(): void{
        console.log("Hello Aman");
    }
    ```
### This is a void function, because it is not returning anything.

    ```bash
    function vote(): boolean{
        return true;
    }
    ```
### This is NOT a void function, because it is returning something.

# Type Inference:
## Inference means TS will automatically understand the type of the variable (2nd example).
    ```bash
    let a: number;  // We have clearly defined the type of the variable
    let a = 12;     // TS will automatically understand that this is a number type variable
    ```

# Type Annotation:
## Defining the type of the variable in the starting.
    ```bash
    let a: number;
    ```

# Interface:
## Interface is used to defining the structure of our object.
    ```bash
    function name(user: 'string'){
        console.log(user);
    }
    ```
## but if we do this:
    ```bash
    interface User{
        name: string,
        email: string,
        password: string,
        gender?: string,    // optional
    }
    function getUserInfo(obj: User){    // here we have defined the type of obj as User

    }
    getUserInfo({name: "Aman", email: "aman@gmail.com", password: "asdfghjkl"})     // we can enter gender here..
    ```

## Extending Interface:
    ```bash
    interface User{
        name: string,
        email: string,
        password: string,
    }
    interface Admin extends User{   // Admin will have all properties of the User interface
        isAdmin: boolean
    }
    function profile(obj: Admin){
        obj.isAdmin = true;
    }
    ```

# Type Aliases:
## Type aliases means creating our own type.
    ```bash
    let a: number;
    ```

## But we want our own type:
    ```bash
    type sankhya = number;
    let a: sankhya;     // our own type
    ```

## Another example:
    ```bash
    type value = string | number | null;
    let b: value    // our own type
    ```

## Another example:
    ```bash
    type arg = string | number;
    function abcd(obj: arg){

    }
    abcd("Aman")
    ```

# Union:
## When we have values from both like it can be either string or number, represented by |.
    ```bash
    let a: string | number  // | -> This means union
    a = "Hello"; ✔
    a = 24; ✔
    a = true; ❌
    ```

# Intersection:
## When we have to satisfy the both condition, represented by &.

# Classes & Objects
## Classes are blueprint for creating objects.
## creating class
    ```bash
    class laptop{
        model = 'M1 Air';
        price = 58000;
    }
    ```
## creating objects
    ```bash
    let l1 = new laptop();
    let l2 = new laptop();
    ```

# Constructor
## Constructor is called when the object is created.
    ```bash
    class Laptop{
        constructor(public name: string, public price: number, public year: number = 2025) {
            this.name = name;
            this.price = price;
        }
    }
    let l1 = new Laptop("M1 Air", 58000);
    let l2 = new Laptop("M1 Pro", 120000);
    l1.year = 2020;
    console.log(l1);
    ```

# Access Modifiers:
## 1. Private: Within the class only.
## 2. Protected: In the derived class only.
## 3. Public: Accessible everywhere.

# ReadOnly Property:
## Sometimes we want that, this will never change in the future then we use readonly property.
    ```bash
    class User{
        constructor(public readonly username: string){

        }
    }
    ```
## Using readonly, now username will never get changed..

# Optional Properties in Constructor:
## Sometimes we don't want to enter any value in constructor but it is required to enter then we use ?.
    ```bash
    class User{
        constructor(public name: string, public age?: number, publics gender: string){}
        display(): void {
            console.log(`Name: ${this.name}, Age: ${this.age !== undefined ? this.age : "Not provided"}`);
        }
    }
    let u1 = new user("Aman", 20);
    let u2 = new user("Rahul");
    ```

# Getters and Setters:
    ```bash
    class User{
        constructor(public _name: string, public _age: number){}

        get name(): string {
            return this._name;
        }

        set name(value: string){
            this._name = value;
        }
    }
    let u1 = new User("Aman", 20);
    console.log(u1.name);
    u1.name = "Rahul";
    console.log(u1);
    ```

# Static:
## When we create any variable/methods using statics keyword then we don't need to create the objects we can directory call the using the class
    ```bash
    class use{
        static userCount: number = 0;

        constructor(public name: string, public age: number) {
            User.userCount++;
        }

        static getUserCount(): number {
            return User.userCount;
        }
    }
    let u1 = new User("Aman", 20);
    let u2 = new User("Rahul", 22);
    console.log(User.getUserCount()); // 2
    let u3 = new User("Priya", 25);
    console.log(User.getUserCount()); // 3
    ```

