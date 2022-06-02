const choices = ["rock", "scissor", "paper"]
function game() {
    playRound()
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
  }
function playerChoice() {
    let input = prompt("TYPE SOMETHING");
    while(input == null) {
       input = prompt("ANSWER AGAIN");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    if (check == false) {
        prompt("again");
    }

    input = input.toLowerCase();
    check = validate(input);
    //console.log(input)
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
   return (choices.includes(choice)) 
}
game()