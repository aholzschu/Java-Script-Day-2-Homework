//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


// Answer
function menu_items(person3){
for(let key in person3)
console.log(key, person3[key])
}
menu_items(person3)




//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


class health_insurance {

    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    printInfo = () => {
        return `My name is ${this.name}. I am getting health insurance because I am ${this.age}.`
    }
}


const health_insurance1 = new health_insurance('Carl', '25')
const health_insurance2 = new health_insurance('Miranda', '28')

console.log(health_insurance1.printInfo())
console.log(health_insurance2.printInfo())



// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person extends health_insurance {
    constructor(name, age, city){
        super(name, age)
        this.city = city
    }

    printInfo = () => {
        return `My name is ${this.name} I live in ${this.city} and I will not be getting health insurance because I am ${this.age}.`
    }
    addAge = () =>
    this.age++
}


const person1 = new Person('Tony', '21', 'Grand Rapids')
console.log(person1.printInfo())
console.log(person1.addAge())
console.log(person1.addAge())
console.log(person1.addAge())
console.log(person1.printInfo())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const word_length = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (string.length > 10) {
                resolve('BIG WORD')
            } else {
                reject('Small Number')
            }
        }, 2000)
    })
}

const word_checker = async (strr) => {
    const response = await word_length(strr)
    console.log(response)
}

word_checker('thilejklhklhjlh')





//=======Codewars Problem #1=========//


// How many lightsabers do you own?


// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):



function howManyLightsabersDoYouOwn(name="") {
    if (name == "Zach"){
      return 18
    }
    else{
      return 0
    }
  }


//=======Codewars Problem #2=========//


// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(a, b){
    if (a % 2 !== 0 && b % 2 == 0){
      return true
    } 
    else if (a % 2 == 0 && b % 2 !== 0){
      return true
    } 
    else{
      return false
    } 
  }