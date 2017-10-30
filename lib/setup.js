
function gameSetup(char1, char2){

	let players = [
		{
			character: "ivan",
			health: 11,
			name: "Ivan Tsarevich",
			deck: {

			}
		}, 
		{
			character: "koschei",
			health: 12,
			name: "Koschei Deathless",
			deck: {

			}
		}
	]
	return {players};
}

exports.gameSetup = gameSetup;