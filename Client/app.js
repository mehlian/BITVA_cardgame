const {ipcRenderer} = require('electron')
ipcRenderer.on('GSO', (event, arg) => {
  console.log(event, arg) // prints "pong"
  renderGame(arg);
})

function renderGame(gso){
	//Assign hero and villain for story mode
	//mode is taken from gso.mode
	let hero;
	let villain;

	if(gso.players[gso.activePlayer].alignment=="hero"){
		hero = gso.players[gso.activePlayer];
		villain = gso.players[Math.abs(gso.activePlayer-1)];
	} else {
		hero = gso.players[Math.abs(gso.activePlayer-1)];
		villain = gso.players[gso.activePlayer];
	}

	document.getElementById("villainAvatar").innerHTML = villain.name;
	document.getElementById("heroAvatar").innerHTML = hero.name;

	displayCards(hero, "heroHand");
	displayCards(villain, "villainHand");
}


function displayCards(player, selector){
	console.log(player.name);
	let emptyCards = document.querySelectorAll("#"+selector+" div.card");

	for(let i=0; i<5; i++){
		if(player.cards[i]){
			emptyCards[i].innerHTML = player.cards[i].name;
		} else {
			emptyCards[i].innerHTML = "empty";
		}
	}
}