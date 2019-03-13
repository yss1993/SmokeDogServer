/**
 * 服务配置
 * Created by yu_ss on 2019-03-13 11:38
 */
const envType = require('./envType');

//当前环境类型
let currentEnvType = envType.dev;

class EnvConfig {
    constructor() {
        this.config = require(__dirname + '/env/' + currentEnvType);
    }
}

let envConfigInstance = null;

module.exports.getInstance = () => {
    if (!envConfigInstance)  {
        envConfigInstance = new EnvConfig();
    }
    return envConfigInstance;
};
