//Alberto Perales 3/19/2014 Conditionals_Personal

//if my daughter goes online to a website and the age restriction is 18 years of age.
//she was born in 2005.  Will the website allow access to it. If she asks me
//to grant her access and I wwas born in 1982.  how old is she and will it grant her access?

var restriction = 18;
//yearBorn = 2005;

//prompt to start entering inforamtion and age limit for access

var dob = prompt("TO ACCESS \nYou need to be at least 18yrs old\nPlease Enter year of birth.");

//var prompt to enter present year
var presentYear = prompt("Please enter present year");
//alert to thank that the infomration was entered

alert("Thank you for the information.");
//variable to find age expression
var age = presentYear - dob;
//console print to find age
console.log(("Age is ") + age + ("."));
alert(("Age is ") + age);


if(age < restriction){
    console.log("Your access is Denied");
    alert("Access denied")
}else{
    console.log("Access granted!");
    alert("Access granted");
}









