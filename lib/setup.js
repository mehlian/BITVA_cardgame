let cards = {
		"bes" : {
			"name" : "Bes",
			"origin" : "Action",
			"type" : "Hit",
			"value": 1,
			"health": 0,
			"action": "hit",
			"onEvent": null,
		},
		"bajun" : {
			"name":"Cat-Bajun",
			"origin" : "Action",
			"type" : "hit",
			"value": 1,
			"health": 0,
			"action": "hit",
			"onEvent": null,
		},
		"volkodlak" : {
			"name" : "Volkodlak",
			"origin" : "Action",
			"type" : "hit",
			"value": 2,
			"health": 0,
			"action": "hit",
			"onEvent": null,
		},
		"sivka" : {
			"name" : "Sivka-Burka",
			"origin" : "Action",
			"type" : "hit",
			"value": 2,
			"health": 0,
			"action": "hit",
			"onEvent": null,
		},
		"skelet" : {
			"name" : "Skelet",
			"origin" : "Action",
			"type" : "Hit",
			"value": 3,
			"health": 0,
			"action": "hit",
			"onEvent": null,
		},
		"Wolf" : {
			"name" : "Grey Wolf",
			"origin" : "Action",
			"type" : "hit",
			"value": 3,
			"health": 0,
			"action": "hit",
			"onEvent": null,
		},
		"upyr" : {
			"name" : "Upyr",
			"origin" : "Action",
			"type" : "hit",
			"value": 4,
			"health": 0,
			"action": "hit",
			"onEvent": null,
		},
		"bogatyr" : {
			"name" : "Bogatyr",
			"origin" : "Action",
			"type" : "hit",
			"value": 4,
			"health": 0,
			"action": "hit",
			"onEvent": null,
		},
		"apple" : {
			"name" : "Golden Apple",
			"origin" : "Action",
			"type" : "heal",
			"value": 3,
			"health": 0,
			"action": "heal",
			"onEvent": null,
		},
		"berehynia" : {
			"name" : "Berehynia",
			"type" : "Action",
			"type" : "heal",
			"value": 5,
			"health": 0,
			"action": "heal",
			"onEvent": null,
		},
		"likhoradka" : {
			"name" : "Likhoradka",
			"type" : "heal",
			"value": 5,
			"health": 0,
			"action": "heal",
			"onEvent": null,
		},
		"firebird" : {
			"name" : "Firebird",
			"oriigin" : "Action",
			"type" : "swipe",
			"value": 0,
			"health": 0,
			"action": "swipe",
			"onEvent": null,
		},
		"invisibility" : {
			"name" : "Invisibility",
			"origin" : "Action",
			"type" : "steal",
			"value": 0,
			"health": 0,
			"action": "steal",
			"onEvent": null,
		},
		"mirror" : {
			"name" : "Magical Mirror",
			"origin" : "Item",
			"type" : "reflect",
			"value": 0,
			"health": 2,
			"action": "place",
			"onEvent": {
				"attack":"reflect",
			},
		},
		"ziva" : {
			"name" : "Ziva Voda",
			"origin" : "Item",
			"type" : "modHealth",
			"value": +1,
			"health": 2,
			"action": "place",
			"onEvent": {
				"turn":"modHealth",
			},
		},
		"mertva" : {
			"name" : "Mertva Voda",
			"origin" : "Item",
			"type" : "modHealth",
			"value": -1,
			"health": 2,
			"action": "place",
			"onEvent": {
				"turn":"modHealth",
			},
		},
		"kladenets" : {
			"name" : "Kladenets",
			"origin" : "Item",
			"type" : "modAttackMe",
			"value": +1,
			"health": 2,
			"action": "place",
			"onEvent": {
				"turn":"modAttackMe",
			},
		},
		"shiels_s" : {
			"name" : "Small Shield",
			"origin" : "Item",
			"type" : "shield",
			"value": 0,
			"health": 3,
			"action": "place",
			"onEvent": {
				"turn":"protection",
			},
		},
		"shield_b" : {
			"name" : "Big Shield",
			"origin" : "Item",
			"type" : "shield",
			"value": 0,
			"health": 5,
			"action": "place",
			"onEvent": {
				"turn":"protection",
			},
		}
	}


let decks = {
	"ivan" : {
		"bajun" : 4,
		"sivka" : 3,
		"Wolf" : 2,
		"bogatyr" : 1,
		"apple" : 1,
		"berehynia" : 1,
		"firebird" : 1,
		"invisibility" : 1,
		"mirror" : 1,
		"ziva" : 1,
		"mertva" : 1,
		"kladenets" : 1,
		"shiels_s" : 1,
		"shield_b" : 1
	},
	"koschei" : {
		"bes" : 4,
		"volkodlak" : 3,
		"skelet" : 2,
		"upyr" : 1,
		"apple" : 1,
		"likhoradka" : 1,
		"firebird" : 1,
		"invisibility" : 1,
		"mirror" : 1,
		"ziva" : 1,
		"mertva" : 1,
		"kladenets" : 1,
		"shiels_s" : 1,
		"shield_b" : 1
	}

}

function createDeck(charName){
	let newArray = [];

	//Create n cards of this name and pit into array
	for(card in decks[charName]){
		for(var i=0; i<decks[charName][card]; i++){
			newArray.push(cards[card]);
		}
	};

	return newArray;
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

function giveCards(players){
	for(player of players){
		for(var i=0; i<5; i++){
			player.cards.push(player.deck.shift());
		}
	};
	return players;
}

function gameSetup(char1, char2){

	let players = [
		{
			character: "ivan",
			health: 11,
			maxHealth: 11,
			name: "Ivan Tsarevich",
			deck: shuffle(createDeck("ivan")),
			cards: [],
			item: null,
			played: [],
			alignment: "hero",
		}, 
		{
			character: "koschei",
			health: 12,
			maxHealth: 12,
			name: "Koschei Deathless",
			deck: shuffle(createDeck("koschei")),
			cards: [],
			item: null,
			played: [],
			alignment: "villain",
		}
	]

	let playersCardsSet = giveCards(players);

	return {
		activePlayer: Math.floor((Math.random() * 0) + 1),
		activeActions: 3,
		players: playersCardsSet,
		action: null,
		mode: "Hero", //Hero foe story and daily, Player for PvP and Tournemants
		phase: "START"
	};
}

exports.gameSetup = gameSetup;