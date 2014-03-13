/**
 * Created by selarepal24 on 3/12/14.
 */
//Alberto Perales 3/12/2014 Expressions Worksheet

//Calculate Sparky's Dog Years

//Sparky's Age
var dogYears = 3;

//Find human years per dog years
var humanYears = dogYears * 7;

//Expression to find human year
dogYears * 7;



//Sparky is 21 human years old which is 3 in dog years
console.log(humanYears);



//Slice of Pie part 1
// given variables
// slices per pizza

var slicesPerPizza = 8;
// people at party
var person = 7;
// pizzas ordered
var pizzasOrd = 4;
// expression to find slices per person
var totalSlices = pizzasOrd * slicesPerPizza / person;

//Pizza slices per person 4.5
console.log(totalSlices);


//Slice of Pie part 2

var person = 7;
var slices = 32;
var slicesPerson = slices / person;
var leftPizzaPerson = .5
var totalPizzaLeft = leftPizzaPerson * person


//Pizzas per person 4.5
//half pizza slice per person

//Sparky got 3.5 slices of pizza
console.log(totalPizzaLeft);


//Average Shopping Bill
// 5 weekly grocery bills
var groceryBill = [115, 97, 101, 90, 82];
//expression to find total
var total = groceryBill[0] + groceryBill[1] + groceryBill[2] + groceryBill[3]
+ groceryBill[4];
//Total $485
//expression for finding avergar divide by total number of weeks

var average = total / 5;
// Average $97 per week

//"You have spent a total of $485 on groceries over 5 weeks. That is anverage of $97 per week."

console.log(total);
console.log(average);

//Discounts


var discountPer = .100;
var taxPercent = .0825;
var shirt = 14.99;
var discountForShirt = discountPer * shirt;
var taxForShirt = shirt * taxPercent;

var shirtTaxDiscount = taxForShirt + shirt - discountForShirt;
var shirtTax = shirt - discountForShirt;

// Tax for shirt is $1.23
// Shirt with tax is $16.22
//DIscount for shirt is $1.49
//Shirt with tax and discountis $14.73
//shirt with discount no tax is $13.50

//"Your shirt was originally $14.99, but after a 10% discount, it is now $13.50 without tax and $14.73 with tax"


console.log(shirtTax);
console.log(taxForShirt);
console.log(discountForShirt);
console.log(shirtTaxDiscount);



