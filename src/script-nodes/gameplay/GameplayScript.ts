
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Star from "../../prefabs/Star";
import { GameSounds } from "../../GameSounds";
import TextureInfoScript from "./TextureInfoScript";
/* END-USER-IMPORTS */

export default class GameplayScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// textures
		const textures = new ScriptNode(this);

		this.textures = textures;

		/* START-USER-CTR-CODE */
		
		this.scene.events.on("game-paused", this.togglePause, this);
		this.scene.events.on("shutdown", () => this.scene.events.off("game-paused", this.togglePause, this));

		/* END-USER-CTR-CODE */
	}

	public textures: ScriptNode;

	/* START-USER-CODE */

	private _paused = false;
	private _spawnEvent?: Phaser.Time.TimerEvent;

	private _points = 0;

	private togglePause() {

		this._paused = !this._paused;

		if (this._paused) {

			this.scene.physics.pause();

		} else {

			this.scene.physics.resume();
		}

		if (this._spawnEvent) {

			this._spawnEvent.paused = this._paused;
		}
	}

	protected override awake(): void {

		this.spawnStar();
	}

	private spawnStar() {

		const scene = this.scene;

		const { texture } = Phaser.Utils.Array.GetRandom(this.textures.children) as TextureInfoScript;

		const star = new Star(scene, 0, 0, texture.key, texture.frame);

		// set position
		const margin = 50;

		const minX = star.width / 2 + margin;
		const maxX = scene.scale.width - star.width / 2 - margin;

		star.setPosition(
			Phaser.Math.Between(minX, maxX),
			scene.scale.height + star.height / 2
		);

		// set velocity
		star.body.velocity.y = -Phaser.Math.Between(50, 250);
		star.body.angularVelocity = star.body.velocity.y / 2 * (Math.random() < 0.5 ? -1 : 1);

		// listen pointer
		star.once("pointerdown", () => this.pickStar(star), this);

		// add the star
		scene.add.existing(star);

		// program the next spawn event
		this._spawnEvent = scene.time.addEvent({
			delay: Phaser.Math.Between(100, 2000),
			callback: this.spawnStar,
			callbackScope: this
		});
	}

	private killStar(star: Star) {

		star.destroy();
	}

	private get stars() {

		return this.scene.children.list.filter(obj => obj instanceof Star) as Star[];
	}

	protected override update(): void {

		if (this._paused) {

			return;
		}

		for (const star of this.stars) {

			if (star.y + star.displayHeight / 2 < 0) {

				this.killStar(star);

				this._points--;

				this.scene.events.emit("update-points", this._points);
			}
		}
	}

	private pickStar(star: Star) {

		if (this._paused) {

			return;
		}

		star.animatePickStar(() => {

			this.killStar(star);
		});

		this._points++;

		this.scene.events.emit("update-points", this._points);

		GameSounds.playBubble();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
