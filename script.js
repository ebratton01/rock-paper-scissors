const choiceButtons = document.querySelectorAll('.choice-button' );
const rounds = document.querySelector('#round-number');
const showPlayAgain = document.querySelector('.button-container')
const playAgain = document.querySelectorAll('.yes-no');
const winText = document.querySelector('.win-text');
const compScore = document.querySelector('#comp');
const playerScore = document.querySelector('#play');
const refresh = document.querySelector('.play-again');
const choices = ['rock', 'paper', 'scissors'];

let round = 1;
let playerSelection;
let reset;
let compChoice;
let playerPoints = 0;
let computerPoints = 0;


refresh.addEventListener('click',() => {location.reload();});
rounds.textContent = round
choiceButtons.forEach((button) => {button.addEventListener('click', getPlayerChoice);});

function getComputerChoice() {
    compChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(compChoice);

    return compChoice;
}

getComputerChoice();

function playRound(playerSelection, compSelection) {
    if (playerSelection == compSelection) {
        // print tie game
        winText.textContent = 'Computer chose ' + compChoice + '. ' + 'Wow... Tie.';
        playerScore.textContent = playerPoints;
        compScore.textContent = computerPoints;
    }
    else if (playerSelection == 'rock' && compSelection == 'paper') {
        // print Ouch! Lost one there
        ++computerPoints;
        winText.textContent = 'Computer chose ' + compChoice + '. ' + 'Ouch! Lost one there.';
        compScore.textContent = computerPoints;
        playerScore.textContent = playerPoints;
    }

    else if (playerSelection == 'scissors' && compSelection == 'rock') {
        // print Ouch! Lost one there
        ++computerPoints;
        winText.textContent = 'Computer chose ' + compChoice + '. ' + 'Ouch! Lost one there.';
        compScore.textContent = computerPoints;
        playerScore.textContent = playerPoints;
    }

    else if (playerSelection == 'paper' && compSelection == 'scissors') {
        // print Ouch! Lost one there
        ++computerPoints;
        winText.textContent = 'Computer chose ' + compChoice + '. ' + 'Ouch! Lost one there.';
        compScore.textContent = computerPoints;
        playerScore.textContent = playerPoints;
    }

    else {
        // print Wow! One win in the books
        ++playerPoints;
        winText.textContent = 'Computer chose ' + compChoice + '. ' + 'Wow! One in the books.';
        playerScore.textContent = playerPoints;
        compScore.textContent = computerPoints;
    }
    ++round;
    rounds.textContent = round;
    checkWinner();
    getComputerChoice();
}

function checkWinner() {
    if (playerPoints == 5 || computerPoints == 5) {
        showPlayAgain.style.visibility = 'visible'
        if(playerPoints == 5){
            // print you win!!
            winText.textContent = 'You win! Good Jorb. Would you like to play again?';
            choiceButtons.forEach(choose => {choose.removeEventListener('click', getPlayerChoice);});
            playAgain.forEach(yesno => {yesno.addEventListener('click', getYesNo);});
        }
        else {
            // print you lose!!
            winText.textContent = 'You lose! U bum. Would you like to play again?';
            choiceButtons.forEach((button) => {button.removeEventListener('click', getPlayerChoice);});
            playAgain.forEach(yesno => {yesno.addEventListener('click', getYesNo);});
        }
    }
}


function getPlayerChoice(choose) {
    playerSelection = (choose.target.id);
    console.log(playerSelection);
    playRound(playerSelection, compChoice, playerPoints, computerPoints);
}

function getYesNo(yesNo) {
    if(yesNo.target.id == 'yes'){
        winText.textContent = 'Then press the reset button, dumbo.'
    }
    else{
        document.open();
        document.write('Farewell.');
        document.close();
    }
}