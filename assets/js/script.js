var playerScore = 0
var computerScore = 0
var ties = 0

function game(){

function getResult() {
    if (choose === rpsChoose) {
        result = "You tied!"
        ties++
    }
    if (choose === "P" && rpsChoose === "S") {
        result = "You win!"
        playerScore++
    }
    if (choose === "S" && rpsChoose === "P") {
        result = "You lose!"
        computerScore++
    }
    if (choose === "R" && rpsChoose === "P") {
        result = "You win!"
        playerScore++
    }
    if (choose === "P" && rpsChoose === "R") {
        result = "You lose!"
        computerScore++
    }
    if (choose === "S" && rpsChoose === "R") {
        result = "You win!"
        playerScore++
    }
    if (choose === "R" && rpsChoose === "S") {
        result = "You lose!"
        computerScore++
    }
};

    var rpsChoose = window.prompt("Choose R, P, or S");

    var choices = ["R", "P", "S"];

    var choose = choices[Math.floor(Math.random() * choices.length)];

    getResult();

    window.alert("Computer chose " + choose + ".\r\nYou chose " + rpsChoose + ".\r\n" + result);

    window.alert("Computer - " + computerScore + "\r\nYou - " + playerScore + "\r\nTies - " + ties);

    var restart = window.confirm("Do you want to play again?")

    if (restart === true){
        game();
    }   else{
        window.alert("Thanks for playing!")
    }
}

game();

