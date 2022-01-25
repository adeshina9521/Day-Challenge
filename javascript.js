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
