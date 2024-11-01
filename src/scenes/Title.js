
// You can write more code here

/* START OF COMPILED CODE */

import UpdateTilePositionXActionScript from "../scriptnodes/tilesprites/UpdateTilePositionXActionScript.js";
import OnAwakeActionScript from "../scriptnodes/utils/OnAwakeActionScript.js";
import FadeEffectCameraActionScript from "../scriptnodes/camera/FadeEffectCameraActionScript.js";
import LogMessageActionScript from "../scriptnodes/utils/LogMessageActionScript.js";
import MoveToActionScript from "../scriptnodes/animations/MoveToActionScript.js";
import SetVisibleActionScript from "../scriptnodes/gameobjects/SetVisibleActionScript.js";
import TimeEventActionScript from "../scriptnodes/timer/TimeEventActionScript.js";
import BlinkActionScript from "../scriptnodes/gameobjects/BlinkActionScript.js";
import OnPointerDownActionScript from "../scriptnodes/gameobjects/OnPointerDownActionScript.js";
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

		// updateTilePositionXActionScript
		const updateTilePositionXActionScript = new UpdateTilePositionXActionScript(backgroundTileSprite);

		// foregroundTileSprite
		const foregroundTileSprite = this.add.tileSprite(0, 80, 288, 192, "middle");
		foregroundTileSprite.setOrigin(0, 0);

		// updateTilePositionXActionScript_1
		const updateTilePositionXActionScript_1 = new UpdateTilePositionXActionScript(foregroundTileSprite);

		// titleImage
		const titleImage = this.add.image(144, -32, "title-screen");

		// pressEnterImage
		const pressEnterImage = this.add.image(144, 157, "press-enter-text");
		pressEnterImage.visible = false;

		// instructionsImage
		const instructionsImage = this.add.image(144, 0, "instructions");
		instructionsImage.setOrigin(0.5, 0);
		instructionsImage.visible = false;

		// onAwakeActionScript
		const onAwakeActionScript = new OnAwakeActionScript(this);

		// fadeEffectCameraActionScript
		const fadeEffectCameraActionScript = new FadeEffectCameraActionScript(onAwakeActionScript);

		// logMessageActionScript
		const logMessageActionScript = new LogMessageActionScript(fadeEffectCameraActionScript);

		// moveToActionScript
		const moveToActionScript = new MoveToActionScript(fadeEffectCameraActionScript);

		// setVisibleActionScript
		const setVisibleActionScript = new SetVisibleActionScript(moveToActionScript);

		// timeEventActionScript
		const timeEventActionScript = new TimeEventActionScript(setVisibleActionScript);

		// blinkActionScript
		const blinkActionScript = new BlinkActionScript(timeEventActionScript);

		// onPointerDownActionScript
		const onPointerDownActionScript = new OnPointerDownActionScript(onAwakeActionScript);

		// setVisibleActionScript_1
		const setVisibleActionScript_1 = new SetVisibleActionScript(onPointerDownActionScript);

		// setVisibleActionScript_2
		const setVisibleActionScript_2 = new SetVisibleActionScript(onPointerDownActionScript);

		// onPointerDownActionScript_1
		const onPointerDownActionScript_1 = new OnPointerDownActionScript(onPointerDownActionScript);

		// fadeEffectCameraActionScript_1
		const fadeEffectCameraActionScript_1 = new FadeEffectCameraActionScript(onPointerDownActionScript_1);

		// updateTilePositionXActionScript (prefab fields)
		updateTilePositionXActionScript.x = 0.3;

		// updateTilePositionXActionScript_1 (prefab fields)
		updateTilePositionXActionScript_1.x = 0.6;

		// logMessageActionScript (prefab fields)
		logMessageActionScript.message = "fade complete";

		// moveToActionScript (prefab fields)
		moveToActionScript.targetGameObject = titleImage;
		moveToActionScript.x = 144;
		moveToActionScript.y = 70;
		moveToActionScript.duration = 700;

		// setVisibleActionScript (prefab fields)
		setVisibleActionScript.targetGameObject = pressEnterImage;

		// blinkActionScript (prefab fields)
		blinkActionScript.targetGameObject = pressEnterImage;

		// onPointerDownActionScript (prefab fields)
		onPointerDownActionScript.targetGameObject = backgroundTileSprite;
		onPointerDownActionScript.once = true;

		// setVisibleActionScript_1 (prefab fields)
		setVisibleActionScript_1.targetGameObject = titleImage;
		setVisibleActionScript_1.visible = false;

		// setVisibleActionScript_2 (prefab fields)
		setVisibleActionScript_2.targetGameObject = instructionsImage;

		// onPointerDownActionScript_1 (prefab fields)
		onPointerDownActionScript_1.targetGameObject = backgroundTileSprite;
		onPointerDownActionScript_1.once = true;

		// fadeEffectCameraActionScript_1 (prefab fields)
		fadeEffectCameraActionScript_1.fadeEvent = "camerafadeoutcomplete";

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
