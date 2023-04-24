
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameoverPrefab extends Phaser.GameObjects.BitmapText {

	constructor(scene: Phaser.Scene, x?: number, y?: number, font?: string) {
		super(scene, x ?? 960, y ?? 540, font ?? "hyperdrive");

		this.setOrigin(0.5, 0.5);
		this.text = "Game Over!";
		this.fontSize = 200;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
