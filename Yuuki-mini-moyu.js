import plugin from '../../lib/plugins/plugin.js'
import common from '../../lib/common/common.js'
import fetch from 'node-fetch'
import schedule from 'node-schedule'
import { Group, segment } from 'oicq'

// 定时发送时间，采用 Cron 表达式，当前默认为每日 9:00 分推送
const time = '0 0 9 * * ?'

// 指定定时发送的群号
const groupList = ['1234567', '7654321']

// 是否开启定时推送，默认为 false
const isAutoPush = false

autoTask()

export class example extends plugin {
  constructor() {
    super({
      name: '摸鱼日历',
      dsc: '获取摸鱼日历',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#摸鱼日历$',
          fnc: 'news'
        }
      ]
    })
  }

  async news(e) {
    pushNews(e)
  }
}

/**
 * 推送日历
 * @param e oicq传递的事件参数e
 */
async function pushNews(e) {
  // e.msg 用户的命令消息
  if (e.msg) {
    logger.info('[用户命令]', e.msg)
  }

  // 摸鱼人日历接口地址
  let url = await fetch('https://api.vvhan.com/api/moyu?type=json').catch(err => logger.error(err))
  let imgUrl = await url.json()
  const res = await imgUrl.url

  // 判断接口是否请求成功
  if (!res) {
    logger.error('[摸鱼人日历] 接口请求失败')
  }

  // 回复消息
  if (e instanceof Group) {
    e.sendMsg(segment.image(res))
  } else {
    e.reply(segment.image(res))
  }
}

/**
 * 定时任务
 */
function autoTask() {
  if (isAutoPush) {
    schedule.scheduleJob(time, () => {
      logger.info('[摸鱼人日历]：开始自动推送...')
      for (let i = 0; i < groupList.length; i++) {
        let group = Bot.pickGroup(groupList[i])
        pushNews(group)
        common.sleep(1000)
      }
    })
  }
}
