const ordersM = require('../models/orders')
const csv = require('fast-csv')
const fs = require('fs')
const path = require('path')
class Orders {
    constructor() {
    }

    async exportOrders (data) {
        let offset = 0
        const limit = 1000
        const orders = await ordersM.getOrders(offset, limit)
        return new Promise((resolve, reject) => {
            const csvStream = csv.createWriteStream({ headers: true })
            const writableStream = fs.createWriteStream(path.resolve('./storage/csv', `${data['title']}-${data['job_id']}.csv`));
            csvStream.pipe(writableStream);
            for (const order of orders[0]) {
                const jsonData = JSON.stringify(order)
                csvStream.write(JSON.parse(jsonData));
            }
            csvStream.end()
            csvStream.on('end', () => {
                resolve(true)
            })
            csvStream.on('error', () => {
                console.log(error)
                reject(false)
            })
        }).catch(error => {
            return error
        })
    }
}
module.exports = Orders