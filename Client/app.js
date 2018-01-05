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
	// //Assign hero and villain for story mode
	// //mode is taken from gso.mode
	// let hero;
	// let villain;

	// if(gso.players[gso.activePlayer].alignment=="hero"){
	// 	hero = gso.players[gso.activePlayer];
	// 	villain = gso.players[Math.abs(gso.activePlayer-1)];
	// } else {
	// 	hero = gso.players[Math.abs(gso.activePlayer-1)];
	// 	villain = gso.players[gso.activePlayer];
	// }

	// document.getElementById("villainAvatar").innerHTML = villain.name;
	// document.getElementById("heroAvatar").innerHTML = hero.name;

	// displayCards(hero, "heroHand");
	// displayCards(villain, "villainHand");

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
	
	//Played cards
	let playedCards = document.querySelector(".middleBlock"+selector+" .played");
	if (player.played.length==0){
		playedCards.style.backgroundImage = "url(../Assets/Cards/blank.png)";
	}else if (player.played.length==1) {
		playedCards.style.backgroundImage = "url(../Assets/Cards/blank.png)";
	} else {
		playedCards.style.backgroundImage = "url(../Assets/Cards/blank.png)";
	}

	//The Item
	let item = document.querySelector(".middleBlock"+selector+" .item");
	if(player.item!=null){
		item.style.backgroundImage = "url(.../Assets/Cards/"+player.item+".png)";
	} else {
		console.log(player.name);
		item.style.backgroundImage = "url(../Assets/Cards/blank.png)";
	}
}

function actionsForPlayer(player){
	console.log("ACTIVE PLAYER: "+player.name);
}