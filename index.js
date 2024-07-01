var randomImg = (Math.floor(Math.random() * 6) + 1);

// var randomImgName = `/images/dice${randomImg}.png`; // - this also works
var randomImgName = "/images/dice" + randomImg + ".png";

var diceImage = document.querySelectorAll(".dice img")[0];
diceImage.setAttribute("src", randomImgName);

// first image up second image down
var randomImg2 = (Math.floor(Math.random() * 6) + 1);

// var randomImgName2 = `/images/dice${randomImg2}.png`; // - this also works
var randomImgName2 = "/images/dice" + randomImg2 + ".png";

var diceImage = document.querySelectorAll(".dice img")[1];
diceImage.setAttribute("src", randomImgName2);

// adds a script to change H1 when player 1 or player 2 wins or draws
var winner = document.querySelector("h1");

if (randomImg > randomImg2) {
    winner.innerHTML = "🚩 Player 1 Wins!"
} else if (randomImg2 > randomImg) {
    winner.innerHTML = "Player 2 Wins! 🚩"
} else {
    winner.innerHTML = "Draw! 🤝"
}
console.log(winner)