let button = document.querySelector(".button");
let random = 1;
let dice = document.querySelectorAll("#dice");
let h1 = document.querySelector("h1");

function creater(secim) {
  h1.innerHTML = "";
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
  let point = 0;
  for (let i = 0; i < dice.length; i++) {
    random = Math.ceil(Math.random() * 6);
    switch (random) {
      case 1:
        dice[i].src = "/images/dice1.png";
        point += 1;
        break;
      case 2:
        dice[i].src = "/images/dice2.png";
        point += 2;
        break;
      case 3:
        dice[i].src = "/images/dice3.png";
        point += 3;
        break;
      case 4:
        dice[i].src = "/images/dice4.png";
        point += 4;
        break;
      case 5:
        dice[i].src = "/images/dice5.png";
        point += 5;
        break;
      case 6:
        dice[i].src = "/images/dice6.png";
        point += 6;
        break;
    }
  }
  h1.innerHTML = `point: ${point}`;
}
