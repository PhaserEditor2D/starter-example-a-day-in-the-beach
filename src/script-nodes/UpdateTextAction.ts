
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UpdateTextAction extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	get gameObject() {

		return super.gameObject as Phaser.GameObjects.Text | Phaser.GameObjects.BitmapText;
	}

	execute(text: string): void {

		this.gameObject.text = text;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
