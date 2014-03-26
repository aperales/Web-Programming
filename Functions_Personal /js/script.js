//Alberto Perales 3/24/2014 Functions_Personal

//I bought 3 sets of colored pencils for a project.
//Each box of color pencils has 24 colors.  My daughter was using them
//to color and she lost 7 pencils.  HOw many colored pencils do I have now. I need 85
// total for a project do i have 85, but not more than 100?
// alert user what the problem is and what to input
alert("We are calculating how many colored pencils we have.\nPlease enter the following information.");
//variables given in problem with prompt to enter information
var boxes = prompt("Please enter the number of boxes bought.");
var perBox = prompt("please enter the number of pencils per box.");
//variables given in problem no prompt
var pencilsNeeded = 85;
var over = 100;



//funstion to cal pencils
function calcPencils(){
//variable to find total pencils using givens from about and information user entering
var totalPencils = boxes * perBox - 7;
    console.log(totalPencils);//log print total pencils
    alert("The total number of colored pencils is " + totalPencils);//alert user toatl pencils
    if(totalPencils > pencilsNeeded && totalPencils < over){//if to print and alert user if you have enbough poencils
        console.log("You have enough pencils");//console print enough pencils
        alert("You have enough pencils!")//alert to user enough pencils
}else if(totalPencils > over){//else if for user going over 100 pencils like on problem

        console.log("You are over 100 pencils");//console print ove rpencils
        alert("You are over 100 pencils");//alert over poenceils to user

}else{//else if console print and alert you don ot have enough pencils
        console.log("You do not have enough pencils!");
        alert("You don't have enough pencils")
    }
alert("Thank you for the information");//thatnk you alert for user

}
calcPencils();
