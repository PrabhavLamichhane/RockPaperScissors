var computerChoice, playerChoice, scores, isPlaying;
scores = [0, 0];
isPlaying = true;
document.querySelector(".game").style.display = "none";
document.querySelector("#btn-1").addEventListener("click", function() {
  document.querySelector(".intro").style.visibility = "hidden";
  document.querySelector(".intro").style.position = "absolute";
  document.querySelector(".game").style.display = "block";
});

// Rock
document.querySelector("#btn-2").addEventListener("click", function() {
  if (isPlaying) {
    computerMove();
    playerChoice = 2;
    document.querySelector(".player-1").src = "pic-2.png";
    checkScores();
    winner();
  }
});

// Paper
document.querySelector("#btn-3").addEventListener("click", function() {
  if (isPlaying) {
    computerMove();
    playerChoice = 3;
    document.querySelector(".player-1").src = "pic-3.png";
    checkScores();
    winner();
  }
});

// Scissors
document.querySelector("#btn-4").addEventListener("click", function() {
  if (isPlaying) {
    computerMove();
    playerChoice = 1;
    document.querySelector(".player-1").src = "pic-1.png";
    checkScores();
    winner();
  }
});

function computerMove() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  document.querySelector(".player-2").src = "pic-" + computerChoice + ".png";
}

function checkScores() {
  console.log("Hello");
  console.log(playerChoice);
  console.log(computerChoice);

  if (
    (playerChoice === 2 && computerChoice === 3) ||
    (playerChoice === 1 && computerChoice === 2) ||
    (playerChoice === 3 && computerChoice === 1)
  ) {
    scores[1]++;
    console.log("Computer score", scores[1]);
    document.querySelector(".computer-score").textContent = scores[1];
  } else if (
    (playerChoice === 3 && computerChoice === 2) ||
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 1 && computerChoice === 3)
  ) {
    scores[0]++;
    console.log("Player score", scores[0]);
    document.querySelector(".player-score").textContent = scores[0];
  }
}

function winner() {
  if (scores[0] >= 5) {
    // Player winner
    document.querySelector("#player").textContent = "WINNER!!!!";
    isPlaying = false;
  } else if (scores[1] >= 5) {
    document.querySelector("#player").textContent = "YOU LOSE!!!!";
    isPlaying = false;
  }
}
