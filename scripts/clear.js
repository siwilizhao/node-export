const shell =require('shelljs')
const readline = require('readline')
class Script {
    constructor() {
        this.init()
    }
    async init () {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return new Promise((resolve,reject) => {
            rl.question('是否确定清除？(Y/N):', res => {
                if (res == 'Y' || res == 'y') {
                    shell.exec('rm -rf ./storage/csv/*.csv')
                    rl.close()
                    console.log('清除完成')
                    resolve(true)
                } else {
                    console.log('您已经取消清除')
                    rl.close()
                    reject(false)
                }
            })
        }).catch(error => {
            return error
        })
       
    }
}

module.exports = new Script()