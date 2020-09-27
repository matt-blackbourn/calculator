//event listeners for clicks on all numbers and symbols
//create temporary inputs array, and push numbers and symbols into array 
//use temp string to build numbers, until symbol input is received
//when symbol input recieved, turn string to number, and add to array
//add symbol to array
//input array should then contain number, symbol, number, symbol etc
//when = sign inputted, loop through array, take number and symbol and +=, -= etc through whole array.
//return final total, display this in display.

const screen = document.querySelector("#screen")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".symbol")
const decimalPoint = document.querySelector("#decimalPoint")
let tempNum = ""
let userInput = []
let result = ""
let tempMultiplier 

//deals with number inputs from user
for(let i = 0; i < numbers.length; i++){
   numbers[i].addEventListener("click", function(e){
      
      tempNum += e.target.value
      screen.value = tempNum
      if(e.target.value === ".") e.target.disabled = true
      result = "" 
<<<<<<< HEAD
      
||||||| merged common ancestors
=======
      if(tempMultiplier){
         result = tempMultiplier * tempNum
         tempNum = ""
         console.log(tempNum, tempMultiplier)
      }
>>>>>>> 72fb3844530d97cf251a295fd983030c5e3ab3bb
   }) 
   
}

//deals with operator(symbol) inputs from user
for(let i = 0; i <operators.length; i++){
   operators[i].addEventListener("click", function(e){
      if(decimalPoint.disabled) decimalPoint.disabled = false
<<<<<<< HEAD
      
  
      if(result){
         userInput.push(result)
         result = ""
      } else if(tempNum){
         userInput.push(tempNum)
         tempNum = ""
      } else {
         userInput.pop()
      }
      
||||||| merged common ancestors
      result ? userInput.push(result) : userInput.push(tempNum)
=======
      
      result ? userInput.push(result) : userInput.push(tempNum)
>>>>>>> 72fb3844530d97cf251a295fd983030c5e3ab3bb
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
<<<<<<< HEAD

      
||||||| merged common ancestors
      tempNum = ""
=======
      tempNum = ""
     
>>>>>>> 72fb3844530d97cf251a295fd983030c5e3ab3bb
   })
   

}

//deals with "C" button input from user
function clearLast(){
   tempNum = ""
   screen.value = "0"
   let lastIndex = userInput[userInput.length -1]
   if(lastIndex === "+" || lastIndex === "-" || lastIndex === "*" || lastIndex === "/"){
      userInput.pop()
   }
}

//resets calculator
function clearMemory(){
   if(decimalPoint.disabled) decimalPoint.disabled = false
   screen.value = "0"
   tempNum = ""
   userInput = []
   tempMultiplier = undefined
}


//deals with = input from user
function compute(){
   if(tempMultiplier){
      screen.value = result
   }
   if(decimalPoint.disabled) decimalPoint.disabled = false
   userInput.push(tempNum)
<<<<<<< HEAD

   result = Number(userInput[0])
||||||| merged common ancestors
   result = Number(userInput[0])

=======
   result = Number(userInput[0])
>>>>>>> 72fb3844530d97cf251a295fd983030c5e3ab3bb
   for(let i = 1; i < userInput.length; i++){
      let symbol = userInput[i]
      let nextNum = Number(userInput[i+1])
      if(userInput[1] === "*" && userInput[2] === "" && userInput[3] === "*"){
         tempMultiplier = userInput[0]
         result = userInput[0] * userInput[4]
      } else {

         switch(symbol){
            case "+": result += nextNum
            break
            case "-": result -= nextNum
            break
            case "/": result /= nextNum
            break
            case "*": result *= nextNum
            break
         }
      }
      result = result.toString()
      screen.value = result.substring(0, 8)
   }
   tempNum = ""
   userInput = []
   
}

//deals with % button input from user - only works with number, *, number
function percentage(){
   if(userInput[1] === "*" && userInput.length === 2){
      userInput.push(tempNum)
      screen.value = Number(userInput[2])*(Number(userInput[0])/100)
   } else {
      screen.value = "0"
   }
   userInput = []
   tempNum = ""
}