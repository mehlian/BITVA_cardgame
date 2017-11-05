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
{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
{ name : "Firebird", type : "Action", effect : "Exchange All", points : 0}
*/

const play =  require("../play");


// User discards a card
test('test action: Discard', () => {
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
		activePlayer : 0,
		activeActions: 3
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
		activePlayer : 0,
		activeActions: 2
	}


	let card = 2;

	expect(play.discardCard(gso1, card)).toEqual(gso2);
});

//User sets up an item
test('test action: Set Item', () => {
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
		activePlayer : 0,
		activeActions: 2
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
		activePlayer : 0,
		activeActions: 1
	}

	let card = 3;

	expect(play.setItem(gso1, card)).toEqual(gso2);
});

//User sets something that's not an item
test('test action: Set wrong Item', () => {
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
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }
				],
			item: null,
		}
		],
		activePlayer : 0
	}

	let card = 2;

	expect(play.setItem(gso1, card)).toEqual(gso2);
});

//User attacks Player, no Items
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
		activePlayer : 0,
		activeActions: 3
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
		activePlayer : 0,
		activeActions: 2
	}
	


	let card1 = 1;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

//User attacks Player with non Attacking Item
test('test action: Attack player with a non attacking item', () => {
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
		activePlayer : 0,
		activeActions: 2
	}
	
	let gso2 = { 
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
		activePlayer : 0,
		activeActions: 2
	}
	


	let card1 = 3;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

//User attacks Player, has Shield with more protection
test('test action: Attack player, has shield with more health', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }
				],
			played: [],
			item: { name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
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
			item: { name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
		}
		],
		activePlayer : 0,
		activeActions: 3

	}
	let gso2 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					null,
				],
			played: [{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 }],
			item: { name: 'Big Shield',type: 'Item', effect: 'protection', points: 5 },
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
			item: { name: 'Big Shield',type: 'Item', effect: 'protection', points: 1 },
		}
		],
		activePlayer : 0,
		activeActions: 2

	}
	let card1 = 4;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

//User attacks Player, has Shield with same protection
test('test action: Attack player, has shield with same health', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Grey Wolf', type: 'Action', effect: 'Hit', points: 3 },
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
			item: { name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
		}
		],
		activePlayer : 0,
		activeActions: 3

	}
	let gso2 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					null,
				],
			played: [{ name: 'Grey Wolf', type: 'Action', effect: 'Hit', points: 3 }],
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
			item: null
		}
		],
		activePlayer : 0,
		activeActions: 2

	}
	let card1 = 4;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

//User attacks Player, has Shield with less protection
test('test action: Attack player, has shield with less health', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
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
			item: { name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
		}
		],
		activePlayer : 0,
		activeActions: 3

	}
	let gso2 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					null,
				],
			played: [{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },],
		},
		{
			character: "koschei",
			health: 4,
			cards: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
					{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				],
			played: [],
			item: null
		}
		],
		activePlayer : 0,
		activeActions: 2

	}
	let card1 = 4;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

//User attacks Player, has Item that's not a shield
test('test action: Attack player, has item, not a shield', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
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
					null,
				],
			played: [],
			item: { name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
		}
		],
		activePlayer : 0,
		activeActions: 3

	}
	let gso2 = { 
		players : [
		{
			character: "ivan",
			health:10,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					null,
				],
			played: [{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },],
		},
		{
			character: "koschei",
			health: 1,
			cards: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
					{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					null,
				],
			played: [],
			item: { name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
		}
		],
		activePlayer : 0,
		activeActions: 2

	}
	let card1 = 4;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

