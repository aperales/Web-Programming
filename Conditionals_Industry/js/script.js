//Alberto Perales 3/20/2014 Conditions_Industry

//on average 1 out of 5 web sites created fails because of improper planning.
//HOw many websites have you created? enter the information to find out
// how many have failed for you.
//The average is 5 to 10 fails per designer per company.  Are you within average?
var averageCom1 = 5;
var averageCom2 = 10;
alert("FAILING WEBSITES\nUsing a national average.");
var websites = prompt("Please enter websites created");

var createdWeb = websites / 5;
console.log((createdWeb) + (" websites have failed on average."));

if(createdWeb >= averageCom1 && createdWeb <= averageCom2){
    console.log("You are at average")


}else{
    console.log("You are not within average")

}


