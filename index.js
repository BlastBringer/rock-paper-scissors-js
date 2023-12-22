const computerchoiceDisplay = document.getElementById('computer-choice');  
const userchoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userchoice;
let computerchoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userchoice = e.target.id;
    userchoiceDisplay.innerHTML = userchoice;
    generateComputerChoice();
    getResult();

}));

generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1){
        computerchoice = 'rock';
    }
    if(randomNumber === 2){
        computerchoice = 'paper';
    }
    if(randomNumber === 3){
        computerchoice = 'scissors';
    }
    computerchoiceDisplay.innerHTML = computerchoice;
}

getResult = () => {
    if(computerchoice === userchoice){
        result = 'Its a draw!';
    }
    if(computerchoice === 'rock' && userchoice === 'paper'){
        result = 'You win!';
    }
    if(computerchoice === 'rock' && userchoice === 'scissors'){
        result = 'You lose!';
    }
    if(computerchoice === 'paper' && userchoice === 'rock'){
        result = 'You lose!';
    }
    if(computerchoice === 'paper' && userchoice === 'scissors'){
        result = 'You win!';
    }
    if(computerchoice === 'scissors' && userchoice === 'rock'){
        result = 'You win!';
    }
    if(computerchoice === 'scissors' && userchoice === 'paper'){
        result = 'You lose!';
    }
    resultDisplay.innerHTML = result;
}