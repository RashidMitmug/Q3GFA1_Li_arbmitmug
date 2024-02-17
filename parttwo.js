var firstname = prompt("First Name: ");
var lastname = prompt("Last Name: ");
var age = prompt("Birth Year: ");

age = 2024 - age;

document.getElementById("output").innerHTML="Hello "+firstname+" "+lastname+"! How does it feel to be "+age+" years old?";
