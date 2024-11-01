
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NodeScriptWithTarget extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	targetGameObject;

	/* START-USER-CODE */

	// Write your code here.
	getActionTargetObject(args) {
		if (this.targetGameObject !== undefined) {
			return this.targetGameObject;
		}
        const target = ActionTargetComp.getTargetGameObject(this, args);
        return target;
    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
