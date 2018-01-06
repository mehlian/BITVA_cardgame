const {ipcRenderer} = require('electron')
ipcRenderer.on('GSO', (event, arg) => {
  console.log(event, arg) // prints your GSO
  pharsePhase(arg);

})

function pharsePhase(gso){
	console.log("PHASE: "+gso.phase);
	switch (gso.phase){
	case "START":
        renderGame(gso);
        actionsForPlayer(gso.players[gso.activePlayer]);
        break;
    default:
        renderGame(gso);
	}
}

function renderGame(gso){
	displayPlayer(0, gso.players[0])
	displayPlayer(1, gso.players[1])
}

function displayPlayer(n, player){
	let p = ".player" + n;
	let a = "../Assets/Chars/"+player.character+".png";
	document.querySelector(p + " .playerAvatar").innerHTML = "<img src='"+a+"'/>";
	displayCards(player, p)
}


function displayCards(player, selector){
	//console.log(player.name);
	//console.log(selector);

	//The hand
	let emptyCards = document.querySelectorAll(selector+".playerCards .card");
	for(let i=0; i<5; i++){
		if(player.cards[i]){
			let addr = "../Assets/Cards/"+player.cards[i].img+".png";
			emptyCards[i].style.backgroundImage = "url("+addr+")";
			emptyCards[i].innerHTML = player.cards[i].value;
		} else {
			emptyCards[i].innerHTML = "empty";
		}
	}
	
	//Played cards and the Deck
	let playedCards = document.querySelector(".middleBlock"+selector+" .played");

	let deckPlace = document.querySelector(selector+" .playerDeck");
	let htmlStart = '<img src = "../Assets/Cards/'; 
	let htmlEnd = '.png"/>';

	if (player.played.length==0){
		//No played cards yet, all in the deck
		deckPlace.innerHTML = htmlStart+"deck_all"+htmlEnd
		playedCards.style.backgroundImage = "url(../Assets/Cards/blank.png)";
	}else if (player.played.length<5) {
		//5 or less cards played others are in deck
		deckPlace.innerHTML = htmlStart+"deck_1.3"+htmlEnd
		playedCards.style.backgroundImage = "url(../Assets/Cards/empty.png)";
	}else if (player.played.length<10) {
		//10 or less cards played others are in deck
		deckPlace.innerHTML = htmlStart+"deck_2.3"+htmlEnd
		playedCards.style.backgroundImage = "url(../Assets/Cards/deck_1.3.png)";
	}else {
		//more than 10 cards played
		deckPlace.innerHTML = htmlStart+"deck_empty"+htmlEnd
		playedCards.style.backgroundImage = "url(../Assets/Cards/deck_2.3.png)";
	}

	//The Item
	let item = document.querySelector(".middleBlock"+selector+" .touse");
	if(player.item!=null){
		//Doesn't have an item
		item.style.backgroundImage = "url(.../Assets/Cards/"+player.item+".png)";
	} else {
		//Has an item
		item.style.backgroundImage = "url(../Assets/Cards/blank.png)";
	}


}

function actionsForPlayer(player){
	console.log("ACTIVE PLAYER: "+player.name);
}