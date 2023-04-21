import Star from "../prefabs/Star";


/* START OF COMPILED CODE */

import Phaser from "phaser";
import FloatingObjectScript from "../script-nodes/FloatingObjectScript";
import OnPointerDownStartSceneScript from "../script-nodes/OnPointerDownStartSceneScript";
import OnPointerDownScript from "../script-nodes-basic/OnPointerDownScript";
import PushActionScript from "../script-nodes/PushActionScript";
import SwitchImageActionScript from "../script-nodes/SwitchImageActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// underwater_1
		const underwater_1 = this.add.image(0, 0, "underwater-1");
		underwater_1.setOrigin(0, 0);

		// underwater_2
		const underwater_2 = this.add.image(0, 0, "underwater-2");
		underwater_2.setOrigin(0, 0);

		// underwater_3
		const underwater_3 = this.add.image(0, 0, "underwater-3");
		underwater_3.setOrigin(0, 0);

		// underwater_5
		const underwater_5 = this.add.image(0, 0, "underwater-5");
		underwater_5.setOrigin(0, 0);

		// underwater_7
		const underwater_7 = this.add.image(0, 0, "underwater-7");
		underwater_7.setOrigin(0, 0);

		// underwater_8
		const underwater_8 = this.add.image(0, 0, "underwater-8");
		underwater_8.setOrigin(0, 0);

		// underwater_4
		const underwater_4 = this.add.image(0, 0, "underwater-4");
		underwater_4.setOrigin(0, 0);
		underwater_4.alphaBottomLeft = 0;
		underwater_4.alphaBottomRight = 0;

		// homeButton
		const homeButton = this.add.image(1782, 116, "buttons", "Button Pack - Green_Button Green - Home.png");

		// floatingObjectScript_1
		const floatingObjectScript_1 = new FloatingObjectScript(homeButton);

		// onPointerDownStartSceneScript
		const onPointerDownStartSceneScript = new OnPointerDownStartSceneScript(homeButton);

		// pauseBtn
		const pauseBtn = this.add.image(1596, 118, "buttons", "Button Pack - Green_Button Green - Pause.png");

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(pauseBtn);

		// pushActionScript
		const pushActionScript = new PushActionScript(onPointerDownScript);

		// pauseSwitchImageAction
		const pauseSwitchImageAction = new SwitchImageActionScript(pushActionScript);

		// floatingObjectScript
		const floatingObjectScript = new FloatingObjectScript(pauseBtn);

		// floatingObjectScript_1 (prefab fields)
		floatingObjectScript_1.offset = 5;

		// onPointerDownStartSceneScript.startSceneActionScript (prefab fields)
		onPointerDownStartSceneScript.startSceneActionScript.sceneKey = "Welcome";

		// pauseSwitchImageAction (prefab fields)
		pauseSwitchImageAction.onTexture = {"key":"buttons","frame":"Button Pack - Green_Button Green - Pause.png"};
		pauseSwitchImageAction.offTexture = {"key":"buttons","frame":"Button Pack - Green_Button Green - Play.png"};
		pauseSwitchImageAction.isOn = true;

		// floatingObjectScript (prefab fields)
		floatingObjectScript.offset = 5;

		this.pauseSwitchImageAction = pauseSwitchImageAction;
		this.pauseBtn = pauseBtn;

		this.events.emit("scene-awake");
	}

	private pauseSwitchImageAction!: SwitchImageActionScript;
	private pauseBtn!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		this.spawnItem();
	}

	get paused() {

		return !this.pauseSwitchImageAction.isOn;
	}

	spawnItem() {

		if (!this.paused) {

			const star = new Star(this, Phaser.Math.Between(200, 1700), 1200);
			this.add.existing(star);
		}

		this.time.addEvent({
			delay: Phaser.Math.Between(100, 2000),
			callback: this.spawnItem,
			callbackScope: this
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
