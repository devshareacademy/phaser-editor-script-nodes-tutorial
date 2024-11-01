
// You can write more code here

/* START OF COMPILED CODE */

import NodeScriptWithTarget from "../base/NodeScriptWithTarget.js";
import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnPointerDownActionScript extends NodeScriptWithTarget {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	once = false;

	/* START-USER-CODE */

	// Write your code here.
	execute(...args) {
		const obj = this.getActionTargetObject(args);
		if (obj === undefined) {
			return;
		}
		if (!obj.input) {
			obj.setInteractive();
		}
		const eventName = Phaser.Input.Events.POINTER_DOWN;
		if (this.once) {
			obj.once(eventName, () => {
				this.executeChildren();
			});
			return;
		}

		obj.on(eventName, () => {
			this.executeChildren();
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
