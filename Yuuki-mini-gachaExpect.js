import plugin from '../../lib/plugins/plugin.js'
import { segment } from 'oicq'
import fs from 'fs'

export class example extends plugin {
  constructor() {
    super({
      name: '原神抽卡期望',
      dsc: '获取原神抽卡期望',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#原神抽卡期望$',
          fnc: 'getGachaExpect'
        }
      ]
    })
  }

  async getGachaExpect(e) {
    gachaExpect(e)
  }
}

async function gachaExpect(e) {
  let path = `${process.cwd()}/plugins/Yuuki-plugin-mini/resources/gachaExpect.jpg`
  if (fs.existsSync(path)) {
    let msg = [segment.image(path), '[来源: NGA@一棵平衡树]']
    e.reply(msg)
  } else {
    e.reply('查询失败~>_<')
  }
}
