const setup =  require("../setup");

test('1+1=2', () => {
	//Call a gameSetup function with 2 char keys.
	//Get GSO with 2 players with those characters stats - > 
	//name, health, shuffled deck

	const gso = setup.gameSetup("ivan", "koschei");

	expect(gso.players.length).toBe(2);
	expect(gso.players[0].character).toBe("ivan");
	expect(gso.players[1].character).toBe("koschei");
	expect(gso.players[0].health).toBe(11);
	expect(gso.players[1].health).toBe(12);
	expect(gso.players[0].name).toBe("Ivan Tsarevich");
	expect(gso.players[1].name).toBe("Koschei Deathless");

});