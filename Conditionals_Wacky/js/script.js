//Alberto Perales 3/19/2014 Conditionals_Wacky

//A student needs to find the year of his great great grandfathers birth .
// He thinks it 1917. Is he correct? What is the year of his birth?


//Given variables
//present year 2014

//great Grandfathers age is 104

//variables for givens in prompt form

var presentYear = prompt("To find your birth year. \nPlease enter the present year.");
var age = prompt("Please enter you age.");

//minus 1 for the current year we are on

var yearOfBirth = presentYear - age -1;
console.log(("His year of birth is ") + yearOfBirth + ("."));

//alert for year of birth

alert("The year of birth is " + yearOfBirth + ".");

//If else statement for question about year using && to search between 1916 - 1918 for 1917
if(yearOfBirth < 1918 && yearOfBirth > 1916){
    //console print for true statement
    console.log("He is correct");

}else{
    //Console print for false statement
    console.log("He is incorrect.")


}



