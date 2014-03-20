//Alberto Perales 3/19/2014 Conditionals_Personal

//if my daughter goes online to a website and the age restriction is 18 years of age.
//she was born in 2005.  Will the website allow access to it. If she asks me
//to grant her access and I wwas born in 1982.  how old is she and will it grant me access

var restriction = 18;
//yearBorn = 2005;

var dob = prompt("TO ACCESS \nYou need to be at least 18yrs old\nPlease Enter year of birth.");

var presentYear = prompt("Please enter present year");

var age = presentYear - dob;
console.log(("Her age is ") + age + ("."));
alert(("Age is ") + age);
alert("Access not granted! ");




if(age < restriction){
    console.log("Access Denied");

}else{
    console.log("Access granted!")

}









