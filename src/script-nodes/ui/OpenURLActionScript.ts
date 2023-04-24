
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OpenURLActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public url: string = "";

	/* START-USER-CODE */

	execute(args?: any): void {

		open(this.url);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
