let humanScore = 0;
let computerScore = 0;

const newRound = document.querySelector(".newRound");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

// event for human choices

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissor.addEventListener("click", playRound);
document.querySelectorAll(".newRound").forEach((item) => {
  item.addEventListener("click", startNew);
});

//displaying score

function updateScore() {
  document.querySelector(".cpuscore").innerHTML = +computerScore;
  document.querySelector(".playerscore").innerHTML = +humanScore;

  document.querySelector(".result").setAttribute("style", "display:block");

  if (computerScore == 5 || humanScore == 5) {
    if (computerScore == 5) {
      document.querySelector(".loose").setAttribute("style", "display:flex");
    } else {
      document.querySelector(".win").setAttribute("style", "display:flex");
    }

    humanScore = 0;
    computerScore = 0;
  }
}

function playRound(e) {
  e.preventDefault();
  //getting human choices through click
  let humanChoice = e.target.parentElement.id;

  //using math.random to get random cpu choice
  const choices = ["rock", "paper", "scissor"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  //checking for the winner
  if (computerChoice == humanChoice)
    document.querySelector(".result").innerHTML = "Draw!";
  else if (computerChoice == "rock" && humanChoice == "paper") {
    document.querySelector(".result").innerHTML =
      `you win` + ` ` + humanChoice + ` ` + `beats` + ` ` + computerChoice;
    humanScore = humanScore + 1;
  } else if (computerChoice == "rock" && humanChoice == "scissor") {
    document.querySelector(".result").innerHTML =
      `you loose!` + ` ` + computerChoice + ` ` + `beats` + ` ` + humanChoice;
    computerScore = computerScore + 1;
  } else if (computerChoice == "scissor" && humanChoice == "paper") {
    document.querySelector(".result").innerHTML =
      `you loose!` + ` ` + computerChoice + ` ` + `beats` + ` ` + humanChoice;
    computerScore = computerScore + 1;
  } else if (computerChoice == "scissor" && humanChoice == "rock") {
    document.querySelector(".result").innerHTML =
      `you win` + ` ` + humanChoice + ` ` + `beats` + ` ` + computerChoice;
    humanScore = humanScore + 1;
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    document.querySelector(".result").innerHTML =
      `you loose!` + ` ` + computerChoice + ` ` + `beats` + ` ` + humanChoice;
    computerScore = computerScore + 1;
  } else if (computerChoice == "paper" && humanChoice == "scissor") {
    document.querySelector(".result").innerHTML =
      `you win` + ` ` + humanChoice + ` ` + `beats` + ` ` + computerChoice;
    humanScore = humanScore + 1;
  }

  // updating score after each round
  updateScore();
}

//starting new round

function startNew() {
  document.querySelectorAll(".popup").forEach((item) => {
    item.setAttribute("style", "display:none,");
  });
  // document.querySelector(".loose").setAttribute("style", "display:none");
  document.querySelector(".cpuscore").innerHTML = +computerScore;
  document.querySelector(".playerscore").innerHTML = +humanScore;
  document.querySelector(".result").innerHTML = "READY";
}
