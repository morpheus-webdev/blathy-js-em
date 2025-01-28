const playerRow = document.getElementById('player-row');
const enemyRow = document.getElementById('enemy-row');
const cardBack = "https://deckofcardsapi.com/static/img/back.png"
let isEnemyCardsHidden = true;
const initDeckStr = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
let deckId = "";
let playerCards = [];
let playerPoints = 0;
let enemyCards = [];
let enemyPoints = 0;
let isGameOver = false;
function hit() {
    draw("player",1);
}

function stand() {
    isEnemyCardsHidden = false;
    printTable();
    inspectGameState();
    if(enemyPoints < 17 ){
        draw("enemy",1);

    }
    isGameOver ? '' : setTimeout(() => stand(), 2000)
    //TODO
}

async function getDeckId() {
    let res = await fetch(initDeckStr).then(data => data.json());
    deckId = res.deck_id;
}

function getPoint(val){
	let p = 0;
    switch(val){
        case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "10":
            p = parseInt(val);
            break;
        case "JACK": case "QUEEN": case "KING":
            p = 10;
            break;
        case "ACE":
            p = 11;
            break;
    }
    return p;
}

async function draw(entity, num) {
    let res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${num}`).
    then(data => data.json());
    if(entity === "player"){
        res.cards.forEach((card) => {
            playerCards.push(card);
            playerPoints += getPoint(card.value);
        })
    }
    else if(entity === "enemy"){
        res.cards.forEach((card) => {
            enemyCards.push(card);
            enemyPoints+=getPoint(card.value)
        })
    }
    else{
        console.error("Unexpected input")
    }
    console.log(`
        player: ${playerPoints}
        enemy: ${enemyPoints}
        `)
    printTable();
    inspectGameState()
}

function printTable(){
    enemyRow.innerHTML = "";
    enemyCards.forEach((card, index) => {
        const cardImg = document.createElement('img');
        cardImg.classList.add("card");
        if(index === 1 && isEnemyCardsHidden){
            cardImg.src = cardBack;
        }
        else{
            cardImg.src = card.images.png;
        }
        
        enemyRow.appendChild(cardImg)
    })
    
    playerRow.innerHTML = "";
    playerCards.forEach((card) => {
        const cardImg = document.createElement('img');
        cardImg.classList.add("card");
        cardImg.src = card.images.png;
        playerRow.appendChild(cardImg)
    })
}

function inspectGameState(){
    if(playerPoints > 21){
        console.log("BUSTED")
        isGameOver = true;
    }
    else if(enemyPoints > 21){
        console.log("WIN")
        isGameOver = true;
    }
    else if(!isEnemyCardsHidden && enemyPoints >= 17){
        if(enemyPoints > playerPoints){
            console.log("DEALER WINS")
        }
        else if(playerPoints > enemyPoints){
            console.log("WIN")
        }
        else {
            console.log("IT'S A TIE");
            
        }
        isGameOver = true;
    }
}

async function init() {
    await getDeckId();
    draw("player", 2);
    draw("enemy", 2);
}

init();
