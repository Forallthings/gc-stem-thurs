var comChoice = ["rock", "paper", "scissors"]
var userWins = 0
var computerWins = 0
var html =
    "<p>Player wins: " + userWins + "</p>" +
    "<p>Computer wins: " + computerWins + "</p>" +
    "<button onclick="rpsFunction()">Play Again!</button>"
document.getElementById("game").innerHTML = html
define rpsFunction(){
var userChoice = prompt("Pick one: rock, paper, scissors. (Please type in lowercase.)")
var comGuess = comChoice[Math.floor(Math.random() * comChoice.length)]
console.log(comGuess)
console.log(userChoice)

if (userChoice == comGuess) {
    alert("You tied with the computer!")
}
else if (userChoice == "rock" && comGuess == "scissors"){
    userWins++
}
else if (userChoice == "paper" && comGuess == "rock"){
    userWins++
}
else if (userChoice == "scissors" && comGuess == "paper"){
    userWins++
}
else if (userChoice == "rock" && comGuess == "paper"){
    computerWins++
}
else if (userChoice == "scissors" && comGuess == "rock"){
    computerWins++
}
else if (userChoice == "paper" && comGuess == "scissors"){
    computerWins++
}}