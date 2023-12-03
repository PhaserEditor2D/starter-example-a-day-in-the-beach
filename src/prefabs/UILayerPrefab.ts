
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FloatingObjectScript from "../script-nodes/ui/FloatingObjectScript";
import OnPointerDownStartSceneScript from "../script-nodes/ui/OnPointerDownStartSceneScript";
import { OnPointerDownScript } from "@phasereditor2d/scripts-core";
import { PushActionScript } from "@phasereditor2d/scripts-simple-animations";
import { EmitEventActionScript } from "@phasereditor2d/scripts-core";
import SwitchImageActionScript from "../script-nodes/ui/SwitchImageActionScript";
import { OnEventScript } from "@phasereditor2d/scripts-core";
import UpdateTextAction from "../script-nodes/gameplay/UpdateTextAction";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UILayerPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// homeButton
		const homeButton = scene.add.image(1782, 116, "buttons", "Button Pack - Green_Button Green - Home.png");
		this.add(homeButton);

		// floatingObjectScript_1
		const floatingObjectScript_1 = new FloatingObjectScript(homeButton);

		// onPointerDownStartSceneScript
		const onPointerDownStartSceneScript = new OnPointerDownStartSceneScript(homeButton);

		// pauseBtn
		const pauseBtn = scene.add.image(1596, 118, "buttons", "Button Pack - Green_Button Green - Pause.png");
		this.add(pauseBtn);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(pauseBtn);

		// pushActionScript_1
		const pushActionScript_1 = new PushActionScript(onPointerDownScript);

		// emitGamePausedEvent
		const emitGamePausedEvent = new EmitEventActionScript(pushActionScript_1);

		// pauseSwitchImageAction
		const pauseSwitchImageAction = new SwitchImageActionScript(pushActionScript_1);

		// floatingObjectScript
		const floatingObjectScript = new FloatingObjectScript(pauseBtn);

		// startsIcon
		const startsIcon = scene.add.container(91, 72);
		startsIcon.scaleX = 0.5591245841155765;
		startsIcon.scaleY = 0.5591245841155765;
		this.add(startsIcon);

		// star_yellow
		const star_yellow = scene.add.image(-15, -9, "star-yellow");
		startsIcon.add(star_yellow);

		// floatingObjectScript_4
		const floatingObjectScript_4 = new FloatingObjectScript(star_yellow);

		// star_orange
		const star_orange = scene.add.image(2, 34, "star-orange");
		startsIcon.add(star_orange);

		// floatingObjectScript_3
		const floatingObjectScript_3 = new FloatingObjectScript(star_orange);

		// star_green
		const star_green = scene.add.image(27, 0, "star-green");
		star_green.scaleX = 0.7725992149498591;
		star_green.scaleY = 0.7725992149498591;
		startsIcon.add(star_green);

		// floatingObjectScript_2
		const floatingObjectScript_2 = new FloatingObjectScript(star_green);

		// pointsCounter
		const pointsCounter = scene.add.bitmapText(206, 79, "hyperdrive", "0");
		pointsCounter.setOrigin(0.5, 0.5);
		pointsCounter.tintFill = true;
		pointsCounter.tintTopLeft = 8504341;
		pointsCounter.tintTopRight = 8504341;
		pointsCounter.tintBottomLeft = 14790987;
		pointsCounter.tintBottomRight = 14790987;
		pointsCounter.text = "0";
		pointsCounter.fontSize = 100;
		this.add(pointsCounter);

		// floatingObjectScript_5
		const floatingObjectScript_5 = new FloatingObjectScript(pointsCounter);

		// onUpdatePoints
		const onUpdatePoints = new OnEventScript(pointsCounter);

		// updatePointsAction
		new UpdateTextAction(onUpdatePoints);

		// floatingObjectScript_1 (prefab fields)
		floatingObjectScript_1.offset = 5;

		// onPointerDownStartSceneScript.startSceneActionScript (prefab fields)
		onPointerDownStartSceneScript.startSceneActionScript.sceneKey = "Welcome";

		// emitGamePausedEvent (prefab fields)
		emitGamePausedEvent.eventName = "game-paused";
		emitGamePausedEvent.eventEmitter = "scene.events";

		// pauseSwitchImageAction (prefab fields)
		pauseSwitchImageAction.onTexture = {"key":"buttons","frame":"Button Pack - Green_Button Green - Pause.png"};
		pauseSwitchImageAction.offTexture = {"key":"buttons","frame":"Button Pack - Green_Button Green - Play.png"};
		pauseSwitchImageAction.isOn = true;

		// floatingObjectScript (prefab fields)
		floatingObjectScript.offset = 5;

		// floatingObjectScript_4 (prefab fields)
		floatingObjectScript_4.offset = 10;

		// floatingObjectScript_3 (prefab fields)
		floatingObjectScript_3.offset = 5;

		// floatingObjectScript_2 (prefab fields)
		floatingObjectScript_2.offset = 15;

		// floatingObjectScript_5 (prefab fields)
		floatingObjectScript_5.offset = 5;

		// onUpdatePoints (prefab fields)
		onUpdatePoints.eventName = "update-points";
		onUpdatePoints.eventEmitter = "scene.events";

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
