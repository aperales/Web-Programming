//Alberto Perales 3/26/2014 Functions_Wacky


//I made 3 liters of tea monday, tuesday and friday.  Larry drinks 2 litters a day for monday
// tuesday and friday ,
// How many liters did I make in all three days and how many did larry drink how much tea is left over



//variable given by user and from the problem
// total tea made
var totalTea = prompt("We need to find out how much tea was made.\nPlease enter Tea made per day.");
//var for days tea was mde
var days = 3;
//tea liters per day made
var teaPerDay = 3;
//var expression to find out tea made for the 3 days
var teaMade = totalTea * teaPerDay;
//console print of answer
console.log("I made " + teaMade + " liters of tea.");
//alert for user of tea made total
alert("Total tea made was " + teaMade + " liters per day.");
//var to find out how much tea larry drinks
var larryTea = prompt("Enter how much Larry drinks per day");
//var expression to fin dout how much tea larry drinks
var totalLarryTea = larryTea * days;
//console print total larry tea
console.log("Larry drank " + totalLarryTea + " liters of tea.");
//alert for user how much tea larry drinks total
alert("Larry drinks " + totalLarryTea + " liters of tea.");
//Team made was 12l per 3 days larry drinks 6l per 3 days
//var for function to find how much tea is left form tea made and waht larry drinks
var total = calcteaLeft(12, 6);
function calcteaLeft(t, l){
    var teaLeft = teaMade - totalLarryTea;
    return(teaLeft);

}
//console print for how much tea is left after larry drinks 9 form the 12 liters
console.log("There is " + total + " liters of tea left.");
alert("There is " + total + " liters of tea left.");
calcteaLeft();

