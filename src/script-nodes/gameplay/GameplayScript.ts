
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Star from "../../prefabs/Star";
import { GameSounds } from "../../GameSounds";
/* END-USER-IMPORTS */

export default class GameplayScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	private _paused = false;
	private _points = 0;
	private _stars: Star[] = [];

	protected override awake(): void {

		this.spawnStar();
	}

	private spawnStar() {

		const scene = this.scene;

		if (!this._paused) {

			const star = new Star(scene);

			const {width, height} = this.scene.scale;
			const margin = 50;
			const minX = star.width / 2 + margin;
			const maxX = width - star.width / 2 - margin;
			const y = height + star.height / 2;

			star.x = Phaser.Math.Between(minX, maxX);
			star.y = y;

			star.body.velocity.y = -Phaser.Math.Between(50, 250);
			star.body.angularVelocity = star.body.velocity.y / 2 * (Math.random() < 0.5? -1 : 1);

			scene.add.existing(star);

			star.once("pointerdown", () => this.pickStar(star), this);

			this._stars.push(star);
		}

		scene.time.addEvent({
			delay: Phaser.Math.Between(100, 2000),
			callback: this.spawnStar,
			callbackScope: this
		});
	}

	private removeStar(star: Star) {

		this._stars = this._stars.filter(s => s !== star);
	}

	protected override update(): void {

		if (this._paused) {

			return;
		}

		for (const star of this._stars) {

			if (star.y + star.displayHeight / 2 < 0) {

				star.destroy();

				this.removeStar(star);

				this._points--;

				this.scene.events.emit("update-points", this._points);
			}
		}
	}

	private pickStar(star: Star) {

		if (this._paused) {

			return;
		}

		star.hitted();

		this.removeStar(star);

		this._points++;

		this.scene.events.emit("update-points", this._points);

		GameSounds.playBubble();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
