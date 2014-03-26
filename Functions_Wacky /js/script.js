//Alberto Perales 3/26/2014 Functions_Wacky


//I made 3 liters of tea monday, tuesday and friday.  Larry drinks 2 litters a day for monday
// tuesday and friday ,
// How many liters did I make in all three days and how many did larry drink how much tea is left over




var totalTea = prompt("We need to find out how much tea was made.\nPlease enter Tea made per day.");
var days = 3;
var teaPerDay = 3;
var teaMade = totalTea * teaPerDay;
console.log(teaMade);
alert("Total tea made was " + teaMade + " liters per day.");
var larryTea = prompt("Enter how much Larry drinks per day");
var totalLarryTea = larryTea * days;
console.log(totalLarryTea);
alert("Larry drinks " + totalLarryTea + " liters of tea.");
//Team made was 12l per 3 days larry drinks 6l per 3 days
var total = calcteaLeft(12, 6);
function calcteaLeft(t, l){
    var teaLeft = teaMade - totalLarryTea;
    return(teaLeft);

}
console.log(total);
alert("There is " + total + " liters of tea left.");
calcteaLeft();

