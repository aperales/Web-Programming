//Alberto Perales 3/26/2014 Functions Industry

//it takes a a web designer 25 tries to get a web site correct.
//How many tries does it take to make 3 websites.
//alerts to user about info needed
alert("To find the tries it take to get a website correct.\nPlease enter following info:");
//variables for prom information requested from user
//var for tries required
var tries = prompt("Please enter the tries.");
//var for websites built
var websites = prompt("Please enter number of websites created.");
//function to find tota Tries

function totalTries(){
//var for total using information input by user form prompts
    var total = tries * websites;
    console.log("It takes " + total + " tries to create " + websites + " websites.");
    //alert given to user for correct answer
    alert("It takes " + total + " tries to create " + websites + " websites.");

}
//funsction print to log
totalTries();
