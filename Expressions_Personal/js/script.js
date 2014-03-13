// ALberto Perales 3/13/2014 Expressions_Wacky

// There were 10 people at breakfast.  I had to buy donuts and coffee for everyone.
//Each person should get an equal amount of donuts and one coffee.
// How many donuts did each person get, and how many coffees did I buy?

// Variables for givens

var coffee = 1
var people = 10;
var donutsPerDoz = 12
var dozenBought= 3

//Expressions to find amounts
var totalDonuts = dozenBought * donutsPerDoz;
// FInd Donuts per person by dividing total donuts by number of people at breakfast
var donutsPerPers = totalDonuts / people;
// Expression finds number of coffee needed.  Multiplying cofee by the number of people 
var coffeePerPers = coffee * people;

// Result Variable

// NUmber of donuts per person
// Console for dopnuts
console.log(donutsPerPers + (" donuts per person"));

// console result for coffee per person
console.log(coffeePerPers + (" coffee needed"));
