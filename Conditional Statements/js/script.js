//Conditional Logic - else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of kid with the parent

//if the child is old enough, print to the console " you can ride"
//if kid is over 48 inches in height
if(kidHeight > minHeight){
    //YOu can ride
    console.log("You can ride the coaster");
}else if(kidHeight > wParentHeight){
    //You can ride with parent present
    console.log("You can ride, but only with a parent present.");

}else{
    //Sorry you have growing to
    cosole.log("Sorry kid, you have some growing to do first!");

}
