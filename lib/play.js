function discardCard(gso, card){
	console.log(gso.activePlayer);
	gso.players[gso.activePlayer].cards[card] = null;
	
	return gso;
}

function setItem(){

}

function hit(){

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
