# Install TS Globally:
    `tsc --init`

# After Running TS code:
    ## When we run TS code it compiler to JS code, even when there is error but gives the warning in the console.
# Additional Thing:
    ## If we don't want to compiler the code manually again and again then we can use this:
        `tsc --watch`
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
    `enum userRoles{
        ADMIN = 'admin',
        GUEST = 'guest',
    }`

# Any:
    ## When we just declare the variable without any value: `let a`, a doesn't have any type of value it can be any like: integer or string.

#