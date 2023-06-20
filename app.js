// Шооны нүд хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид рандом-р өгнө
var diceNumber = Math.floor(Math.random() * 6 + 1);
var diceDom = document.querySelector(".dice");

// Тоглогчийн ээлжийг хадгалах хувьсагч,
var activePlayer;

// Тоглогчдийн оноог цуглуулсан хувьсагч
var score;

// Тоглогчийн ээлжийн оноог түр хадгалах хувьсагч
var roundScore;

var isNewGame;

newGame();

// ROLL DICE товчийг дарах үед болох фанкшин
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      changePlayer();
    }
  }
});

// ХОЛД товчийг дарах үед дарах фанкшин
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    score[activePlayer] = score[activePlayer] + roundScore;

    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent =
        "WINNEERinner!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.querySelector(
        ".player-" + activePlayer + "-panel".classList.remove("active")
      );
    } else {
      changePlayer();
    }
  }
});

// NEW товчийг дарах үед болох фанкшин
document.querySelector(".btn-new").addEventListener("click", function () {
  newGame();

  // Шооны зураг арилгах
  diceDom.style.display = "none";
});

function newGame() {
  isNewGame = true;
  activePlayer = 0;
  score = [0, 0];
  roundScore = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  // document.getElementById("name-0").textContent = "Player 1";
  // document.getElementById("name-1").textContent = "Player 2";
  for (let playerNumber = 0; playerNumber < score.length; playerNumber++) {
    document.getElementById(`name-${playerNumber}`).textContent = `Player ${
      playerNumber + 1
    }`;
  }

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

function changePlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Active Inactive ulaan tseg toggle
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Tur shoog alga bolgoh
  diceDom.style.display = "none";
}
