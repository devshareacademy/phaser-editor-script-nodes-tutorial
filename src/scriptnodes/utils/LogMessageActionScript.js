
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LogMessageActionScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	message = "";

	/* START-USER-CODE */

	// Write your code here.
	execute() {
		console.log(this.message);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
