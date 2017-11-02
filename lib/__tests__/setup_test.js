const setup =  require("../setup");

test('setup generates correct player objects', () => {
	//Call a gameSetup function with 2 char keys.
	//Get GSO with 2 players with those characters stats - > 
	//name, health, shuffled deck

	const gso = setup.gameSetup("ivan", "koschei");
	const gso2 = setup.gameSetup("ivan", "koschei");

	expect(gso.players.length).toBe(2);
	expect(gso.players[0].character).toBe("ivan");
	expect(gso.players[1].character).toBe("koschei");
	expect(gso.players[0].health).toBe(11);
	expect(gso.players[1].health).toBe(12);
	expect(gso.players[0].maxHealth).toBe(11);
	expect(gso.players[1].maxHealth).toBe(12);
	expect(gso.players[0].name).toBe("Ivan Tsarevich");
	expect(gso.players[1].name).toBe("Koschei Deathless");
	expect(gso.players[0].deck.length).toBe(15);
	expect(gso.players[1].deck.length).toBe(15);
	expect(
		gso.players[1].deck == gso2.players[1].deck
	).toBe(false);
	expect(
		gso.players[1].deck[1].name == gso2.players[1].deck[1].name
	).toBe(false);
});

test('setup chooses first active player', () => {
	const gso = setup.gameSetup("ivan", "koschei");
	expect(
		gso.activePlayer <= gso.players.length
	).toBe(true);
});

test('both players get 5 cards', () => {
	const gso = setup.gameSetup("ivan", "koschei");
	expect(gso.players[0].cards.length).toBe(5);
	expect(gso.players[1].cards.length).toBe(5);
	expect(gso.players[0].item).toBe(null);
	expect(gso.players[1].item).toBe(null);
});

