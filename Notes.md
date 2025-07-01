# Install TS Globally:
    ```bash
    tsc --init

# After Running TS code:
    ## When we run TS code it compiler to JS code, even when there is error but gives the warning in the console.
# Additional Thing:
    ## If we don't want to compiler the code manually again and again then we can use this:
        ```bash
        tsc --watch
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
    ## Creating specific data type array, syntax: `let arr: number[] = [1, 2, 3, 4, 5]`, this will allow only number in the array

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

# Void:
    ## When function is not returning anything using 'return' keyword then it is void function.
    ```bash
    function hello(): void{
        console.log("Hello Aman");
    }
    ### This is a void function, because it is not returning anything.

    ```bash
    function vote(): boolean{
        return true;
    }
    ### This is NOT a void function, because it is returning something.

# Type Inference:
    ## Inference means TS will automatically understand the type of the variable (2nd example).
    ```bash
    let a: number;  // We have clearly defined the type of the variable
    let a = 12;     // TS will automatically understand that this is a number type variable

# Type Annotation:
    ## Defining the type of the variable in the starting.
    ```bash
    let a: number;

# Interface:
    ## Interface is used to defining the structure of our object.
    ```bash
    function name(user: 'string'){
        console.log(user);
    }
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

# Type Aliases:
    ## Type aliases means creating our own type.
    ```bash
    let a: number;

    ## But we want our own type:
    ```bash
    type sankhya = number;
    let a: sankhya;     // our own type

    ## Another example:
    ```bash
    type value = string | number | null;
    let b: value    // our own type

    ## Another example:
    ```bash
    type arg = string | number;
    function abcd(obj: arg){

    }
    abcd("Aman")


# Union:
    ## When we have values from both like it can be either string or number.
    ```bash
    let a: string | number  // | -> This means union
    a = "Hello"; ✔
    a = 24; ✔
    a = true; ❌

# Intersection:
