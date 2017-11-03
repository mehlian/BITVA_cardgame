let cards = {
		"bes" : {
			"name" : "Bes",
			"type" : "Action",
			"effect" : "Hit",
			"points" : 1
		},
		"bajun" : {
			"name" : "Cat-Bajun",
			"type" : "Action",
			"effect" : "Hit",
			"points" : 1
		},
		"volkodlak" : {
			"name" : "volkodlak",
			"type" : "Action",
			"effect" : "Hit",
			"points" : 2
		},
		"sivka" : {
			"name" : "Sivka-Burka",
			"type" : "Action",
			"effect" : "Hit",
			"points" : 2
		},
		"skelet" : {
			"name" : "Skelet",
			"type" : "Action",
			"effect" : "Hit",
			"points" : 3
		},
		"Wolf" : {
			"name" : "Grey Wolf",
			"type" : "Action",
			"effect" : "Hit",
			"points" : 3
		},
		"upyr" : {
			"name" : "Upyr",
			"type" : "Action",
			"effect" : "Hit",
			"points" : 4
		},
		"bogatyr" : {
			"name" : "Bogatyr",
			"type" : "Action",
			"effect" : "Hit",
			"points" : 4
		},
		"apple" : {
			"name" : "Golden Apple",
			"type" : "Action",
			"effect" : "Heal",
			"points" : 3
		},
		"berehynia" : {
			"name" : "Berehynia",
			"type" : "Action",
			"effect" : "Heal",
			"points" : 5
		},
		"likhoradka" : {
			"name" : "Likhoradka",
			"type" : "Action",
			"effect" : "Heal",
			"points" : 5
		},
		"firebird" : {
			"name" : "Firebird",
			"type" : "Action",
			"effect" : "Exchange All",
			"points" : 0
		},
		"invisibility" : {
			"name" : "Invisibility",
			"type" : "Action",
			"effect" : "Steal",
			"points" : 0
		},
		"mirror" : {
			"name" : "Magical Mirror",
			"type" : "Item",
			"effect" : "Reflect half",
			"points" : 2
		},
		"ziva" : {
			"name" : "Ziva Voda",
			"type" : "Item",
			"effect" : "+1 health turn",
			"points" : 3
		},
		"mertva" : {
			"name" : "Mertva Voda",
			"type" : "Item",
			"effect" : "-1 health turn",
			"points" : 3
		},
		"kladenets" : {
			"name" : "kladenets",
			"type" : "Item",
			"effect" : "+1 your hits",
			"points" : 2
		},
		"shiels_s" : {
			"name" : "Small Shield",
			"type" : "Item",
			"effect" : "protection",
			"points" : 3
		},
		"shield_b" : {
			"name" : "Big Shield",
			"type" : "Item",
			"effect" : "protection",
			"points" : 5
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
			effect: null,
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
			effect: null,
		}
	]

	let playersCardsSet = giveCards(players);
	
	/*for(cars of playersCardsSet){
		console.log(cars)
	}*/

	return {
		activePlayer: Math.floor((Math.random() * 0) + 1),
		activeActions: 3,
		players: playersCardsSet
	};
}

exports.gameSetup = gameSetup;