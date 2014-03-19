//Alberto Perales 3/19/2014 Conditionals_Expressions


//Last chance for gas

//Determine is they can make it with current fuel
//Should they stop for gas

//Gas Efficiency of Car 25(mpg)
//Gauge reading in gas tank 10(%)
//car tank cap 16(gallons)
//miles to go 200
var gasLeft = .10;
var tankCap = 16;
var carMpg = 25;
var milesToGo = 200;
//expression for miles per tank
milesPerTank = carMpg * tankCap;
console.log(milesPerTank);
//Miles per tank mutiply car mpg and tank cap in gallons
var milesPerTank = 400;
var milesLeft = gasLeft * milesPerTank;
console.log(milesLeft);
//milesLeft is 40mpg

if(milesLeft < milesToGo){
    //if its less than 200
    console.log("You have 40 gallons left in your tank, better get gas!");
}else{
    //if its greater than 200
    console.log("Yes you can make it without stopping for gas");
}


//Grade Letter Calculator

//A student earns a number grade at the conclusion of a course at Fullsail
// Determine the appropriate letter grade for that number using conditional statments


var gradePer = .85;
var gradeAct = gradePer * 100;
console.log(gradeAct);
//Grade is 85
var grade = 85;

if(grade < 90 && grade > 80){
    //if its greater that 80 and less than 90 it is an B
    console.log("Grade is a B");





}
//Expression to print the statment requiered
var letterGrade = "B";
console.log("You have an " + (grade) + "%," + "which means you have earned an " + (letterGrade) + " in the class!");









