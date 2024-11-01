
// You can write more code here

/* START OF COMPILED CODE */

import OnPointerDownActionScript from "../scriptnodes/gameobjects/OnPointerDownActionScript.js";
import LogMessageActionScript from "../scriptnodes/utils/LogMessageActionScript.js";
import OnPointerEventActionScript from "../scriptnodes/gameobjects/OnPointerEventActionScript.js";
import UpdateTextureActionScript from "../scriptnodes/gameobjects/UpdateTextureActionScript.js";
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

		// onPointerDownActionScript
		const onPointerDownActionScript = new OnPointerDownActionScript(blueButton);

		// logMessageActionScript
		const logMessageActionScript = new LogMessageActionScript(onPointerDownActionScript);

		// onPointerEventActionScript
		const onPointerEventActionScript = new OnPointerEventActionScript(blueButton);

		// logMessageActionScript_1
		const logMessageActionScript_1 = new LogMessageActionScript(onPointerEventActionScript);

		// updateTextureActionScript_1
		const updateTextureActionScript_1 = new UpdateTextureActionScript(onPointerEventActionScript);

		// onPointerEventActionScript_1
		const onPointerEventActionScript_1 = new OnPointerEventActionScript(blueButton);

		// logMessageActionScript_2
		const logMessageActionScript_2 = new LogMessageActionScript(onPointerEventActionScript_1);

		// updateTextureActionScript
		const updateTextureActionScript = new UpdateTextureActionScript(onPointerEventActionScript_1);

		// onPointerDownActionScript (prefab fields)
		onPointerDownActionScript.once = true;

		// logMessageActionScript (prefab fields)
		logMessageActionScript.message = "the button was clicked";

		// logMessageActionScript_1 (prefab fields)
		logMessageActionScript_1.message = "pointerover";

		// updateTextureActionScript_1 (prefab fields)
		updateTextureActionScript_1.textureConfig = {"key":"button_rectangle_gradient"};

		// onPointerEventActionScript_1 (prefab fields)
		onPointerEventActionScript_1.inputEvent = "pointerout";

		// logMessageActionScript_2 (prefab fields)
		logMessageActionScript_2.message = "pointerout";

		// updateTextureActionScript (prefab fields)
		updateTextureActionScript.textureConfig = {"key":"button_rectangle_depth_gradient"};

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
