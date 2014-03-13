// Alberto Perales 3/13/2014 Expression_Industry

//In My job at T-Mobile we have a different amount of customers a day.
//On Monday we have 65, Tuesday we have 44, Wednesday we have 48, Thursday we have 78
//Friday 89, Saturday 117, and Sunday we have 57.  Every sunday night I have to
//figure out how many customers we have for the week and what the average per day was.



var custPerDay = [65, 44, 48, 78, 89, 117, 57];
var days = 7;
var total = custPerDay[0] + custPerDay[1] + custPerDay[2] + custPerDay[3] + custPerDay[4] + custPerDay[5] + custPerDay[6];
var averagePerDay = total / days;

console.log(("There was ") + (total) + (" customers for the week."));
console.log(("The average number of customers per day was ") + (averagePerDay) + ("."));