// User attacks with a special effect card Steal, confirmed
test('test action: Attack player with a special action card Steal, has a spot', () => {
	let gso1 = { 
		players : [
			{
				character: "ivan",
				health:10,
				cards: [
						null,
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
				played: [],
				deck: [
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				],
				item: null
			},
			{
				character: "koschei",
				health: 5,
				cards: [
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
						{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						null,
					],
				played: [],
				deck: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],
				item: null
			}
		],
		activePlayer : 0,
		activeActions: 3

	}
	let gso2 = { 
		players : [
			{
				character: "ivan",
				health:10,
				cards: [
						null,
						null,
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
				played: [{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },],
				deck: [
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				],
				item: { name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
			},
			{
				character: "koschei",
				health: 5,
				cards: [
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
						{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						null,
					],
				played: [],
				deck: [
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],
				item: null
			}
		],
		activePlayer : 0,
		activeActions: 2

	}
	
	let card1 = 1;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

// User attacks with a special effect card Steal, has an Item
test('test action: Attack player with a special action card Steal, no spot', () => {
	let gso1 = { 
		players : [
			{
				character: "ivan",
				health:10,
				cards: [
						null,
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
				played: [],
				deck: [
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				],
				item: { name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
			},
			{
				character: "koschei",
				health: 5,
				cards: [
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
						{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						null,
					],
				played: [],
				deck: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],
				item: null
			}
		],
		activePlayer : 0,
		activeActions: 3

	}

	let gso2 = { 
		players : [
			{
				character: "ivan",
				health:10,
				cards: [
						null,
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
				played: [],
				deck: [
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				],
				item: { name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
			},
			{
				character: "koschei",
				health: 5,
				cards: [
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'kladenets', type: 'Item', effect: '+1 your hits', points: 2 },
						{ name: 'Small Shield', type: 'Item', effect: 'protection', points: 3 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						null,
					],
				played: [],
				deck: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],
				item: null
			}
		],
		activePlayer : 0,
		activeActions: 3

	}
	
	
	let card1 = 1;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

// User attacks with a special effect card Exchange, confirmed full set
test('test action: Attack player with a special action card Exchange, has a spot, opponent full set', () => {
	let gso1 = { 
		players : [
			{
				character: "ivan",
				health:10,
				cards: [
						{ name : "Firebird", type : "Action", effect : "Exchange All", points : 0},
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
				played: [],
				item: null
			},
			{
				character: "koschei",
				health: 5,
				cards: [
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					],
				played: [],
				deck: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
				],
				item: null
			}
		],
		activePlayer : 0,
		activeActions: 3
	}

	let gso2 = { 
		players : [
			{
				character: "ivan",
				health:10,
				cards: [
						null,
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
				played: [{ name : "Firebird", type : "Action", effect : "Exchange All", points : 0}],
				item: null,
			},
			{
				character: "koschei",
				health: 5,
				cards: [
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					],
				played: [],
				deck: [
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
				],
				item: null
			}
		],
		activePlayer : 0,
		activeActions: 2
	}

	let card1 = 0;
	let card2 = null;

	let testRes = play.hit(gso1, card1, card2);

	function sort(a, b){
		if(a.name > b.name){
			return 1;
		}
		if(a.name < b.name) {
			return -1;
		}
		return 0;
	}

	expect(testRes.players[0]).toEqual(gso2.players[0]);
	expect(testRes.players[1].cards).toEqual(gso2.players[1].cards);
	expect(testRes.players[1].deck.sort(sort)).toEqual(gso2.players[1].deck.sort(sort));
});

// User attacks with a special effect card Exchange, has an Item
test('test action: Attack player with a special action card Exchange, no spot', () => {
	let gso1 = { 
		players : [
			{
				character: "ivan",
				health:10,
				cards: [
						{ name : "Firebird", type : "Action", effect : "Exchange All", points : 0},
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
				played: [],
				item: { name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
			},
			{
				character: "koschei",
				health: 5,
				cards: [
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					],
				played: [],
				deck: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
				],
				item: null
			}
		],
		activePlayer : 0,
		activeActions: 3

	}
	
	
	let gso2 = { 
		players : [
			{
				character: "ivan",
				health:10,
				cards: [
						{ name : "Firebird", type : "Action", effect : "Exchange All", points : 0},
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
				played: [],
				item: { name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
			},
			{
				character: "koschei",
				health: 5,
				cards: [
						{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
						{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
						{ name: 'Invisibility', type: 'Action', effect: 'Steal', points: 0 },
						{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
						{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					],
				played: [],
				deck: [
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
				],
				item: null
			}
		],
		activePlayer : 0,
		activeActions: 3

	}
	
	let card1 = 0;
	let card2 = null;

	expect(play.hit(gso1, card1, card2)).toEqual(gso2);
});

// User heals, healing card has <max points
test('test action: User heals, ard has <max points', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			health:3,
			maxHealth:12,
			cards: [
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],
			played: [],
		}
		],
		activePlayer : 0,
		activeActions: 3

	}
	let gso2 = { 
		players : [
		{
			character: "ivan",
			health:6,
			maxHealth:12,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],
			played: [{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 }],
		}
		],
		activePlayer : 0,
		activeActions: 2

	}
	let card = 0;
	expect(play.heal(gso1, card)).toEqual(gso2);
});

// User heals, healing card has >max points
test('test action: User heals, ard has >max points', () => {
	let gso1 = { 
		players : [
		{
			character: "ivan",
			health:10,
			maxHealth:12,
			cards: [
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],
			played: [],
		}
		],
		activePlayer : 0,
		activeActions: 3

	}
	let gso2 = { 
		players : [
		{
			character: "ivan",
			health:12,
			maxHealth:12,
			cards: [
					null,
					{ name: 'Sivka-Burka', type: 'Action', effect: 'Hit', points: 2 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],
			played: [{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 }],
		}
		],
		activePlayer : 0,
		activeActions: 2

	}
	let card = 0;
	expect(play.heal(gso1, card)).toEqual(gso2);
});

// User tries to heal, doesn't have points
test('test action: User tries to heal, no points', () => {
	let gso1 = { 
		players : [
		{
			health:6,
			cards: [
				null,
				{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
				{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
				{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
			],
			played: [],
		},
		{
			health:3,
			cards: [
				null,
				null,
				null,
				{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
			],
			played: [],
		}
		],
		activePlayer : 0,
		activeActions: 0,

	}
		let gso2 = { 
		players : [
		{
			health:6,
			cards: [
				null,
				{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
				{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
				{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
			],
			played: [],
		},
		{
			health:3,
			cards: [
				null,
				null,
				null,
				{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
				{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
			],
			played: [],
		}
		],
		activePlayer : 1,
		activeActions: 3,

	}
	let card = 1;
	expect(play.heal(gso1, card)).toEqual(gso2);
});

// Turn change on hit
test('test action: Turn change on hit, both have health', () => {
	let gso1 = { 
		players : [
			{
				health:6,
			},
			{
				health:5,
			}
		],
		activePlayer : 0,
		activeActions: 0,

	}
	let gso2 = { 
		players : [
			{
				health:6,
			},
			{
				health:5,
			}
		],
		activePlayer : 1,
		activeActions: 3,

	}
	let card = 1;
	expect(play.hit(gso1, card)).toEqual(gso2);
});

// Turn change on heal
test('test action: Turn change on heal, both have health', () => {
	let gso1 = { 
		players : [
			{
				health:6,
			},
			{
				health:5,
			}
		],
		activePlayer : 0,
		activeActions: 0,

	}
	let gso2 = { 
		players : [
			{
				health:6,
			},
			{
				health:5,
			}
		],
		activePlayer : 1,
		activeActions: 3,

	}
	let card = 1;
	expect(play.heal(gso1, card)).toEqual(gso2);
});

// Turn change on discard
test('test action: Turn change on discard, both have health', () => {
	let gso1 = { 
		players : [
			{
				health:6,
				cards: [
					null,
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],

			},
			{
				health:5,
				cards: [
					null,
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
			}
		],
		activePlayer : 0,
		activeActions: 0
	}
	let gso2 = { 
		players : [
			{
				health:6,
				cards: [
					null,
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],

			},
			{
				health:5,
				cards: [
					null,
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
			}
		],
		activePlayer : 1,
		activeActions: 3,

	}
	let card = 1;
	expect(play.discardCard(gso1, card)).toEqual(gso2);
});

// Turn change on setItem
test('test action: Turn change on setItem, both have health', () => {
	let gso1 = { 
		players : [
			{
				health:6,
				cards: [
					null,
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],

			},
			{
				health:5,
				cards: [
					null,
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
			}
		],
		activePlayer : 0,
		activeActions: 0
	}
	let gso2 = { 
		players : [
			{
				health:6,
				cards: [
					null,
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
				],

			},
			{
				health:5,
				cards: [
					null,
					{ name: 'Golden Apple', type: 'Action', effect: 'Heal', points: 3 },
					{ name: 'Cat-Bajun', type: 'Action', effect: 'Hit', points: 1 },
					{ name: 'Magical Mirror', type: 'Item', effect: 'Reflect half', points: 2 },
					{ name: 'Bogatyr', type: 'Action', effect: 'Hit', points: 4 },
					],
			}
		],
		activePlayer : 1,
		activeActions: 3,

	}
	let card = 1;
	expect(play.setItem(gso1, card)).toEqual(gso2);
});


// User uses Effect card

