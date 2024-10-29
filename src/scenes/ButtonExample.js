
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ButtonExample extends Phaser.Scene {

	constructor() {
		super("ButtonExample");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// blueButton
		const blueButton = this.add.image(144, 96, "button_rectangle_depth_gradient");
		blueButton.scaleX = 0.3;
		blueButton.scaleY = 0.3;

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
