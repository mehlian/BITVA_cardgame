function discardCard(gso, card){
	let playedCard = gso.players[gso.activePlayer].cards[card];
	gso.players[gso.activePlayer].cards[card] = null;
	gso.players[gso.activePlayer].played.push(playedCard);
	return gso;
}

function setItem(gso, card){
	gso.players[gso.activePlayer].item = gso.players[gso.activePlayer].cards[card];
	gso.players[gso.activePlayer].cards[card] = null;

	return gso;
}

function hit(gso, card1, card2){
	// set players
	let attackingP = gso.players[gso.activePlayer];
	let defendingP = gso.players[Math.abs(gso.activePlayer-1)];
	
	//set cards
	let attackCard = attackingP.cards[card1];

	// move attacking card to played
	attackingP.played.push(attackCard)

	// remove from hand
	attackingP.cards[card1] = null;

	//change health
	if(defendingP.item && defendingP.item.effect=="protection"){
		if(defendingP.item.points<attackCard.points){
			defendingP.health = defendingP.health - (attackCard.points - defendingP.item.points);
			defendingP.item = null;
		} else if(defendingP.item.points==attackCard.points){
			defendingP.item = null;
		} else {
			defendingP.item.points = defendingP.item.points-attackCard.points;
		}
	} else {
		defendingP.health = defendingP.health - attackCard.points;
	}

	return gso;
}

function heal(){

}

function steal(){

}

function exchangeAll(){

}

exports.discardCard = discardCard;
exports.setItem = setItem;
exports.hit = hit;
