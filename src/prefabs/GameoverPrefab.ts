
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FloatingObjectScript from "../script-nodes/ui/FloatingObjectScript";
import { OnAwakeScript } from "@phasereditor2d/scripts-core";
import { FadeActionScript } from "@phasereditor2d/scripts-simple-animations";
import { DurationConfigComp } from "@phasereditor2d/scripts-simple-animations";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameoverPrefab extends Phaser.GameObjects.BitmapText {

	constructor(scene: Phaser.Scene, x?: number, y?: number, font?: string) {
		super(scene, x ?? 960, y ?? 540, font ?? "hyperdrive");

		this.setOrigin(0.5, 0.5);
		this.text = "Game Over!";
		this.fontSize = 200;

		// floatingObjectScript
		new FloatingObjectScript(this);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(this);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript);

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 4000;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
