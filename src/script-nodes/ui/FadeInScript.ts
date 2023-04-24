
// You can write more code here

/* START OF COMPILED CODE */

import SpriteScriptNode from "../../script-nodes-basic/SpriteScriptNode";
import ScriptNode from "../../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FadeInScript extends SpriteScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */

		this.gameObject.alpha = 0;

		/* END-USER-CTR-CODE */
	}

	public duration: number = 1000;
	public delay: number = 0;

	/* START-USER-CODE */

	protected start(): void {

		this.scene.add.tween({
			targets: this.gameObject,
			alpha: {
				from: 0,
				to: 1
			},
			delay: this.delay,
			duration: this.duration,
			ease: Phaser.Math.Easing.Quadratic.Out
		});

		this.gameObject.alpha = 0;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
