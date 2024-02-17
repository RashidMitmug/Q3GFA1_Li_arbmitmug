/*part one*/
var nme = prompt("Please enter your name: ");
var height = prompt("Please enter your height (in): ");
var height1;
var height2;
var weight = prompt("Please enter your weight(kg): ", "");
var weight1;
var decimal;

decimal = height%12;
height1 = ((height/12));
height3 = height1%1;
height=height1-height3;
weight = weight * 2.20462262;
weight1 = weight * 100;
weight1 = (weight1%1)/100;
weight = weight - weight1;

alert("Name: "+nme +"\nHeight: "+ height + "'" + decimal + "\"" +"\nWeight: "+ weight + "lbs") ;
/*part3*/
function myFunction(){
    if(confirm("Do you consent sharing your personal information with the site?")){
        alert("Name: "+nme +"\nHeight: "+ height + "'" + decimal + "\"" +"\nWeight: "+ weight + "lbs");
    } else{
        alert("User does not  wish to share his/her information.");
        
    }
}