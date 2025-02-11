const l=document.currentScript.src,s=l.substring(0,l.lastIndexOf("/")+1),r=new URL(l).searchParams,o={width_limit:r.get("width_limit")||768,position:["left","right"].includes(r.get("position"))?r.get("position"):"left"};function f(i,e){return new Promise((n,c)=>{let t;e==="css"?(t=document.createElement("link"),t.rel="stylesheet",t.href=i):e==="js"&&(t=document.createElement("script"),t.src=i),t&&(t.onload=()=>n(i),t.onerror=()=>c(i),document.head.appendChild(t))})}screen.width>=o.width_limit&&Promise.all([f(s+"waifu.css","css"),f(s+"waifu-tips.js","js")]).then(()=>{if(o.position==="right"){const i=Array.from(document.styleSheets).find(e=>e.href&&e.href.includes(s+"waifu.css"));if(i)try{for(let e of i.cssRules)e.style&&(e.selectorText==="#waifu-toggle"&&(e.style.left&&(e.style.right=e.style.left,e.style.removeProperty("left")),e.style.marginLeft&&(e.style.marginRight=e.style.marginLeft,e.style.removeProperty("margin-left"))),e.selectorText==="#waifu"&&e.style.left&&(e.style.right=e.style.left,e.style.removeProperty("left")),e.selectorText==="#waifu-tips"&&e.style.left&&(e.style.right=e.style.left,e.style.removeProperty("left")),e.selectorText==="#waifu-tool"&&e.style.right&&(e.style.left=e.style.right,e.style.removeProperty("right")))}catch(e){console.warn(e)}}initWidget({cdnPath:s,tools:["switch-model","switch-texture","photo","info","quit"]})});console.log(`
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
