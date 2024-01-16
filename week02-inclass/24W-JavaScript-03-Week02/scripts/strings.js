var output = document.querySelector("p");
output.textContent = 10;
/* STEP 1: Creating Strings */
var string1 = "Hello! How are you?";
output.textContent = string1;
// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

/* STEP 2: Escaping Characters */
var string2 = "It's cold outside.";
var string2 = 'It\'s cold outside.';
output.textContent = string2;
/* STEP 3: Concatenation */
output.textContent = string1 + " " + string2 + 20;
output.textContent = 20 + 20; //both the value are the numbers, just add the numbers 
output.textContent = 20 + "20"; //just one string in between, all the numbers will be converted to string
/* STEP 4: Numbers and Strings */

// numbers can be converted to strings
output.textContent = 'ABC' + 20; 
// strings can be converted to numbers, too
var num1 = 40; //var num1 = (40).toString();
var num2 = 50;
output.textContent = num1.toString() + String(num2); //convert the number to string
// and back again, if we want
var num3 = "20";
var num4 = Number(num3);
console.log(typeof(num4));