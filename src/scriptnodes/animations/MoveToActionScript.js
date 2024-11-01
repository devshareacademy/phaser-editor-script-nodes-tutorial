
// You can write more code here

/* START OF COMPILED CODE */

import NodeScriptWithTarget from "../base/NodeScriptWithTarget.js";
import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MoveToActionScript extends NodeScriptWithTarget {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	x = 0;
	/** @type {number} */
	y = 0;
	/** @type {number} */
	duration = 1000;

	/* START-USER-CODE */

	// Write your code here.
	execute(...args) {
		const obj = this.getActionTargetObject(args);
		/** @type {Phaser.Scene} */
		const _scene = this.scene;
		_scene.add.tween({
			targets: obj,
			x: this.x,
			y: this.y,
			duration: this.duration,
			onComplete: () => {
				this.executeChildren(args);
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
