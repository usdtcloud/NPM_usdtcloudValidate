var configSql = {
    getConfig:`SELECT value FROM ea_system_config WHERE  name = ?`
};
module.exports = configSql;