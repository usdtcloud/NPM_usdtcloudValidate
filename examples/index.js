const mysqlClient = require('../src/mysqlClient')
const configre = require('./model/configure')
const mysqlConfig = require('./mysqlConfig')
const mysql = new mysqlClient(mysqlConfig)

mysql.row(configre.getConfig,['block_withdraw']).then(console.log).catch(console.log)
