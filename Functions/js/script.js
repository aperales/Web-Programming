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



