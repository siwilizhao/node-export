const utils = require('../app/utils')
class Export {
    constructor() {
    
    }
    async distribute (job) {
        const className = job['className']
        const methodName = job['methodName']
        const params = job['params']
        
        return await utils.callUserFunc(className, methodName, params)
    }
}

module.exports = new Export()