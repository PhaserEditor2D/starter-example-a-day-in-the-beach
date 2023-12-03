
// You can write more code here

/* START OF COMPILED CODE */

import { SpriteScript } from "@phasereditor2d/scripts-core";
import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FloatingObjectScript extends SpriteScript {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public offset: number = 20;

	/* START-USER-CODE */

	protected start() {

		this.gameObject.scene.add.tween({
			targets: this.gameObject,
			props: {
				y: "-=" + this.offset,
			},
			yoyo: true,
			repeat: -1,
			duration: Phaser.Math.Between(1000, 1500),
			delay: Phaser.Math.Between(100, 500)
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
