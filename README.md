<div align="center">
<img src="resources/img.png" width = "200">
<h1>Yuuki-plugin-mini</h1>

基于 [Yunzai-Bot V3](https://gitee.com/Le-niao/Yunzai-Bot) 的功能插件

[![GitHub](https://img.shields.io/badge/GitHub-Yuuki-black?style=flat-square&logo=github)](https://github.com/AiYuuki/Yuuki-plugin-mini) [![插件库](https://img.shields.io/badge/GitHub-插件库-black?style=flat-square&logo=github)](https://github.com/yhArcadia/Yunzai-Bot-plugins-index) [![YunzaiBot](https://img.shields.io/badge/Yunzai-v3.0.0-black?style=flat-square&logo=dependabot)](https://gitee.com/Le-niao/Yunzai-Bot)

</div>

<br>

### 安装

1. 进入 Yunzai 根目录；
2. 根据你的网络状况选择一条执行 :

   ```
   // 使用gitee
   git clone https://gitee.com/AiYuuki/Yuuki-plugin-mini.git ./plugins/Yuuki-plugin-mini

   // 使用github
   git clone https://github.com/AiYuuki/Yuuki-plugin-mini.git ./plugins/Yuuki-plugin-mini
   ```

### 插件列表

| 插件名称     | 调用命令        | 支持版本 | 对应文件                  |
| ------------ | --------------- | :------: | ------------------------- |
| 今日早报     | `#今日早报`     |   `v3`   | Yuuki-mini-daily.js       |
| 摸鱼日历     | `#摸鱼日历`     |   `v3`   | Yuuki-mini-moyu.js        |
| 原神抽卡期望 | `#原神抽卡期望` |   `v3`   | Yuuki-mini-gachaExpect.js |

### 自动化

部分支持自动化插件的自动推送功能默认为关闭状态，你可以通过以下方式来调整自动推送参数：

1. 推送时间：插件的 `第08行` 允许你通过 `Cron表达式` 自定义推送的时间

2. 推送群聊：插件的 `第11行` 允许你通过 `字符串数组`的形式填入你需要推送的群聊

3. 开关推送：插件的 `第14行` 允许你通过 `true` 或 `false` 来开启或关闭自动推送

### 声明

1. `Yuuki-plugin-mini` 是对公网开放的，基于 [GNU Affero General Public License v3.0](https://github.com/AiYuuki/Yuuki-plugin-mini/blob/main/LICENSE) 协议开源的永久免费项目；
2. `Yuuki-plugin-mini` 仅用于 `Yunzai-Bot` 用户群的内部交流及小范围使用，使用时请遵守 [GNU Affero General Public License v3.0](https://github.com/AiYuuki/Yuuki-plugin-mini/blob/main/LICENSE) 协议；
3. `Yuuki-plugin-mini` 保证采用的所有第三方 API 均遵守其使用协议，但无法保证其 API 本身的合法性，请正确使用以避免法律风险。
