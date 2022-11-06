'use strict'

let generatedNumber = document.querySelector('.number')
let guessedNumber = document.querySelector('.guess')
let displayMessage = document.querySelector('.message')
let checkBtn = document.querySelector('.btn.check')
let againBtn = document.querySelector('.btn.again')
let Score = document.querySelector('.score')
let highScore = document.querySelector('.highscore')

let secretNumber = Math.trunc(Math.random()*20 +1)
let score = 20





function showMessage(text){
    displayMessage.textContent = text
}

checkBtn.addEventListener('click', ()=>{
    const guess = +guessedNumber.value
    Score.textContent = score

    if(!guess){
        showMessage("⛔ No Number")
    } else if (guess === secretNumber){
        showMessage("🎊You Won..")
        generatedNumber.textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        let highscore = 0
        if(score > highscore){
            highscore = score
            highScore.textContent = highscore
        }

    } else if (guess !== secretNumber){
        if(score > 1){
            showMessage(guess>secretNumber? "📈 Too High": "📉 Too Low")
            score--
        } else {
            showMessage("👎 Better Luck next time")
            score = 0
        }
    }    
})

againBtn.addEventListener('click', ()=>{
    score = 20
    Score.textContent = score
    secretNumber = Math.trunc(Math.random()*20 +1)
    showMessage('Start Guessing...')
    generatedNumber.textContent = '?'
    guessedNumber.value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})