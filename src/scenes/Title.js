
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundTileSprite
		const backgroundTileSprite = this.add.tileSprite(0, 0, 288, 192, "back");
		backgroundTileSprite.setOrigin(0, 0);

		// foregroundTileSprite
		const foregroundTileSprite = this.add.tileSprite(0, 80, 288, 192, "middle");
		foregroundTileSprite.setOrigin(0, 0);

		// titleImage
		this.add.image(144, 70, "title-screen");

		// pressEnterImage
		this.add.image(144, 157, "press-enter-text");

		// instructionsImage
		const instructionsImage = this.add.image(144, 0, "instructions");
		instructionsImage.setOrigin(0.5, 0);
		instructionsImage.visible = false;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
