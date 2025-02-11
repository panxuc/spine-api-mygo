import '@pixi-spine/all-4.0';

import * as PIXI from 'pixi.js';
import { Spine } from '@pixi-spine/runtime-4.0';

const app = new PIXI.Application({
    backgroundAlpha: 0,
});
document.body.appendChild(app.view);

PIXI.Assets.load("model/tomori/00036_2023/u000_templete_MyGO.skel").then((resource) => {
    const animation = new Spine(resource.spineData);
    app.stage.addChild(animation);
    animation.scale.set(0.33);
    animation.x = app.renderer.width / 2;
    animation.y = app.renderer.height;
    animation.state.setAnimation(0, "ako_doya_0", true);
    animation.autoUpdate = true;
});
