// Alberto Perales 3/13/2014 Expression_Industry

//In My job at T-Mobile we have a different amount of customers a day.
//On Monday we have 65, Tuesday we have 44, Wednesday we have 48, Thursday we have 78
//Friday 89, Saturday 117, and Sunday we have 57.  Every sunday night I have to
//figure out how many customers we have for the week and what the average per day was. //
//For every customer we hand out 2 flyers how many flyers are needed this week.


//Array with daily customers for 1 week. You can input any number to change answer.
var custPerDay = [65, 44, 48, 78, 89, 117, 57];
//Variable for flyers
var flyers = 2
// variable of days in a week
var days = 7;
// expression for total weekly customers using array.
var total = custPerDay[0] + custPerDay[1] + custPerDay[2] + custPerDay[3] + custPerDay[4] + custPerDay[5] + custPerDay[6];
//expression to find average using total days and array information total
var averagePerDay = total / days;
//Expression variable to find flyers for this week accordint to total customers
var flyCust = custPerDay[0] + custPerDay[1] + custPerDay[2] + custPerDay[3] + custPerDay[4] + custPerDay[5] + custPerDay[6] * 2;

// console log check with sentence links for correct answer
//you have to have the quotations and parenthesis to separate links and total that console is checking for.
//NUmber of flyer console check
console.log(("Store needs ") + (flyCust) + (" total flyers for this week"));
console.log(("There was ") + (total) + (" customers for the week."));
//console with average customers per day.
console.log(("The average number of customers per day was ") + (averagePerDay) + ("."));

