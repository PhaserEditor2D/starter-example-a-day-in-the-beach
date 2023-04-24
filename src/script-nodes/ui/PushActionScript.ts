
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PushActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	execute(args: any): void {

		try {

			this.scene.add.tween({
				targets: this.gameObject,
				scaleX: "*=0.9",
				scaleY: "*=0.9",
				duration: 50,
				yoyo: true,
				ease: Phaser.Math.Easing.Quadratic.Out,
				onComplete: () => {

					this.executeChildren(args);
				}
			});

		} catch (e: any) {

			const err = e as Error;

			console.log(err);

			alert(err.message + "\n" + err.stack);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
