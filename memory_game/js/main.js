let cards = [{
  rank : "queen",
  suit : "hearts",
  cardImage : "images/queen-of-hearts.png"
},
{
  rank : "queen",
  suit : "diamonds",
  cardImage : "images/queen-of-diamonds.png"
},
{
  rank : "king",
  suit : "hearts",
  cardImage : "images/king-of-hearts.png"
},
{
  rank : "king",
  suit : "diamonds",
  cardImage : "images/king-of-diamonds.png"
}];

let cardsInPlay = [];
function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}
  function flipCard(){
    let cardId = this.getAttribute('data-id');

    cardElement.this.setAttribute('src', cards[cardId].cardImage);

    checkForMatch();
    if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again.");
    }
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

  }
  function createBoard(){
    for(let i = 0; i < cards.length; i++) {
      const cardElement = document.createElement('img');cardElement.setAttribute('src', "images/back.png");
      cardElement.setAttribute('data-id', i); cardElement.addEventListner('click'; flipCard);
      document.getElementById('game-board').appendChild(cardElement);

    }
  }

  createBoard();
