//Alberto Perales 3/24/2014 Functions_Personal

//I bought 3 sets of colored pencils for a project.
//Each box of color pencils has 24 colors.  My daughter was using them
//to color and she lost 7 pencils.  HOw many colored pencils do I have now. I need 85
// total for a project do i have 85?

alert("We are calculating how many colored pencils we have.\nPlease enter the following information.");
var boxes = prompt("Please enter the number of boxes bought.");
var perBox = prompt("please enter the number of pencils per box.");
var pencilsNeeded = 85;




function calcPencils(){

var totalPencils = boxes * perBox - 7;
    console.log(totalPencils);
    alert("The total number of colored pencils is " + totalPencils);
    if(totalPencils > pencilsNeeded){
        console.log("You have enough pencils")
        alert("You have enough pencils!")
}else{
        console.log("You do not have enough pencils!");
        alert("You do not have enough pencils!");
}

}
calcPencils();
