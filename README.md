<div align="center">
<img src="resources/img.png" width = "200">
<h1>Yuuki-plugin-mini</h1>

基于 [Yunzai-Bot V3](https://github.com/Le-niao/Yunzai-Bot) 的功能插件

[![GitHub](https://img.shields.io/badge/GitHub-Yuuki-black?style=flat-square&logo=github)](https://github.com/AiYuuki/Yuuki-plugin-mini) [![插件库](https://img.shields.io/badge/GitHub-插件库-black?style=flat-square&logo=github)](https://github.com/yhArcadia/Yunzai-Bot-plugins-index) [![YunzaiBot](https://img.shields.io/badge/Yunzai-v3.0.0-black?style=flat-square&logo=dependabot)](https://github.com/Le-niao/Yunzai-Bot)

</div>
<br>

### 安装

将 Yuuki-plugin-mini 中你所需要的功能文件下载后放置在 Yunzai-Bot 的 plugins 目录下。

你也可以直接安装所有的插件：

1. 进入 Yunzai 根目录；
2. 根据你的网络状况选择一条执行 :

   ```
   // 使用gitee
   git clone https://gitee.com/AiYuuki/Yuuki-plugin-mini.git ./plugins/Yuuki-plugin-mini

   // 使用github
   git clone https://github.com/AiYuuki/Yuuki-plugin-mini.git ./plugins/Yuuki-plugin-mini
   ```

### 插件列表

| 插件名称     | 调用命令        | 支持版本 | 对应文件                  | 备注                          |
| ------------ | --------------- | :------: | ------------------------- | ----------------------------- |
| 今日早报     | `#今日早报`     |   `v3`   | Yuuki-mini-daily.js       |                               |
| 摸鱼日历     | `#摸鱼日历`     |   `v3`   | Yuuki-mini-moyu.js        |                               |
| 原神抽卡期望 | `#原神抽卡期望` |   `v3`   | Yuuki-mini-gachaExpect.js | 需同时下载 `resources` 文件夹 |

### 自动化

部分支持自动化插件的自动推送功能默认为关闭状态，你可以通过以下方式来调整自动推送参数：

1. 时间：插件的 `第8行` 允许你通过 `Cron表达式` 自定义推送的时间

2. 推送群聊：插件的 `第11行` 允许你通过字符串数组的形式填入你需要推送的群聊

3. 开关推送：插件的 `第14行` 允许你通过 `true` 或 `false` 来开启或关闭自动推送

### 免责声明

1. 功能仅限内部交流与小范围使用，请勿将 `Yunzai-Bot` 及 `Yuuki-plugin-mini` 用于任何以盈利为目的的场景；
2. 图片与其他素材均来自于网络，仅供交流学习使用，如有侵权请联系，会立即删除。
