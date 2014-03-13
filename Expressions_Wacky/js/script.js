//Alberto Perales 3/13/2014 Expressions_Wacky

// A factory employs 98 workers.  Out of these workers, 16 receive a wage of $85 per day
// and the rest receive $120.75 per day.  A week is 5 working days. How much does the
//comnpany pay its employees in a week.
//Variables for given in problem created // variables can change to any number // pay
var pay1 = 120.75;
var pay2 = 85;
//Employee variables for givens //total employees and expression to find second set of employees
var totalEmp = 98;
var employee1 = 16;
var employee2 = totalEmp - employee1;
//Weekdays given per working week on problem
var weekDays = 5
//Order of Operations. The expression will need to have parenthesis for correct answer to expression
//Expression will need week days in each part of parenthesis
var totalPay =(employee1 * pay2) * weekDays + (employee2 * pay1) * weekDays;


//Total employee 2 = 82
//This will be used in expression for totalPay
console.log(employee2);
//TotalPay console check
console.log(("The company pays ") + (totalPay) + (" dollars to their employees in a week."));
//last console check with strings/