
// You can write more code here

/* START OF COMPILED CODE */

import OnPointerDownScript from "../script-nodes-basic/OnPointerDownScript";
import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
import PushActionScript from "./PushActionScript";
import StartSceneActionScript from "../script-nodes-basic/StartSceneActionScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnPointerDownStartSceneScript extends OnPointerDownScript {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// pushActionScript
		const pushActionScript = new PushActionScript(this);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(pushActionScript);

		this.startSceneActionScript = startSceneActionScript;
		this.pushActionScript = pushActionScript;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public startSceneActionScript: StartSceneActionScript;
	public pushActionScript: PushActionScript;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
