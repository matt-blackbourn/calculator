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
let operators = document.querySelectorAll(".symbol")
let decimalPoint = document.querySelector("#decimalPoint")
let tempNum = ""
let userInput = []

//deals with number inputs
for(let i = 0; i < numbers.length; i++){
   numbers[i].addEventListener("click", function(e){
      tempNum += e.target.value
      screen.value = tempNum
      if(e.target.value === "."){
         e.target.disabled = true
      }
   }) 
}

//deals with operator inputs
for(let i = 0; i <operators.length; i++){
   operators[i].addEventListener("click", function(e){
      if(decimalPoint.disabled) decimalPoint.disabled = false
      userInput.push(tempNum)
      tempNum = ""
      switch(e.target.value){
         case "add": userInput.push("+")
         break
         case "subtract": userInput.push("-")
         break
         case "multiply": userInput.push("*")
         break
         case "divide": userInput.push("/")
         break
      }
   })
}

function clearLast(){
   console.log(userInput)
   tempNum = ""
   screen.value = "0"
   //remove last symbol from array
   let lastIndex = userInput[userInput.length -1]
   if(lastIndex === "+" || lastIndex === "-" || lastIndex === "*" || lastIndex === "/"){
      userInput.pop()
   }
}

function clearMemory(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   screen.value = "0"
   tempNum = ""
   userInput = []
}

function compute(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   userInput.push(tempNum)
   console.log(userInput)
   let result = Number(userInput[0])
   for(let i = 1; i < userInput.length; i++){
      let symbol = userInput[i]
      let nextNum = Number(userInput[i+1])
      if(symbol === "+"){
         result += nextNum
      } else if(symbol === "-"){
         result -= nextNum
      } else if(symbol === "/"){
         result /= nextNum
      } else if(symbol === "*"){
         result *= nextNum
      }
      screen.value = result
   }
   tempNum = ""
   userInput = []
}

function percentage(){
   if(userInput[1] === "*"){
      userInput.push(tempNum)
      let firstNum = Number(userInput[0])
      let secondNum = Number(userInput[2])
      screen.value = secondNum*(firstNum/100)
   } 
   userInput = []
   tempNum = ""
}