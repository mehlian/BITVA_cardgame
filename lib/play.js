function discardCard(gso, card){
	let playedCard = gso.players[gso.activePlayer].cards[card];
	gso.players[gso.activePlayer].cards[card] = null;
	gso.players[gso.activePlayer].played.push(playedCard);
	return gso;
}

function setItem(gso, card){
	let player = gso.players[gso.activePlayer];
	if(player.cards[card].type=="Item"){
		player.item = gso.players[gso.activePlayer].cards[card];
		player.cards[card] = null;
	}

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


function heal(gso, card){
	// Active player
	let player = gso.players[gso.activePlayer];

	// Has a healing card
	let cardP = player.cards[card];

	// Change health
	if(cardP.effect=="Heal"){
		if(player.maxHealth<player.health+cardP.points){
			player.health = player.maxHealth
		} else {
			player.health = player.health+cardP.points;
		}
		player.played.push(cardP);
		player.cards[card] = null;
	}

	return gso;
}

function steal(){

}

function exchangeAll(){

}

exports.discardCard = discardCard;
exports.setItem = setItem;
exports.hit = hit;
exports.heal = heal;
