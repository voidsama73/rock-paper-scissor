let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let humanInput = prompt(`enter your choice`);
  return humanInput.toLocaleLowerCase();
}

function showScore() {
  console.log(`humanscore:${humanScore}`);
  console.log(`computerscore:${computerScore}`);
  if (humanScore > computerScore)
    console.log(
      `...............आदमी ने${
        humanScore - computerScore
      } राउंड की बढ़त के साथ जीत हासिल की............`
    );
  else if (computerScore > humanScore)
    console.log(
      `..............कंप्यूटर ने ${
        computerScore - humanScore
      } राउंड की बढ़त से जीत हासिल की...............`
    );
  else console.log(`draw`);
}
// console.log(getComputerChoice());

function playRound(computerChoice, humanChoice) {
  if (computerChoice == humanChoice) console.log(`Draw`);
  else if (computerChoice == "rock" && humanChoice == "paper") {
    console.log(`you win! ${humanChoice} beats ${computerChoice}`);
    humanScore = humanScore + 1;
  } else if (computerChoice == "rock" && humanChoice == "scissors") {
    console.log(`you loose! ${computerChoice} beats ${humanChoice}`);
    computerScore = computerScore + 1;
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    console.log(`you loose! ${computerChoice} beats ${humanChoice}`);
    computerScore = computerScore + 1;
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    console.log(`you win! ${humanChoice} beats ${computerChoice}`);
    humanScore = humanScore + 1;
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    console.log(`you loose! ${computerChoice} beats ${humanChoice}`);
    computerScore = computerScore + 1;
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    console.log(`you win! ${humanChoice} beats ${computerChoice}`);
    humanScore = humanScore + 1;
  } else console.log(`invalid choice`);
}

function playGame() {
  let rounds = prompt(`enter the number of rounds you want to play`);

  for (let i = 1; i <= rounds; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }
  showScore();
}

playGame();
