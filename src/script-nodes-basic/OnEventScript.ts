
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnEventScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	public eventName: string = "";
	public eventsSource: "game.events" | "scene.events" | "scene.loader" | "scene.input" | "scene.input.keyboard" | "scene.anims" | "gameObject" = "gameObject";
	public once: boolean = false;

	/* START-USER-CODE */

	awake() {

		let emitter: Phaser.Events.EventEmitter | null | undefined;

		switch (this.eventsSource) {
			case "game.events":

				emitter = this.scene.game.events;
				break;

			case "scene.events":

				emitter = this.scene.events;
				break;

			case "scene.loader":

				emitter = this.scene.load;
				break;

			case "scene.input":

				emitter = this.scene.input;
				break;

			case "scene.input.keyboard":

				emitter = this.scene.input.keyboard;
				break;

			case "scene.anims":

				emitter = this.scene.anims;
				break;

			case "gameObject":

				emitter = this.gameObject;
				break;
		}

		if (emitter) {

			if (this.once) {

				emitter.once(this.eventName, this.executeChildren, this);

			} else {

				emitter.on(this.eventName, this.executeChildren, this);
			}

			switch (this.eventsSource) {
				case "scene.anims":
				case "scene.events":
				case "scene.input":
				case "scene.input.keyboard":
				case "scene.loader":

					this.scene.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {

						emitter?.off(this.eventName, this.executeChildren, this);
					});
					break;
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
