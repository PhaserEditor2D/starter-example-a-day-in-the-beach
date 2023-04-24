import Star from "../prefabs/Star";


/* START OF COMPILED CODE */

import Phaser from "phaser";
import UILayerPrefab from "../prefabs/UILayerPrefab";
import GameplayScript from "../script-nodes/gameplay/GameplayScript";
import TextureInfoScript from "../script-nodes/gameplay/TextureInfoScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// underwater_1
		const underwater_1 = this.add.image(0, 0, "underwater-1");
		underwater_1.setOrigin(0, 0);

		// underwater_2
		const underwater_2 = this.add.image(0, 0, "underwater-2");
		underwater_2.setOrigin(0, 0);

		// underwater_3
		const underwater_3 = this.add.image(0, 0, "underwater-3");
		underwater_3.setOrigin(0, 0);

		// underwater_5
		const underwater_5 = this.add.image(0, 0, "underwater-5");
		underwater_5.setOrigin(0, 0);

		// underwater_7
		const underwater_7 = this.add.image(0, 0, "underwater-7");
		underwater_7.setOrigin(0, 0);

		// underwater_8
		const underwater_8 = this.add.image(0, 0, "underwater-8");
		underwater_8.setOrigin(0, 0);

		// underwater_4
		const underwater_4 = this.add.image(0, 0, "underwater-4");
		underwater_4.setOrigin(0, 0);
		underwater_4.alphaBottomLeft = 0;
		underwater_4.alphaBottomRight = 0;

		// uiLayer
		const uiLayer = new UILayerPrefab(this);
		this.add.existing(uiLayer);

		// gameplayScript
		const gameplayScript = new GameplayScript(this);

		// yellow
		const yellow = new TextureInfoScript(gameplayScript.textures);

		// orange
		const orange = new TextureInfoScript(gameplayScript.textures);

		// green
		const green = new TextureInfoScript(gameplayScript.textures);

		// yellow (prefab fields)
		yellow.texture = {"key":"star-yellow"};

		// orange (prefab fields)
		orange.texture = {"key":"star-orange"};

		// green (prefab fields)
		green.texture = {"key":"star-green"};

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
