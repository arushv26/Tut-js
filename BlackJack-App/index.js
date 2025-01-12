// let firstcard = getRandomCard
// let secondcard = getRandomCard
let player ={
    Name : "Arush",
    Chips : 130
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl =document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.Name + ": $"+player.Chips

function getRandomCard(){
    let randCard = Math.floor(Math.random()*13)+1
    if(randCard ==1){
        return 11
    }else if(randCard>=11){
        return 10
    }else{
        return randCard
    }
}


function startGame(){
        cards.push(getRandomCard())
        cards.push(getRandomCard())
        isAlive = true
        renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards :"
    sum=0
    for (let i =0;i<cards.length;i++){
        cardEl.textContent += cards[i]+ " "
        sum+=cards[i]
    }
    sumEl.textContent = "Sum : "+ sum
    if(sum < 21){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "You've got the BlackJack"
        hasBlackJack = true
    }else{
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive == true && hasBlackJack ==false){
        cards.push(getRandomCard())
        // sum=sum+10
        renderGame()
    }
   
}