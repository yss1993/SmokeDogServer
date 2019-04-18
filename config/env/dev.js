/**
 * 开发环境配置
 * Created by yu_ss on 2019-03-13 11:31
 */
module.exports = {
    port: 8888,
    mysql: {
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'yangou',
        dialect: 'mysql',
        define: { freezeTableName: true, raw: true}
    }
};