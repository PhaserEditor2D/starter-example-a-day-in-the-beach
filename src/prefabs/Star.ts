import { GameSounds } from "../GameSounds";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScriptNode from "../script-nodes-basic/ScriptNode";
import TextureInfoScript from "../script-nodes/TextureInfoScript";
/* START-USER-IMPORTS */
import Level from "../scenes/Level";
/* END-USER-IMPORTS */

export default interface Star {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Star extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 464, y ?? 192, texture || "star-orange", frame);

		scene.physics.add.existing(this, false);
		this.body.angularVelocity = 100;
		this.body.setSize(143, 146, false);

		// textures
		const textures = new ScriptNode(this);

		// greenTexInfo
		const greenTexInfo = new TextureInfoScript(textures);

		// orangeTexInfo
		const orangeTexInfo = new TextureInfoScript(textures);

		// yellowTexInfo
		const yellowTexInfo = new TextureInfoScript(textures);

		// greenTexInfo (prefab fields)
		greenTexInfo.texture = {"key":"star-green"};

		// orangeTexInfo (prefab fields)
		orangeTexInfo.texture = {"key":"star-orange"};

		// yellowTexInfo (prefab fields)
		yellowTexInfo.texture = {"key":"star-yellow"};

		/* START-USER-CTR-CODE */

		const texInfo = Phaser.Utils.Array.GetRandom(textures.children) as TextureInfoScript;	
		this.setTexture(texInfo.texture.key, texInfo.texture.frame);

		this.setInteractive();

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	hitted() {

		const scene = this.scene as Level;

		scene.add.tween({
			targets: this,
			props: {
				scaleX: 1.5,
				scaleY: 1.5,
				alpha: 0
			},
			duration: 250,
			onComplete: () => this.destroy(),
			onCompleteScope: this
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
