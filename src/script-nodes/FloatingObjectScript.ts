
// You can write more code here

/* START OF COMPILED CODE */

import SpriteScriptNode from "../script-nodes-basic/SpriteScriptNode";
import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FloatingObjectScript extends SpriteScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public offset: number = 20;

	/* START-USER-CODE */

	protected awake() {

		this.gameObject.scene.add.tween({
			targets: this.gameObject,
			props: {
				y: "-=" + this.offset,
			},
			yoyo: true,
			repeat: -1,
			duration: 1000,
			delay: Phaser.Math.Between(100, 500)
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
