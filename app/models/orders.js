const sequelize = require('../lib/db')
class Orders {
    constructor() {
    }
    async getOrders (offset=0, limit=1000) {
        const sql = `select id,paid,price from orders limit ${offset}, ${limit}`
        try {
            const res = await sequelize.query(sql)
            return res
        } catch (error) {
            return false
        }
    }
}

module.exports = new Orders()