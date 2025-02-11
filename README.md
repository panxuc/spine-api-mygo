# Spine API feat. MyGO!!!!!

个人自用的Spine API，用于在任意网页上引入MyGO!!!!!的Spine模型。

Spine是一款2D骨骼动画软件，此仓库中的模型的Spine版本均为4.0.64。

该仓库中所有Spine相关资源均来自于网络，**仅供学习交流，请勿用于商业用途，如有侵权，请联系删除**。

[**点击查看示例网页**](https://spine-api-mygo.panxuc.com/)。示例网页中模型位于左下角。

## 介绍

- 本项目API搭建方式参考自[panxuc/live2d-api-mygo](https://github.com/panxuc/live2d-api-mygo)。
- 本项目使用[PixiJS](https://github.com/pixijs/pixijs)实现了Spine渲染部分。Spine部分使用[pixi-spine](https://github.com/pixijs-userland/spine)进行渲染。
- 本项目模型来自[Bestdori](https://bestdori.com/)提供的《梦想协奏曲！少女乐团派对》游戏数据包资源。为了适配此项目，对Spine模型进行了一些必要的修改。**仅供学习交流，请勿用于商业用途，如有侵权，请联系删除**。
- **施工中！**由于游戏中包含的动作太多了，暂时全部套用了宇田川亚子的动作。

## TODO

- [x] 实现Spine模型的加载和渲染
- [ ] 添加更多文本。
- [ ] 匹配文本和动作。

## 模型

当前包含以下模型：

<table style="text-align: center;">
  <colgroup>
    <col style="width: auto;">
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
  </colgroup>
  <thead>
    <tr>
      <th></th>
      <th><img src="assets/chara_icon_36.png" alt="tomori"><br><span lang="ja">高松 燈</span></th>
      <th><img src="assets/chara_icon_37.png" alt="anon"><br><span lang="ja">千早 愛音</span></th>
      <th><img src="assets/chara_icon_38.png" alt="rana"><br><span lang="ja">要 楽奈</span></th>
      <th><img src="assets/chara_icon_39.png" alt="soyo"><br><span lang="ja">長崎 そよ</span></th>
      <th><img src="assets/chara_icon_40.png" alt="taki"><br><span lang="ja">椎名 立希</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>casual-2023</td>
      <td>春季休闲</td>
      <td>春季休闲</td>
      <td>春季休闲</td>
      <td>春季休闲</td>
      <td>春季休闲</td>
    </tr>
    <tr>
      <td>school_winter-2023</td>
      <td>冬季校服</td>
      <td>冬季校服</td>
      <td>冬季校服</td>
      <td>冬季校服</td>
      <td>冬季校服</td>
    </tr>
    <tr>
      <td>school_summer-2023</td>
      <td>夏季校服</td>
      <td>夏季校服</td>
      <td>夏季校服</td>
      <td>夏季校服</td>
      <td>夏季校服</td>
    </tr>
  </tbody>
</table>

## 使用

使用`jsdelivr`引入，只需在html页面的`head`或`body`中添加一行代码即可：

稳定版本：

```html
<script src="https://cdn.jsdelivr.net/gh/panxuc/spine-api-mygo@latest/autoload.js"></script>
```

最新版本：

```html
<script src="https://cdn.jsdelivr.net/gh/panxuc/spine-api-mygo/autoload.js"></script>
```

即使你fork了本项目，也请填写你的js文件的绝对路径而非相对路径，以避免出现各种奇怪的问题。

### 自定义配置

默认情况下，只在浏览器宽度大于768px时显示模型，以防止模型对手机端网页阅读造成不便；模型默认显示在左下角。你也可以通过URL传递参数修改这个配置：

```html
<script src="https://cdn.jsdelivr.net/gh/panxuc/spine-api-mygo@latest/autoload.js?width_limit=0&position=right"></script>
```

- `width_limit`：宽度限制，单位为像素，当浏览器宽度大于此值时显示模型，默认为768。
- `position`：模型位置，可选值为`left`和`right`，默认为`left`。
