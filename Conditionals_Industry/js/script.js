//Alberto Perales 3/20/2014 Conditions_Industry

//on average 1 out of 5 web sites created fails because of improper planning.
//HOw many websites have you created? enter the information to find out
// how many have failed for you.
//The average is 5 to 10 fails per designer per company.  Are you within average?

//variables given in problem
var averageCom1 = 5;
var averageCom2 = 10;
//alert for what the problem will do
alert("FAILING WEBSITES\nUsing a national average.");
var websites = prompt("Please enter websites created");
//variable to find the number of websites form info user creates
var createdWeb = websites / 5;
//console print for average failed websites
console.log((createdWeb) + (" websites have failed on average."));
//alert to user on failed according to average
alert(("Websites created are " + createdWeb));
//if else statement for finding in answer is within averege or not
//along with alert forr user
if(createdWeb >= averageCom1 && createdWeb <= averageCom2){
    console.log("You are within average");
    alert("You are within average");
}else{
    console.log("You are not within average");
    alert("You are not within average")
}


//code finished for industry