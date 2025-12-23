var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomDiceImagePath1 = "images/dice" + randomNumber1 + ".png";
console.log(randomDiceImagePath1);

document.querySelector(".img1").setAttribute("src", randomDiceImagePath1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var randomDiceImagePath2 = "images/dice" + randomNumber2 + ".png";
console.log(randomDiceImagePath2);

document.querySelector(".img2").setAttribute("src", randomDiceImagePath2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
