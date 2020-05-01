
// Prototype

function user(name, age, password, email, phone, hobbies){
    this.name = name;
    this.age = age;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.hobbies = hobbies

    this.fullDetails = function(){
        return "Hello! my name is " + name + " and am " + age + ' years old'
    }
}

let Joshua = new user('Joshua', 
    18, '*********', 
    'j.nwankwo@apple.com', 
    08025504729, 
    ['Coding', 'Raping', 'cooking', 'Traveling']
    )

console.log(Joshua.fullDetails());


function newUser(name, age, password, email, phone, hobbies){
    this.name = name;
    this.age = age;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.hobbies = hobbies

    newUser.prototype.getFullDetails = function(){
        return "Hello! my name is " + name + " and am " + age + ' years old'
    }
}

let newJoshua = new newUser('Joshua', 
    18, '*********', 
    'j.nwankwo@apple.com', 
    08025504729, 
    ['Coding', 'Raping', 'cooking', 'Traveling']
    )

console.log(newJoshua.getFullDetails());


// Classes

class phone{
    constructor(brand, model, Os, color, memory){
        this.brand = brand;
        this.model = model;
        this.Os = Os;
        this.color = color;
        this.memory = memory
    }

    fullDetails(){
        return 'The color of my ' + brand + '\'s ' + model + 'is ' + color; 
    }
}

let iPhone11 = new phone(
    'Apple',
    'Iphone 11 Pro Max ',
    'iOS',
    'Tan-green',
    500

)

console.log(iPhone11);


// IIEF

(function(){
    console.log("Self invoked");
})();

(function(){
    var name = "Afam";
    var name = "MyName";

    console.log(name);
    
}())

// console.log(name);


// Scope

var global = "This varriable is globally SCOPED, it can be used anywhere in this file"

function checkForGlobal(){
    console.log(global);
    
}

checkForGlobal();

console.log(global);

function checkForLocal() {
    var local = "This is locally SCOPED and can't be used anywhere outside this function"
    console.log(local);
    
}
checkForLocal();

// console.log(local);


// Closure


let anything = "anything "

function mainGlobal(){
    var something = "something ";

    function innerOne(){
        var anotherthing = "anotherthing";

        console.log(anything + something + anotherthing);
        
        
    }
    innerOne()
    
}

mainGlobal();


// Module

var myModule = (function() {
    'use strict';

    var _privateProperty = 'Hello World';
    
    function _privateMetod(){
        console.log(_privateProperty);
    }

    return{
        publicMethod: function(){
            _privateMetod();
        }
    };
}());

myModule.publicMethod()

console.log(module._privateProperty);


// module._privateMetod();

// export default myModule;

// Hoisting

console.log(hoist);
var hoist = "Has been hoisted"


// Currying

var multiply = function(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a * b * c * d * e
                }
            }
        }
    }
}

console.log(multiply(3) (4) (9) (2) (7));


// Memoization


// Apply/Call and Bind method

var obj = {
    num: 2
}

var add = function(um1, um2, um3){
    return um1 + um2 + um3
}

var arr = [4, 6, 9]

let final = add.call(obj, 4, 6, 9)

console.log(final);

let newFinal = add.apply(obj, arr)

console.log(newFinal);

let finalFinal = add.bind(obj)

console.log(finalFinal(4, 6, 9));


// Polymorphism

