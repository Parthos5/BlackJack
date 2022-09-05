    let hasblackjack = false
    let isalive = true
    let messages;
    let card

    
let player = {
    name: 'Wallet',
    money: 200
}

let playerdetails = document.getElementById("playerel");

playerdetails.innerText = player.name + ': $'+player.money

function getrandomcard(){
    let a = Math.floor(Math.random()*13) + 1;
    if(a === 1){
        return 11;
    }
    else if(a>10){
        return 10;
    }
    else{
        return a;
    }

}

function startgame(){
    card = [getrandomcard(),getrandomcard()];
    let sum = card[0]+card[1]
    let sumEl = document.getElementById("sum")
    let welcome = document.getElementById("message")
    console.log(welcome)
    let cards = document.getElementById("carddisplay")
    sumEl.textContent = 'Sum:'+sum;
    cards.textContent = 'Cards: '

    player.money -= 20
    playerdetails.innerText = player.name + ': $'+player.money

    for(let i = 0;i<card.length;i++)
    {
        cards.textContent += card[i] + ' ';
    }

if(sum <=20){
    messages = 'Do you want to draw a new card?'
}

else if(sum === 21){
    hasblackjack = true
    messages = "You've got BlackJack!"
    player.money += 40
    playerdetails.innerText = player.name + ': $'+player.money
}

else{
    isalive = false
    messages = 'You are out of the game:('
}

console.log(messages);
welcome.textContent = messages;

console.log(hasblackjack)
console.log(isalive)
}

function newcard(){
    let welcome = document.getElementById("message")
    console.log(welcome)

    let cards = document.getElementById("carddisplay")
    let sum =0;

    player.money -= 10
    playerdetails.innerText = player.name + ': $'+player.money

    if(card.length>3)
        {
            cards.textContent = 'Press START GAME'
        }
    else{
    let cards = document.getElementById("carddisplay")
    card.push(getrandomcard())
    for(let i =0;i<card.length;i++)
    { 
    /*cards.textContent += ' ' + card[card.length-1];*/ 
    sum = sum + card[i]
    }
    cards.textContent += ' ' + card[card.length -1];
    let sumEl = document.getElementById("sum")
    sumEl.textContent = 'Sum: ' + sum 
    }

    if(sum <=20){
        welcome.textContent = 'Do you want to draw a new card?'
    }
    
    else if(sum === 21){
        hasblackjack = true
        welcome.textContent = "You've got BlackJack!"
        player.money += 40
        playerdetails.innerText = player.name + ': $'+player.money
    }
    
    else{
        isalive = false
        welcome.textContent = 'You are out of the game:(' + ' Press start game to play again'
    }
    
}