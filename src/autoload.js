// 加载 URL 参数
const currentScriptSrc = document.currentScript.src;
const spine_path = currentScriptSrc.substring(0, currentScriptSrc.lastIndexOf('/') + 1);
const params = new URL(currentScriptSrc).searchParams;
const spineConfig = {
  width_limit: params.get('width_limit') || 768,
  position: ['left', 'right'].includes(params.get('position')) ? params.get('position') : 'left',
  // preload: ['ALL', 'IDLE', 'NONE'].includes(params.get('preload')) ? params.get('preload') : 'IDLE',
};

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;
    if (type === 'css') {
      tag = document.createElement('link');
      tag.rel = 'stylesheet';
      tag.href = url;
    } else if (type === 'js') {
      tag = document.createElement('script');
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

// 加载 waifu.css spine.min.js waifu-tips.js
if (screen.width >= spineConfig.width_limit) {
  Promise.all([
    loadExternalResource(spine_path + 'waifu.css', 'css'),
    loadExternalResource(spine_path + 'waifu-tips.js', 'js'),
  ]).then(() => {
    if (spineConfig.position === 'right') {
      const sheet = Array.from(document.styleSheets).find(
        (s) => s.href && s.href.includes(spine_path + 'waifu.css')
      );
      if (sheet) {
        try {
          for (let rule of sheet.cssRules) {
            if (rule.style) {
              if (rule.selectorText === '#waifu-toggle') {
                if (rule.style.left) {
                  rule.style.right = rule.style.left;
                  rule.style.removeProperty('left');
                }
                if (rule.style.marginLeft) {
                  rule.style.marginRight = rule.style.marginLeft;
                  rule.style.removeProperty('margin-left');
                }
              }
              if (rule.selectorText === '#waifu') {
                if (rule.style.left) {
                  rule.style.right = rule.style.left;
                  rule.style.removeProperty('left');
                }
              }
              if (rule.selectorText === '#waifu-tips') {
                if (rule.style.left) {
                  rule.style.right = rule.style.left;
                  rule.style.removeProperty('left');
                }
              }
              if (rule.selectorText === '#waifu-tool') {
                if (rule.style.right) {
                  rule.style.left = rule.style.right;
                  rule.style.removeProperty('right');
                }
              }
            }
          }
        } catch (e) {
          console.warn(e);
        }
      }
    }
    // 配置选项的具体用法见 README.md
    initWidget({
      // waifuPath: spine_path + 'waifu-tips.json',
      cdnPath: spine_path,
      // preload: spineConfig.preload,
      tools: [
        // 'hitokoto',
        'switch-model',
        'switch-texture',
        'photo',
        'info',
        'quit',
      ],
    });
  });
}

console.log(`
               .::.    .:::::.   :-------.
           .:=-:..-=.:-:    .=:  .::::-:        .      :-.:-:
         :=-:      ==:      .=-.--. .-      .::-==    -:.=:
       :==.       -==       -==-.   .:::. .-. ..-=:.--.--.-:
     .==:       .===-      -==:.- .-:   .--::.  -: -:.-..-    -:
    :=-         ====   :=:   :=:.-=-::=--:     -: - .: :. :.:-
   -=:          .::   :=  .-==:-=:.   =:-:  .--..: :  : :: ..
 .==:                 ==-::--:-=.   .-:  :--:. .     . :  .
.==:                   .:-=: .=-  .:-.        .    ...
-=:                 .:: :-   :====-.                 .
                  ::. .=:      .
                ::   -:
              ::   :-.
             -. .--.
            .===-.
`);
