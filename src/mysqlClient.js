'use strict';
const mysql = require('mysql');

class mysqlClient {
    constructor(mysqlConfig) {
        this.pool = mysql.createPool(mysqlConfig);
    }
    //将结果已对象数组返回
    row     = (sql, ...params) => {
        const pool = this.pool
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, params, function (error, res) {
                    connection.release();
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(res);
                });
            });
        });
    };
    //返回一个对象
    first   = (sql, ...params) => {
        const pool = this.pool
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, params, function (error, res) {
                    connection.release();
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(res[0] || null);
                });
            });
        });
    };
    //返回单个查询结果
    single  = (sql, ...params) => {
        const pool = this.pool
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, params, function (error, res) {
                    connection.release();
                    if (error) {
                        reject(error);
                        return;
                    }
                    for (let i in res[0]) {
                        resolve(res[0][i] || null);
                        return;
                    }
                    resolve(null);
                });
            });
        });
    }
    //执行代码，返回执行结果
    execute = (sql, ...params) => {
        const pool = this.pool
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, params, function (error, res) {
                    connection.release();
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(res);
                });
            });
        });
    }
}

module.exports = mysqlClient