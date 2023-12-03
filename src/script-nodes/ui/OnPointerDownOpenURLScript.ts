
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
import { OnPointerDownScript } from "@phasereditor2d/scripts-core";
import { PushActionScript } from "@phasereditor2d/scripts-simple-animations";
import OpenURLActionScript from "./OpenURLActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnPointerDownOpenURLScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// pushActionScript
		const pushActionScript = new PushActionScript(onPointerDownScript);

		// openURLActionScript
		const openURLActionScript = new OpenURLActionScript(pushActionScript);

		this.openURLActionScript = openURLActionScript;
		this.pushActionScript = pushActionScript;
		this.onPointerDownScript = onPointerDownScript;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public openURLActionScript: OpenURLActionScript;
	public pushActionScript: PushActionScript;
	public onPointerDownScript: OnPointerDownScript;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
