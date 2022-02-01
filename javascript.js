var x = 2;
var y = 7;
var z = x + y;

// create an object
// const is best use for object and array
const person = {
    firstName: "Adegoke",
    lastName: "Abdullateef",
    age: 32,
    eyeColor: "black",
    fullName: function (){
        return this.firstName + " " + this.lastName ;
    }
};
  const myName = person.fullName();

document.getElementById("demo").innerHTML= "the value of z is " + myName; 


// Event listner

function displayDate() {
    document.getElementById('demo1').innerHTML = Date();
}

// ARRAY

const car = ["Toyota", 
    "Benz", 
    "Venza",
    "BMW"
] 
// creating a new array or using new Array
const cars = [];
cars[0] = "Audi";
cars[1] = "Corolla";
cars[2]= "Camry";

// use 'LET' change the value 
let carp = car[2];

// to change the value of cars[2]
cars[2] = "Lizard"


document.getElementById("demo2").innerHTML= "the content of the array " + cars[2]; 

// assessing the full array

document.getElementById("demo3").innerHTML= "the content of the array " + car; 

// Lenght of an Array using .length

document.getElementById("demo4").innerHTML= "the content of the array " + cars.length; 

// accessing Array using car[i]


// accessing the last Array Element
let cares = cars[cars.length - 1];
document.getElementById("demo5").innerHTML= "the content of the array " + cares; 

// looping through an array using "for" loop

const fruit = [
    "Banana",
    "Mango",
    "Pawpaw",
    "Orange"
];
                            // Add new element  to an Array

                        fruit.push("Lemon")
for (let i = 0; i < fruit.length; i++){
    fruit[i]
}

document.getElementById("demo6").innerHTML= "the content of the array " + fruit;

// to make the fruit a list
//from x += y => x = x+y

let fruitList = "<ul>";
    for (let i = 0; i < fruit.length; i++){
        fruitList += "<li>" + fruit[i] +"</ul>"
    }
    fruitList += "</ul>"

    document.getElementById("demo7").innerHTML= "the content of the array " + fruitList;



