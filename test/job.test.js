const expect = require('chai').expect
const {CACHE_EXPORT_JOB_LIST} = require('../app/config/constant')
const redis = require('../app/lib/redis')
const unique = require('siwi-uniquestring')
describe('jobs', () => {
    it('创建任务', async () => {
        const job = {
            className: 'orders',
            methodName: 'exportOrders',
            params: {
                title: '导出1000订单',
                job_id: await unique.random(),
                date_start: '2017-07-01',
                date_end: '2018-07-09',
            }
        }
        const res = await redis.lpush(CACHE_EXPORT_JOB_LIST, JSON.stringify(job))
        console.log(res)
        expect(res).to.be.a('Number')
    });
});