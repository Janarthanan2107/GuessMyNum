// selecting elements

// inputs
const btnAgain = document.getElementById('btnAgain')
const btnCheck = document.getElementById('btnCheck')
const userInputEl = document.getElementById('input')

// outputs
const randomNumEl = document.getElementById('randomNum')
const messageEl = document.getElementById('message')
const scoreEl = document.getElementById('score')
const highScoreEl = document.getElementById('highScore')

// global var
let score = 10;

// generating random numbers
const getRandomNumber = function () {
    return Math.trunc(Math.random() * 100 + 1)
}

const randomNumber = getRandomNumber()

// i just added a function for a styles while the action does!

// this all will reflect in DOM
const styleForEqual = function () {
    randomNumEl.innerText = "🥳";
    messageEl.innerText = 'Your are entered a correct value!!';
    console.log('Your are entered a correct value!!')
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'black';
    highScoreEl.innerText = score;
    highScoreEl.style.color = 'orange'
}

const styleForDefault = function () {
    randomNumEl.innerText = "?";
    messageEl.innerText = 'Start Guessing...';
    document.body.style.backgroundColor = '#282828';
    document.body.style.color = 'gray';
    scoreEl = score;
    userInputEl.value = '';
    randomNumber = getRandomNumber();
}

const highMessage = function () {
    messageEl.innerText = 'Your are entered a high value'
    console.log('Your are entered a high value')
    // for scores decrement
    score = score - 1;
    scoreEl.innerText = score;
}

const lowMessage = function () {
    messageEl.innerText = 'Your are entered a low value'
    console.log('Your are entered a low value')
    // for scores decrement
    score = score - 1;
    scoreEl.innerText = score;
}

const validMessage = function () {
    messageEl.innerText = 'Enter a valid entry in-between 1 to 100!'
    console.log('Enter a valid entry!')
    messageEl.style.color = 'red'
}

const styleForLost = function () {
    randomNumEl.innerText = "🤭";
    messageEl.innerText = 'You lost the game!!';
    console.log('You lost the game!!')
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'black';
}

// using eventListers for actions
btnCheck.addEventListener('click', function () {
    //changing string to number
    const userInput = Number(userInputEl.value);
    console.log(userInput)

    // logic part that is comparison or validation
    if (userInput > 0 && userInput <= 100) {
        // after validation the userInput value
        if (score > 0) {
            // this part will start if scores are above 0
            if (userInput === randomNumber) {
                styleForEqual()
            } else if (userInput > randomNumber) {
                highMessage()
            } else if (userInput < randomNumber) {
                lowMessage()
            }
        } else {
            // this part will start if scores are below 0
            styleForLost()
        }
    } else {
        validMessage()
    }
})

btnAgain.addEventListener('click', function () {
    styleForDefault()
})

