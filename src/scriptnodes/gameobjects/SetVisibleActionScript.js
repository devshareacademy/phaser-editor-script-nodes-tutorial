
// You can write more code here

/* START OF COMPILED CODE */

import NodeScriptWithTarget from "../base/NodeScriptWithTarget.js";
import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetVisibleActionScript extends NodeScriptWithTarget {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	visible = true;

	/* START-USER-CODE */

	// Write your code here.
	execute(...args) {
		const obj = this.getActionTargetObject(args);
		obj.visible = this.visible;
		this.executeChildren(args);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
