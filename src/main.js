import ButtonExample from "./scenes/ButtonExample.js";
import Title from "./scenes/Title.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 288,
		height: 192,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		pixelArt: true
	});

	game.scene.add("ButtonExample", ButtonExample);
	game.scene.add("Title", Title);
	game.scene.add("Preload", Preload, true);
});
