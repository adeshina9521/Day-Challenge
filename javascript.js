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


// ARRAY METHODS tostring()

document.getElementById("demo8").innerHTML= "the content of the array " + fruit.toString();

// join()
document.getElementById("demo9").innerHTML= "the content of the array " + fruit.join("*");

// remove the last element using pop() and view the remaining element
fruit.pop() 
document.getElementById("demo10").innerHTML= "the content of the array " + fruit;

// remove the first element of the Array using shift()  to show the object that was remove
document.getElementById("demo11").innerHTML= "the content of the array " + fruit.shift();

document.getElementById("demo12").innerHTML= "the content of the array " + fruit;

// to add to the first element using unshift
fruit.unshift("Cashew")
document.getElementById("demo13").innerHTML= "the content of the array " + fruit;

// deleting in array 
//using pop() or shift() instead

// MERGING OR CONCATENATING OF ARRAY
// .concat() this method creates a new array by merging (concatenating) existing Array 

const myGirls = ["Zainab", "Aishat", "Mama"];
const myBoys = ["Abdullateef", "Abubakar", "Abdullah"]
const myChildren = myGirls.concat(myBoys);
document.getElementById("demo14").innerHTML= "the content of the array " + myChildren;

// .concat() method can take any number of array arguments
const fam1 = ["Daud","Bashir", "Kamaldeen", "Sharafa"];
const fam2 = ["Abdulkabir", "Shaban", "Balkis"];
const fam3 = ["Barakat", "Suleiman", "Aliyah"];

const myFamily = fam1.concat(fam2, fam3, myChildren)

document.getElementById("demo15").innerHTML= "the content of the array " + myFamily;

// .concat() method can also take strings as arguments

const myChild = myChildren.concat("Umar");
document.getElementById("demo16").innerHTML= "the content of the array " + myChild;

// positioning new item in the Array using .splice()

myChild.splice(2, 0, "Taiye", "Kehinde");
                //The first parameter (2) defines the position where new elements should be added (spliced in).
                // The second parameter (0) defines how many elements should be removed.
document.getElementById("demo17").innerHTML= "the content of the array " + myChild;

    // Using splice() to remove element
 myChild.splice(0, 1,);
    //  The first parameter (0) defines the position where new elements should be added (spliced in).    // The second parameter (0) defines how many elements should be removed.
    // The second parameter (1) defines how many elements should be removed
document.getElementById("demo18").innerHTML= "the content of the array " + myChild;
