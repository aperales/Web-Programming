//Alberto Perales 3/26/2014 Functions Industry

//it takes a a web designer 25 tries to get a web site correct.
//How many tries does it take to make 3 websites.

alert("To find the tries it take to get a website correct.\nPlease enter following info:");
var tries = prompt("Please enter the tries.");
var websites = prompt("Please enter number of websites created.");


function totalTries(){
var total = tries * websites;
console.log("It takes " + total + " tries to create " + websites + " websites.");


}
totalTries();
