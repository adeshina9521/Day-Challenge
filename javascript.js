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

// The slice() method slices out  a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Aishat"):
myChild.slice(1);
document.getElementById("demo19").innerHTML= "the content of the array " + myChild.slice(1);

// Note
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array

document.getElementById("demo20").innerHTML= "the content of the array " + myChild.slice(1, 4);
        // This means that the slice should start from 1 and ends at 4


// Finding Max and Min Values in an Array

// Arranging alphabetically in Array usind sort() in ascending order
document.getElementById("demo21").innerHTML= "the content of the array " + myChild.sort();

// Arrangement in descending order
document.getElementById("demo22").innerHTML= "the content of the array " + myChild.reverse();

// To sort Number in ascending order

const point = [ 1, 4, 5, 7,32, 12, 11, 2, 34, 35, 55, 12, 3,2, 6,8]

        // use this function to arrange the sort number in ascending order
function ascending (a, b) {
    return a - b
}

document.getElementById("demo23").innerHTML= "the content of the array " + point;

document.getElementById("demo24").innerHTML= "the content of the array " + point.sort(ascending);

    // for descending of number
    document.getElementById("demo25").innerHTML= "the content of the array " + point.reverse(ascending);

// for random arrangement
document.getElementById("demo26").innerHTML= point


function myFunction(){
    
    for (let i = point.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * i)
        let k = point[i]
        point[i] = point[j]
        point[j] = k
    }

    document.getElementById("demo26").innerHTML= point;

}

// Maximum value in the array
function myArrayMax(arr){
    return Math.max.apply(null, arr);
}
document.getElementById("demo27").innerHTML= "the content of the array " + myArrayMax(point);

// Minimum Value in the array
function myArrayMin(arr){
    return Math.min.apply(null, arr);
}
document.getElementById("demo28").innerHTML= "the content of the array " + myArrayMin(point);


// To sort an Array that contains object 

const myBaby =[
    {middleNmae:"Adebayo", sex:"Male", year: 2020}, 
    {middleNmae:"Ade", sex:"Male", year: 2010}, 
    {middleNmae:"Morenikeji", sex:"Female", year: 2020}, 
    {middleNmae:"Lawal", sex:"Male", year: 1996}
];
        // to sort using year

displayMyBaby()
myBaby.sort(function(a, b){
   return a.year - b.year
})
displayMyBaby()

function displayMyBaby(){
    document.getElementById("demo29").innerHTML= "the content of the array " + myBaby[0].middleNmae + " " + myBaby[0].sex + myBaby[0].year + 
                                                "<br>" +
                                                myBaby[1].middleNmae + " " + myBaby[1].sex + myBaby[1].year +
                                                "<br>" +
                                                myBaby[2].middleNmae + " " + myBaby[2].sex + myBaby[2].year +
                                                "<br>" +
                                                myBaby[3].middleNmae + " " + myBaby[3].sex + myBaby[3].year
                                                ;

}

        // to sort using middlename


        displayMyBaby()

        function myFunctionSort(){
            myBaby.sort(function(a, b){
                let x = a.middleNmae.toLowerCase();
                let y = b.middleNmae.toLowerCase();
                if  (x < y) {return -1;}
                if (x > y) {return 1;} 
                return 0;
             });
           
             displayMyBaby()

        }
        
        function displayMyBaby(){
            document.getElementById("demo30").innerHTML= "the content of the array " + myBaby[0].middleNmae + " " + myBaby[0].sex + myBaby[0].year + 
                                                        "<br>" +
                                                        myBaby[1].middleNmae + " " + myBaby[1].sex + myBaby[1].year +
                                                        "<br>" +
                                                        myBaby[2].middleNmae + " " + myBaby[2].sex + myBaby[2].year +
                                                        "<br>" +
                                                        myBaby[3].middleNmae + " " + myBaby[3].sex + myBaby[3].year
                                                        ;
        
        }
        
    // Iteration
//     It simply means looping over a sequence of elements.

// Here are some easy examples:

// Iterating over a String
// Iterating over an Array

// Arry iteration methods operate on every array item

// 1.The forEach() method calls a function (a callback function) once for each array element.

const number = [45, 4, 9, 16, 25];

let txt = "";

function myFunction(value, index, array){
    txt += value + "<br>" ;
 }
 number.forEach(myFunction)

 document.getElementById("demo31").innerHTML = "the ForEach of the Array " + txt;

//  2. JavaScript Array map()
//  The map() method creates a new array by performing a function on each array element.
 
//  The map() method does not execute the function for array elements without values.
 
//  The map() method does not change the original array.

const number1 = [45, 4, 9, 16, 25];
function myFunction1(value, index, array){
    return value * 2
}
let newValue = number1.map(myFunction1)

