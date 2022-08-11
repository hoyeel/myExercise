const cards = [
    ['Spade', 'A'],
    ['Diamond', 'J'],
    ['Club', '3'],
    ['Heart', '6'],
    ['Spade', 'K'],
    ['Club', '2'],
    ['Heart', 'Q'],
    ['Spade', '6'],
    ['Heart', 'J'],
    ['Spade', '10'],
    ['Club', '4'],
    ['Diamond', 'Q'],
    ['Diamond', '3'],
    ['Heart', '4'],
    ['Club', '7']
];

function compareCard(cardA, cardB) {
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = ["Diamond", "Club", "Heart", "Spade"];
    const [suitA, rankA] = cardA;
    const [suitB, rankB] = cardB;
    const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);
    if (ranksDiff !== 0) {
        return ranksDiff;
    } else {
        return suits.indexOf(suitA) - suits.indexOf(suitB);
    }
}

//Count the number of card which is of suit Spade. (Hints: using reduce)
console.log(cards.filter(function(pattern){return pattern[0]=="Spade";}).length);


//Remove all the card that is smaller than ["Club", "3"].
console.log(cards.filter(function(elem){
    return compareCard(elem,["Club", "3"])<0;
}))


//Count the number of card which is of suit Diamond or Heart and with the rank larger than or equal to J.
console.log(cards.filter(function(card){return (card[0]=="Diamond")|| (compareCard(card,["Heart","J"])>=0)}).length);

//Replace all of the cards with suit Club to suit Diamond, keeping the same rank.
let q3Cards=cards.map((card)=>{
    if(card[0]=="Club"){
        return ["Diamond",card[1]]
    }
    return card;
})

console.log(q3Cards);


//Replace all of the cards with rank A to rank 2. Keeping the same suit.
let q4Cards=cards.map((card)=>{
    if(card[1]=="A"){
        return[card[0],"2"]
    }
    return card;
})
console.log(q4Cards);

//console.log(cards);