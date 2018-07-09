const wait = require('siwi-wait')
const redis = require('../app/lib/redis')
const exportM = require('../index')
const { CACHE_EXPORT_JOB_LIST, COMMON_WAIT_TIME, CACHE_EXPORT_JOB_SUCCESS_LIST, CACHE_EXPORT_JOB_FAIL_LIST} = require('../app/config/constant')
class Router {
    constructor() {
        this.init()
    }
    async init () {
        while (true) {
            const job = await redis.rpop(CACHE_EXPORT_JOB_LIST)
            if (job) {
                const data = JSON.parse(job)
                console.log(data)
                const res = await exportM.distribute(data)
                if (res) {
                    console.log('处理成功')
                    await redis.lpush(CACHE_EXPORT_JOB_SUCCESS_LIST, job)
                } else {
                    console.log('处理失败')
                    await redis.lpush(CACHE_EXPORT_JOB_FAIL_LIST, job)
                }
            }
            console.log('没有任务等待中...')
            await wait(COMMON_WAIT_TIME * 1000)
        }
    }
}
module.exports = new Router()