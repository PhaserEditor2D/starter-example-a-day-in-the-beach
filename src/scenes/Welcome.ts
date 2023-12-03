import { GameSounds } from "../GameSounds";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnPointerDownScript } from "@phasereditor2d/scripts-core";
import { PushActionScript } from "@phasereditor2d/scripts-simple-animations";
import { StartSceneActionScript } from "@phasereditor2d/scripts-core";
import { OnAwakeScript } from "@phasereditor2d/scripts-core";
import { MoveInSceneActionScript } from "@phasereditor2d/scripts-simple-animations";
import OnPointerDownOpenURLScript from "../script-nodes/ui/OnPointerDownOpenURLScript";
import { CallbackActionScript } from "@phasereditor2d/scripts-core";
import SwitchImageActionScript from "../script-nodes/ui/SwitchImageActionScript";
import FloatingObjectScript from "../script-nodes/ui/FloatingObjectScript";
import { OnEventScript } from "@phasereditor2d/scripts-core";
import { ExecActionScript } from "@phasereditor2d/scripts-core";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Welcome extends Phaser.Scene {

	constructor() {
		super("Welcome");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// sky
		const sky = this.add.image(0, 0, "sky");
		sky.setOrigin(0, 0);

		// sea
		const sea = this.add.image(0, 0, "sea");
		sea.setOrigin(0, 0);

		// land
		const land = this.add.image(0, 0, "land");
		land.setOrigin(0, 0);

		// cloud
		const cloud = this.add.image(0, 0, "cloud");
		cloud.setOrigin(0, 0);

		// island
		const island = this.add.image(0, 0, "island");
		island.setOrigin(0, 0);

		// decor
		const decor = this.add.image(0, 0, "decor");
		decor.setOrigin(0, 0);

		// playBtn
		const playBtn = this.add.image(960, 840, "buttons", "Button Pack - Green_Button Green - Play.png");
		playBtn.scaleX = 2;
		playBtn.scaleY = 2;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(playBtn);

		// pushActionScript_2
		const pushActionScript_2 = new PushActionScript(onPointerDownScript);

		// startGameAction
		const startGameAction = new StartSceneActionScript(pushActionScript_2);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(playBtn);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// facebookBtn
		const facebookBtn = this.add.image(160, 920, "buttons", "Button Pack - Green_Button Green - Facebook.png");

		// onPointerDownOpenURLScript
		const onPointerDownOpenURLScript = new OnPointerDownOpenURLScript(facebookBtn);

		// twitterBtn
		const twitterBtn = this.add.image(360, 920, "buttons", "Button Pack - Green_Button Green - Twitter.png");

		// onPointerDownOpenURLScript_1
		const onPointerDownOpenURLScript_1 = new OnPointerDownOpenURLScript(twitterBtn);

		// musicBtn
		const musicBtn = this.add.image(1560, 920, "buttons", "Button Pack - Green_Button Green - Music.png");

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(musicBtn);

		// toggleMusicAction
		const toggleMusicAction = new CallbackActionScript(onPointerDownScript_3);

		// pushActionScript_1
		const pushActionScript_1 = new PushActionScript(onPointerDownScript_3);

		// musicSwitchImageAction
		const musicSwitchImageAction = new SwitchImageActionScript(pushActionScript_1);

		// soundBtn
		const soundBtn = this.add.image(1760, 920, "buttons", "Button Pack - Green_Button Green - Sound.png");

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(soundBtn);

		// toggleEffectsAction
		const toggleEffectsAction = new CallbackActionScript(onPointerDownScript_2);

		// pushActionScript_3
		const pushActionScript_3 = new PushActionScript(onPointerDownScript_2);

		// soundSwitchImageAction
		const soundSwitchImageAction = new SwitchImageActionScript(pushActionScript_3);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(960, 120, "hyperdrive", "a day in\nthe beach");
		bitmaptext.setOrigin(0.5, 0);
		bitmaptext.text = "a day in\nthe beach";
		bitmaptext.fontSize = 150;
		bitmaptext.align = 1;

		// floatingObjectScript
		const floatingObjectScript = new FloatingObjectScript(bitmaptext);

		// onKeydown_SPACE
		const onKeydown_SPACE = new OnEventScript(this);

		// startGame_2
		const startGame_2 = new ExecActionScript(onKeydown_SPACE);

		// onKeydown_ENTER
		const onKeydown_ENTER = new OnEventScript(this);

		// startGame_1
		const startGame_1 = new ExecActionScript(onKeydown_ENTER);

		// startGameAction (prefab fields)
		startGameAction.sceneKey = "Level";

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "BOTTOM";

		// onPointerDownOpenURLScript.openURLActionScript (prefab fields)
		onPointerDownOpenURLScript.openURLActionScript.url = "https://www.facebook.com/PhaserEditor2D";

		// onPointerDownOpenURLScript_1.openURLActionScript (prefab fields)
		onPointerDownOpenURLScript_1.openURLActionScript.url = "https://www.twitter.com/PhaserEditor2D";

		// toggleMusicAction (prefab fields)
		toggleMusicAction.callback = () => GameSounds.toggleMusic();

		// musicSwitchImageAction (prefab fields)
		musicSwitchImageAction.onTexture = {"key":"buttons","frame":"Button Pack - Green_Button Green - Music.png"};
		musicSwitchImageAction.offTexture = {"key":"buttons","frame":"Button Pack - Gray_Button Gray - Music.png"};
		musicSwitchImageAction.isOn = true;
		musicSwitchImageAction.mementoKey = "music";

		// toggleEffectsAction (prefab fields)
		toggleEffectsAction.callback = () => GameSounds.toggleEffects();

		// soundSwitchImageAction (prefab fields)
		soundSwitchImageAction.onTexture = {"key":"buttons","frame":"Button Pack - Green_Button Green - Sound.png"};
		soundSwitchImageAction.offTexture = {"key":"buttons","frame":"Button Pack - Gray_Button Gray - Sound.png"};
		soundSwitchImageAction.isOn = true;
		soundSwitchImageAction.mementoKey = "effects";

		// floatingObjectScript (prefab fields)
		floatingObjectScript.offset = 10;

		// onKeydown_SPACE (prefab fields)
		onKeydown_SPACE.eventName = "keydown-SPACE";
		onKeydown_SPACE.eventEmitter = "scene.input.keyboard";

		// startGame_2 (prefab fields)
		startGame_2.targetAction = startGameAction;

		// onKeydown_ENTER (prefab fields)
		onKeydown_ENTER.eventName = "keydown-ENTER";
		onKeydown_ENTER.eventEmitter = "scene.input.keyboard";

		// startGame_1 (prefab fields)
		startGame_1.targetAction = startGameAction;

		this.musicSwitchImageAction = musicSwitchImageAction;
		this.musicBtn = musicBtn;
		this.soundSwitchImageAction = soundSwitchImageAction;
		this.soundBtn = soundBtn;

		this.events.emit("scene-awake");
	}

	private musicSwitchImageAction!: SwitchImageActionScript;
	private musicBtn!: Phaser.GameObjects.Image;
	private soundSwitchImageAction!: SwitchImageActionScript;
	public soundBtn!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		GameSounds.init(this);

		// if (this.musicBtn && this.soundBtn) {

		// 	this.musicSwitchImageAction.isOn = GameSounds.musicEnabled;
		// 	this.soundSwitchImageAction.isOn = GameSounds.effectsEnabled;
		// }
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
