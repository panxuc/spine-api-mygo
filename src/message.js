import randomSelection from "./utils.js";

let messageTimer;

function showMessage(model, text, timeout, priority) {
    // if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
    // if (messageTimer) {
    //     clearTimeout(messageTimer);
    //     messageTimer = null;
    // }
    // text = randomSelection(text);
    // sessionStorage.setItem("waifu-text", priority);
    // const tips = document.getElementById("waifu-tips");
    // tips.innerHTML = text.text;
    // tips.classList.add("waifu-tips-active");
    // messageTimer = setTimeout(() => {
    //     sessionStorage.removeItem("waifu-text");
    //     tips.classList.remove("waifu-tips-active");
    // }, timeout);
    // model.model.motion(text.motion);
    // model.model.expression(text.expression);
}

export default showMessage;
