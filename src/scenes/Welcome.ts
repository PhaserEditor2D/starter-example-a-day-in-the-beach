import { GameSounds } from "../GameSounds";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "../script-nodes-basic/OnPointerDownScript";
import PushActionScript from "../script-nodes/ui/PushActionScript";
import StartSceneActionScript from "../script-nodes-basic/StartSceneActionScript";
import OnPointerDownOpenURLScript from "../script-nodes/ui/OnPointerDownOpenURLScript";
import SwitchImageActionScript from "../script-nodes/ui/SwitchImageActionScript";
import CallbackActionScript from "../script-nodes-basic/CallbackActionScript";
import FloatingObjectScript from "../script-nodes/ui/FloatingObjectScript";
import OnEventScript from "../script-nodes-basic/OnEventScript";
import ExecActionScript from "../script-nodes-basic/ExecActionScript";
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

		// pushActionScript
		const pushActionScript = new PushActionScript(onPointerDownScript);

		// startGameAction
		const startGameAction = new StartSceneActionScript(pushActionScript);

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

		// pushActionScript_2
		const pushActionScript_2 = new PushActionScript(onPointerDownScript_3);

		// musicSwitchImageAction
		const musicSwitchImageAction = new SwitchImageActionScript(pushActionScript_2);

		// toggleMusicAction
		const toggleMusicAction = new CallbackActionScript(onPointerDownScript_3);

		// soundBtn
		const soundBtn = this.add.image(1760, 920, "buttons", "Button Pack - Green_Button Green - Sound.png");

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(soundBtn);

		// pushActionScript_1
		const pushActionScript_1 = new PushActionScript(onPointerDownScript_2);

		// soundSwitchImageAction
		const soundSwitchImageAction = new SwitchImageActionScript(pushActionScript_1);

		// toggleEffectsAction
		const toggleEffectsAction = new CallbackActionScript(onPointerDownScript_2);

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

		// onPointerDownOpenURLScript.openURLActionScript (prefab fields)
		onPointerDownOpenURLScript.openURLActionScript.url = "https://facebook.com/PhaserEditor2D";

		// onPointerDownOpenURLScript_1.openURLActionScript (prefab fields)
		onPointerDownOpenURLScript_1.openURLActionScript.url = "https://twitter.com/PhaserEditor2D";

		// musicSwitchImageAction (prefab fields)
		musicSwitchImageAction.onTexture = {"key":"buttons","frame":"Button Pack - Green_Button Green - Music.png"};
		musicSwitchImageAction.offTexture = {"key":"buttons","frame":"Button Pack - Gray_Button Gray - Music.png"};
		musicSwitchImageAction.isOn = true;
		musicSwitchImageAction.mementoKey = "music";

		// toggleMusicAction (prefab fields)
		toggleMusicAction.callback = () => GameSounds.toggleMusic();

		// soundSwitchImageAction (prefab fields)
		soundSwitchImageAction.onTexture = {"key":"buttons","frame":"Button Pack - Green_Button Green - Sound.png"};
		soundSwitchImageAction.offTexture = {"key":"buttons","frame":"Button Pack - Gray_Button Gray - Sound.png"};
		soundSwitchImageAction.isOn = true;
		soundSwitchImageAction.mementoKey = "effects";

		// toggleEffectsAction (prefab fields)
		toggleEffectsAction.callback = () => GameSounds.toggleEffects();

		// floatingObjectScript (prefab fields)
		floatingObjectScript.offset = 10;

		// onKeydown_SPACE (prefab fields)
		onKeydown_SPACE.eventName = "keydown-SPACE";
		onKeydown_SPACE.eventsSource = "scene.input.keyboard";

		// startGame_2 (prefab fields)
		startGame_2.targetAction = startGameAction;

		// onKeydown_ENTER (prefab fields)
		onKeydown_ENTER.eventName = "keydown-ENTER";
		onKeydown_ENTER.eventsSource = "scene.input.keyboard";

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
