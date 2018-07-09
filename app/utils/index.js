class Utils {
    constructor() {
    }

    async checkRequire(require, data) {
        for (let key of require) {
            if (key in data) {
                continue
            } else {
                return `缺少必要参数${key}`
            }
        }
        return false;
    }
    async callUserFunc(className, methodName, params) {
        const HandlerClass = require(`../controllers/${className}`)
        const handlerClass = new HandlerClass()
        if (Reflect.ownKeys(HandlerClass.prototype).includes(methodName)) {
            return await handlerClass[methodName](params)
        } else {
            console.log('not find method')
        }
    }
}

module.exports = new Utils()