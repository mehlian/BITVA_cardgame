let specActCards = {
	"Exchange All" : exchangeCards,
	"Steal" : stealCard,

}

function shuffle(input) {
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

function discardCard(gso, card){
	if(!isActionPossible(gso)){
		return changeTurn(gso)
	} else {
		let playedCard = gso.players[gso.activePlayer].cards[card];
		gso.players[gso.activePlayer].cards[card] = null;
		gso.players[gso.activePlayer].played.push(playedCard);
		return checkActions(gso);
	}
}

function setItem(gso, card){
	if(!isActionPossible(gso)){
		return changeTurn(gso)
	} else {
		let player = gso.players[gso.activePlayer];
		if(player.cards[card].type=="Item"){
			player.item = gso.players[gso.activePlayer].cards[card];
			player.cards[card] = null;
			player.effect = player.item.effect;
			return checkActions(gso);
		} else {
			return gso;
		}
	}
}

function isActionPossible(gso){
	if(gso.activeActions>0){
		return true;
	} else {
		return false;
	}
}

function changeTurn(gso){
	let p1 = gso.players[gso.activePlayer];
	let p2 = gso.players[Math.abs(gso.activePlayer-1)];
	if(p1.health>0 && p2.health>0){
		gso.activeActions =3;
		gso.activePlayer = Math.abs(gso.activePlayer-1);
	}
	return gso;

}

function checkActions(gso){
	if(gso.players[gso.activePlayer]<= 0 || gso.players[Math.abs(gso.activePlayer-1)]<=0){
		console.log("Someone died!")
	} else {
		gso.activeActions -=1;
		return gso;
	}
}

function hit(gso, card1, card2){
	if(!isActionPossible(gso)) {
		return changeTurn(gso);
	} else {
		console.log("No turn change, proceed");
		// set players
		let attackingP = gso.players[gso.activePlayer];
		let defendingP = gso.players[Math.abs(gso.activePlayer-1)];
		
		//set cards
		let attackCard = attackingP.cards[card1];
		attackingP.played.push(attackCard);
		attackingP.cards[card1] = null;
		// Was it Effect Attack card (no protection for those)
		if(attackCard.points==0 && defendingP.deck!=null){
			console.log("A very special attack card");
			return specActCards[attackCard.effect](gso, card1);

		} else if(attackCard.effect == "Hit"){
			console.log("We have a HIT");
			// Items check
			if(attackingP.item!=null && defendingP.item!=null){
				// both players have items
				console.log("both players have items");

			} else if (attackingP.item!=null){
				// only attacking player has an item
				console.log("attacking player havs an items");

			} else if (defendingP.item!=null){
				// only defending player has an item
				console.log("defending player has an items");
				if(defendingP.item.effect=="protection"){
					return checkActions(hitShield(gso, attackCard));
				}
				if(defendingP.item.effect=="Reflect half"){
					return checkActions(hasReflection(gso, attackCard));
				}

			} else {
				// no items, blood bath!!!!
				defendingP.health -= attackCard.points;
			}
			return checkActions(gso);
		} else {
			console.log("An item shouldn't be used that way");
			return gso;
		}
	}
}

function hitShield(gso, attackCard){
	// set players
	let attackingP = gso.players[gso.activePlayer];
	let defendingP = gso.players[Math.abs(gso.activePlayer-1)];
	
	if(defendingP.item.points<attackCard.points){
		defendingP.health = defendingP.health - (attackCard.points - defendingP.item.points);
		defendingP.item = null;
	} else if(defendingP.item.points==attackCard.points){
		defendingP.item = null;
	} else {
		defendingP.item.points = defendingP.item.points-attackCard.points;
	}
	return gso;
}

function hasReflection(gso, attackCard){
	// set players
	let attackingP = gso.players[gso.activePlayer];
	let defendingP = gso.players[Math.abs(gso.activePlayer-1)];

	if(defendingP.item.points<=attackCard.points){
		attackingP.health -= Math.round(attackCard.points/2)
		defendingP.item = null;
	} else {
		attackingP.health -= Math.round(attackCard.points/2)
		defendingP.item.points = defendingP.item.points-attackCard.points;
	}
	return gso;
}


function heal(gso, card){
	if(!isActionPossible(gso)) {
		return changeTurn(gso);
	} else {
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
			return checkActions(gso)
		} else {
			return gso;
		}
	}
}

function stealCard(gso, card){
	let attackingP = gso.players[gso.activePlayer];
	let defendingP = gso.players[Math.abs(gso.activePlayer-1)];

	// Save a card to played
	attackingP.played.push(attackingP.cards[card]);
	attackingP.cards[card] = null;

	// Take the opponent next card and save as an item
	attackingP.item = defendingP.deck[0];
	defendingP.deck.shift();

	return checkActions(gso);
}

function exchangeCards(gso, card){
	let attackingP = gso.players[gso.activePlayer];
	let defendingP = gso.players[Math.abs(gso.activePlayer-1)];

	// Save a card to played
	attackingP.played.push(attackingP.cards[card]);
	attackingP.cards[card] = null;

	let oldCards = defendingP.cards;
	defendingP.cards = defendingP.deck.slice(0,5);

	defendingP.deck = defendingP.deck.slice(5)
	defendingP.deck = defendingP.deck.concat(oldCards);
	defendingP.deck = shuffle(defendingP.deck);
	
	return checkActions(gso);
}

function specialAttack(gso, card){
	if(!isActionPossible(gso)) {
		return changeTurn(gso);
	} else {
		return gso;
	}
}

exports.discardCard = discardCard;
exports.setItem = setItem;
exports.hit = hit;
exports.heal = heal;
