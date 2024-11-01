
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UpdateTilePositionXActionScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	x = 0;

	/* START-USER-CODE */

	// Write your code here.
	update() {
		if (this.gameObject === undefined) {
			return;
		}
		this.gameObject.tilePositionX += this.x;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
