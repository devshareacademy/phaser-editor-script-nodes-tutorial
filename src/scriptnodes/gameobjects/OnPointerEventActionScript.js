
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnPointerEventActionScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {"pointerover"|"pointerout"} */
	inputEvent = "pointerover";
	/** @type {boolean} */
	once = false;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		if (this.gameObject === undefined) {
			return;
		}
		if (!this.gameObject.input) {
			this.gameObject.setInteractive();
		}
		if (this.once) {
			this.gameObject.once(this.inputEvent, () => {
				this.executeChildren();
			});
			return;
		}

		this.gameObject.on(this.inputEvent, () => {
			this.executeChildren();
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