document.getElementById("demo32").innerHTML = "the Map of the Array " + newValue;


// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// When a callback function uses only the value parameter, the index and array parameters can be omitted:
const number2 = [45, 4, 9, 16, 25];

function myFunction2(value){
    return value * 3
}
let newValue2 = number2.map(myFunction2)

document.getElementById("demo33").innerHTML = "the Map of the Array " + newValue2;


// 3. JavaScript Array filter()
// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:

const number3 = [45, 4, 9, 16, 25];

function myFunction3(value, index, array){
    return value > 18
}
let filterValue = number3.filter(myFunction3)

document.getElementById("demo34").innerHTML = "the Fiter of the Array " + filterValue;

//  4.  JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

const number4 = [45, 4, 9, 16, 25];

function myFunction4(total, value, index, array){
    return total + value
}
// since the index and array are not used we can only use total and value
let reduceValue = number4.reduce(myFunction4)
// reduceValue or sum

document.getElementById("demo35").innerHTML = "the Reduce of the Array " + reduceValue;

    // The reduce() method can accept an initial value:

    const number5 = [45, 4, 9, 16, 25];

    function myFunction5(total, value, index, array){
        return total + value
    }
    // since the index and array are not used we can only use total and value
    let reduceValue1 = number5.reduce(myFunction5, 89)
    // the initial value is 89 instead of 0
    
    document.getElementById("demo36").innerHTML = "the Reduce of initial value of 89 in the Array is " + reduceValue1;
    
    // 4. JavaScript Array reduceRight()
    // The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
    
    // The reduceRight() works from right-to-left in the array. See also reduce().
    
    // The reduceRight() method does not reduce the original array.
    
    // This example finds the sum of all numbers in an array:

    const number6 = [45, 4, 9, 16, 25];

    function myFunction6(total, value, index, array){
        return total + value
    }
        // since the index and array are not used we can only use total and value

    let reduceValue2 = number6.reduceRight(myFunction6)

    
    document.getElementById("demo37").innerHTML = "the ReduceRight of the Array is " + reduceValue2;


// 5. JavaScript Array every()
  // The every() method check if all array values pass a test.
    
  // This example check if all array values are larger than 18:

  const number7 = [45, 4, 9, 16, 25];

  function myFunction7(value, index, array){
      return value > 18
    //   is all over 18?
  }
      // since the index and array are not used we can only use value

  let allOver18 = number7.every(myFunction7)


  
  document.getElementById("demo38").innerHTML = "Did Every Element of the Array over 18" + allOver18;



//  6. JavaScript Array some()
//   The some() method check if some array values pass a test.
  
//   This example check if some array values are larger than 18:

const number8 = [45, 4, 9, 16, 25];

function myFunction8(value, index, array){
    return value > 18
  //   is some over 18?
}
    // since the index and array are not used we can only use value

let someOver18 = number8.some(myFunction8)



document.getElementById("demo39").innerHTML = "Did some of the Array over 18 " + someOver18;

// 7. JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "mango", "Apple"]

let position = fruits.indexOf("Apple") + 1;
// Note: The first item has position 0, the second item has position 1, and so on thats why we add 1.

document.getElementById("demo40").innerHTML = "Apple is found in position " + position;
// If the item is present more than once, it returns the position of the first occurrence.

// Syntax
// array.indexOf(item, start)
// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.

// 8.  JavaScript Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

const fruits1 = ["Apple", "Orange", "Apple", "mango"]

let position1 = fruits1.lastIndexOf("Apple") + 1;
document.getElementById("demo41").innerHTML = "Apple is found in position " + position1;

// 9.  JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:

const number9 = [4, 9, 16, 25, 29]

function myFunction9(value, index, array){

    // since the index and array are not used we can only use value

    return value > 18
}

let firstGreaterThan18 = number9.find(myFunction9);

document.getElementById("demo42").innerHTML = "the first Array greater than 18 is " + firstGreaterThan18;

//10 JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:
const number10 = [4, 9, 16, 25, 29]

function myFunction10(value, index, array){

    // since the index and array are not used we can only use value

    return value > 18
}

let firstIndexThatPass = number10.findIndex(myFunction10);

document.getElementById("demo43").innerHTML = "the first Array that pass is " + firstIndexThatPass;

// 11. JavaScript Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.

const myArr = Array.from("ABCDEFG");
document.getElementById("demo44").innerHTML ="Array object from any object with a length property or any iterable object." + myArr;

// 12.JavaScript Array Keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.

const myFruit = ["Banana", "Orange", "Apple", "Mango"];
let text = "";
const keys = myFruit.keys();

for (let x of keys){
    text += x + "<br>"
}

document.getElementById("demo45").innerHTML ="The Array.keys() method returns an Array Iterator object with the keys of the array." + text;
