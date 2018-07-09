const options = {
    port: 6379, // Redis port
    host: '192.168.10.10', // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: '',
    db: 0
}
const Redis = require('siwi-ioredis')
const redisInstance = new Redis(options)
const redis = redisInstance.redisClient
module.exports = redis