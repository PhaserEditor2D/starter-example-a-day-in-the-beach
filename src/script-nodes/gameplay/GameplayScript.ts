
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Star from "../../prefabs/Star";
import { GameSounds } from "../../GameSounds";
import TextureInfoScript from "./TextureInfoScript";
import GameoverPrefab from "../../prefabs/GameoverPrefab";
/* END-USER-IMPORTS */

export default class GameplayScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// textures
		const textures = new ScriptNode(this);

		this.textures = textures;

		/* START-USER-CTR-CODE */

		this.scene.events.on("game-paused", this.togglePause, this);
		this.scene.events.on(Phaser.Scenes.Events.SHUTDOWN, () => this.scene.events.off("game-paused", this.togglePause, this));

		this.scene.time.paused = false;
		this.scene.physics.world.isPaused = false;

		/* END-USER-CTR-CODE */
	}

	public textures: ScriptNode;

	/* START-USER-CODE */

	private _baseGravity = 50;
	private _maxSpawnDelay = 2000;
	private _points = 0;
	private _gameOver = false;

	private togglePause() {

		this.setPaused(!this.isPaused());
	}

	private isPaused() {

		return this.scene.time.paused;
	}

	private setPaused(paused: boolean) {

		this.scene.time.paused = paused;
		this.scene.physics.world.isPaused = paused;
	}

	protected override awake(): void {

		this.spawnStar();

		this.nextDifficultyLevel();
	}

	private nextDifficultyLevel() {

		if (this._gameOver) {

			return;
		}

		this._baseGravity += 50;
		this._maxSpawnDelay =  Math.max(this._maxSpawnDelay - 100, 0);
		
		this.scene.time.addEvent({
			delay: 5000,
			callback: () => this.nextDifficultyLevel()
		});
	}

	private spawnStar() {

		if (this._gameOver) {

			return;
		}

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
		star.body.velocity.y = -Phaser.Math.Between(this._baseGravity, this._baseGravity + 200);
		star.body.angularVelocity = star.body.velocity.y / 2 * (Math.random() < 0.5 ? -1 : 1);

		// listen pointer
		star.once("pointerdown", () => this.pickStar(star), this);

		// add the star
		scene.add.existing(star);

		// program the next spawn event
		scene.time.addEvent({
			delay: Phaser.Math.Between(100, this._maxSpawnDelay),
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

		if (this.isPaused() || this._gameOver) {

			return;
		}

		for (const star of this.stars) {

			if (star.y + star.displayHeight / 2 < 0) {

				this.killStar(star);

				this._points--;

				if (this._points < 0) {

					this._gameOver = true;

					this.showGameOverMessage();

				} else {

					this.scene.events.emit("update-points", this._points);
				}
			}
		}
	}

	private showGameOverMessage() {

		const msg = new GameoverPrefab(this.scene);
		this.scene.add.existing(msg);
	}

	private pickStar(star: Star) {

		if (this.isPaused() || this._gameOver) {

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
