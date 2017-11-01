/*
{ name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
{ name: 'Berehynia', type: 'Action', effect: 'Heal', points: 5 },
{ name: 'Grey Wolf', type: 'Action', effect: 'Hit', points: 3 },
{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 }
*/

const play =  require("../play");


// User discards a card
test('test action Discard', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			cards: [{ name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }
				],
			played: [],
		}
		],
		activePlayer : 0
	}

	let gso2 = { 
		players : [
		{
			character: "ivan",
			cards: [{ name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					null,
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }
				],
			played: [
				{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
			],
		}
		],
		activePlayer : 0
	}


	let card = 2;

	expect(play.discardCard(gso1, card)).toEqual(gso2);
});

//User sets up an item
test('test action Set Item', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			cards: [{ name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }
				],
			item: null,
		}
		],
		activePlayer : 0
	}

	let gso2 = { 
		players : [
		{
			character: "ivan",
			cards: [{ name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					null,
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }
				],
			item: { name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 }
		}
		],
		activePlayer : 0
	}

	let card = 3;

	expect(play.setItem(gso1, card)).toEqual(gso2);
});

//User attacks Player, no items
test('test action: Attack player, no items', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					{ name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }
				],
			played: [],
		},
		{
			character: "koschei",
			health: 5,
			cards: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
					{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				],
			played: [],
		}
		],
		activePlayer : 0
	}
	
	let gso2 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					{ name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
					null,
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }
				],
			played: [
				{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 }
			],
		},
		{
			character: "koschei",
			health: 3,
			cards: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
					{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				],
			played: [],
		}
		],
		activePlayer : 0
	}
	


	let card1 = 1;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

/*
//User attacks card 2
test('test action Attack card, card survives', () => {

	let card1 = 1;
	let card2 = 4;
	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

*/