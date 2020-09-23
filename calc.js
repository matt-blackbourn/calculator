//event listeners for clicks on all numbers and symbols
//create temporary inputs array, and push numbers and symbols into array 
//use temp string to build numbers, until symbol input is received
//when symbol input recieved, turn string to number, and add to array
//add symbol to array, using function connected to button
//array should then contain number, symbol, number, symbol etc
//when = sign inputted, loop through array, take number and symbol and +=, -= etc through whole array.
//return final total, display this in display.

let screen = document.querySelector("#screen")
let numbers = document.querySelectorAll(".number")
for(let i = 0; i < numbers.length; i++){
   numbers[i].addEventListener("click", function(e){
      screen.value = e.target.value
   })
}