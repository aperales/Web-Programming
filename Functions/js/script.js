//Alberto Perales 3/24/2014 Functions Worksheet


//Circumference

//calculae circumference of circle

//Function for calculating the circumference of a circle
function calcCirc(){
    //variables given to find the circum of circel using formula
    // 2 * pi * r = circum
    var pi = 3.14;
    var radius = 3;
    var circlePart = 2;
    var circumference = circlePart * pi * radius;
    //consle print to check answer
    console.log (circumference);
    //console print for answer needed
    console.log("The circumference of the circle is " + (circumference));

}
//invoke function
calcCirc();



//STUNG!!

// Calculate how many bee stings are needed to kill an animal in a function
//given Victim's weight in pounds


//parameters for function victims weight in pounds

//return numbers of stings

//result to print out "It takes x bee stings to kill this animal ]
var total = calcBeeStings(130, 8.666666667);
// function using variables in ()
function calcBeeStings(w, s){
    //var victimWeight = 130;
  //  var beeStingLb = 8.666666667;
    //var for beeStings using formula in variable s in ()
    var beeStings = w * s;
    //return info out of function
    return beeStings;

}
//consoloe print for total of stings and ANswer needed
console.log(total);
console.log("It takes " + (total) + "bee stings to kill this animal");
// both problems used 