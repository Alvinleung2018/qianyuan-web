const apollo = require('node-apollo'),
    path = require('path'),
    fs = require('fs');

/**
 * Apollo配置的支持类，用于获取Apollo服务器的相关配置。
 * 因为执行过程涉及到异步转同步方法，因此在获取参数之前必须使用Init方法执行初始化，并且需要包装了async关键字后
 * @constructor
 */
function ApolloConfig() {
}

/**
 * 初始化异步参数
 * @param appId 当前模块的ApolloId
 * @returns {Promise<void>}
 */
ApolloConfig.prototype.init = async function (appId) {
    const filepath = this.filePath();
    const url = await this.apolloUrl(filepath);
    this.config = await this.obtainConfig(url, appId);
};

/**
 * 获取Apollo配置文件的路径，目前win32环境在C:\opt\settings中，LIKE UNIX的操作系统在/opt/settings。
 * 苹果的MAC OS未测试
 * @returns {string}
 */
ApolloConfig.prototype.filePath = function () {
    const platform = global.process.platform;
    let filePath = false;
    if (/windows|win32/i.test(platform)) {
        filePath = path.format({
            dir: 'C:\\opt\\settings',
            base: 'server.properties'
        });
    } else if (/linux/i.test(platform)) {
        filePath = path.format({
            dir: '/opt/settings',
            base: 'server.properties'
        });
    } else {
        throw "操作系统识别失败";
    }
    return filePath;
};

/**
 * 通过配置文件得到Apollo配置中心的访问路径。
 * @param filepath
 * @returns {Promise<unknown>}
 */
ApolloConfig.prototype.apolloUrl = function (filepath) {
    return new Promise((success, error) => {
        fs.readFile(filepath, 'utf-8', function (err, data) {
            if (err) {
                console.log(`Error:${err}`);
                error(err);
            } else {
                const split = data.split('=');
                const url = split && 2 === split.length ? split[1] : false;
                if (url) {
                    success(url)
                } else {
                    error(`解析Apollo服务器地址错误:${data}`)
                }
            }
        });
    });
};

/**
 * 获取Apollo的配置
 * @param url
 * @param appId
 * @returns {*|Promise<*>}
 */
ApolloConfig.prototype.obtainConfig = function (url, appId) {
    const config = {
        configServerUrl: url,
        appId: appId,
        clusterName: 'default',
        namespaceName: 'application',
    };
    return apollo.remoteConfigServiceFromCache(config);
};

module.exports = new ApolloConfig();
