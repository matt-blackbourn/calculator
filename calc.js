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
let decimalPoint = document.querySelector("#decimalPoint")
let tempNum = ""
let userInput = []
for(let i = 0; i < numbers.length; i++){
   numbers[i].addEventListener("click", function(e){
      
      tempNum += e.target.value
      screen.value = tempNum
      if(e.target.value === "."){
         e.target.disabled = true
      }
   }) 
}

function clearMemory(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   screen.value = ""
   tempNum = ""
   userInput = []
}

function add(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   userInput.push(tempNum)
   tempNum = ""
   userInput.push("+")
}

function subtract(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   userInput.push(tempNum)
   tempNum = ""
   userInput.push("-")
}

function multiply(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   userInput.push(tempNum)
   tempNum = ""
   userInput.push("*")
}

function divide(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   userInput.push(tempNum)
   tempNum = ""
   userInput.push("/")
}

function compute(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   userInput.push(tempNum)
   console.log(userInput)
   tempNum = ""
   userInput = []
}