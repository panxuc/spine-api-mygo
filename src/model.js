import '@pixi-spine/all-4.0';
import * as PIXI from "pixi.js";
import { Spine } from '@pixi-spine/runtime-4.0';
import { getModelId, setModelId, getModelTexturesId, setModelTexturesId, getConfig, updateMessageArray } from "./config.js";
import showMessage from "./message.js";
import randomSelection from "./utils.js";

class Model {
    constructor() {
        // this.waifuPath = getConfig().waifuPath;
        this.cdnPath = getConfig().cdnPath;
        this.app = new PIXI.Application({
            view: document.getElementById("spine"),
            autoStart: true,
            width: 400,
            height: 400,
            backgroundAlpha: 0,
        });
    }

    async loadModelList() {
        const response = await fetch(`${this.cdnPath}model_list.json`);
        this.modelList = await response.json();
    }

    async loadModel(modelId, modelTexturesId, message) {
        if (!this.modelList) await this.loadModelList();
        if (modelId >= this.modelList.models.length) {
            modelId %= this.modelList.models.length;
        }
        if (modelTexturesId >= this.modelList.models[modelId].length) {
            modelTexturesId %= this.modelList.models[modelId].length;
        }
        localStorage.setItem("modelId", modelId);
        localStorage.setItem("modelTexturesId", modelTexturesId);
        console.log(`Spine ${modelId}-${modelTexturesId}`);
        showMessage(this, message, 4000, 10);
        const target = this.modelList.models[modelId][modelTexturesId];
        let url = `${this.cdnPath}model/${target}`;
        PIXI.Assets.load(url).then((resource) => {
            this.model = new Spine(resource.spineData);
            this.app.stage.removeChildren();
            this.app.stage.addChild(this.model);
            this.model.scale.set(0.4);
            this.model.x = this.app.renderer.width / 3;
            this.model.y = this.app.renderer.height - 40;
            this.model.state.setAnimation(0, "ako_doya_0", true);
            this.model.autoUpdate = true;
        });
        // fetch(this.waifuPath)
        //     .then(response => response.json())
        //     .then(updateMessageArray);
    }

    async loadOtherModel() {
        if (!this.modelList) await this.loadModelList();
        setModelId((getModelId() + 1 >= this.modelList.models.length) ? 0 : getModelId() + 1);
        setModelTexturesId(randomSelection(this.modelList.models[getModelId()].length));
        // setModelTexturesId(0);
        this.loadModel(getModelId(), getModelTexturesId(), this.modelList.messages[getModelId()]);
    }

    async loadOtherTextureModel() {
        if (!this.modelList) await this.loadModelList();
        // setModelTexturesId((getModelTexturesId() + 1 >= this.modelList.models[getModelId()].length) ? 0 : getModelTexturesId() + 1);
        setModelTexturesId(randomSelection(this.modelList.models[getModelId()].length));
        this.loadModel(getModelId(), getModelTexturesId(), this.modelList.messages[getModelId()]);
    }
}

export default Model;
