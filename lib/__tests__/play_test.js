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


test('test action Use', () => {
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
			played: [],
		}
		],
		activePlayer : 0
	}


	let card = 2;

	expect(play.discardCard(gso1, card)).toEqual(gso2);
});