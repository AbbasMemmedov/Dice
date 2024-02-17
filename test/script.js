let button = document.querySelector(".button");
let random = 1;
let dice = document.querySelectorAll("#dice");

function creater(secim) {
  if (dice.length < secim) {
    while (dice.length < secim) {
      let newDice = document.createElement("img");
      newDice.src = "/images/dice1.png";
      newDice.id = "dice";
      document.querySelector(".images").appendChild(newDice);
      dice = document.querySelectorAll("#dice");
    }
  } else {
    while (dice.length > secim) {
      document.querySelector(".images").removeChild(dice[dice.length - 1]);
      dice = document.querySelectorAll("#dice");
    }
  }
}

function roll() {
  for (let i = 0; i < dice.length; i++) {
    random = Math.ceil(Math.random() * 6);
    switch (random) {
      case 1:
        dice[i].src = "/images/dice1.png";
        break;
      case 2:
        dice[i].src = "/images/dice2.png";
        break;
      case 3:
        dice[i].src = "/images/dice3.png";
        break;
      case 4:
        dice[i].src = "/images/dice4.png";
        break;
      case 5:
        dice[i].src = "/images/dice5.png";
        break;
      case 6:
        dice[i].src = "/images/dice6.png";
        break;
    }
  }
}
