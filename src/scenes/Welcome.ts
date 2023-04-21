import { GameSounds } from "../GameSounds";

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnPointerDownScript from "../script-nodes-basic/OnPointerDownScript";
import PushActionScript from "../script-nodes/PushActionScript";
import StartSceneActionScript from "../script-nodes-basic/StartSceneActionScript";
import OnPointerDownOpenURLScript from "../script-nodes/OnPointerDownOpenURLScript";
import SwitchImageActionScript from "../script-nodes/SwitchImageActionScript";
import CallbackActionScript from "../script-nodes-basic/CallbackActionScript";
import OpenURLActionScript from "../script-nodes/OpenURLActionScript";
import FloatingObjectScript from "../script-nodes/FloatingObjectScript";
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

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(pushActionScript);

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

		// linkToPhaserEditor
		const linkToPhaserEditor = this.add.text(40, 40, "", {});
		linkToPhaserEditor.text = "Visit Phaser Editor 2D";
		linkToPhaserEditor.setStyle({ "backgroundColor": "#c4fe8aff", "color": "#6e5012ff", "fontSize": "18px", "fontStyle": "bold" });
		linkToPhaserEditor.setPadding({"left":5,"top":5,"right":5,"bottom":5});

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(linkToPhaserEditor);

		// openURLActionScript_1
		const openURLActionScript_1 = new OpenURLActionScript(onPointerDownScript_1);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(960, 120, "hyperdrive", "a day in\nthe beach");
		bitmaptext.setOrigin(0.5, 0);
		bitmaptext.text = "a day in\nthe beach";
		bitmaptext.fontSize = 150;
		bitmaptext.align = 1;

		// floatingObjectScript
		const floatingObjectScript = new FloatingObjectScript(bitmaptext);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Level";

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

		// openURLActionScript_1 (prefab fields)
		openURLActionScript_1.url = "https://phasereditor2d.com";

		// floatingObjectScript (prefab fields)
		floatingObjectScript.offset = 10;

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
