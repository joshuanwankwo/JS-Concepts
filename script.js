
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

    fullDetails = function(){
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

console.log(iphone11);
