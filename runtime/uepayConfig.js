const path = require('path'),
    fs = require('fs');

function UepayConfig() {
    this.config = {};
}

UepayConfig.prototype.init = async function () {
    /**
     *
     * @type {Object}
     * @example {
     *     appId: 'Your AppId'
     * }
     */
    this.config = await this.readConfig();
};

UepayConfig.prototype.readConfig = function () {
    return new Promise((success, error)=>{
        const filePath = path.join(process.cwd(), 'uepay.config.js');
        fs.readFile(filePath, 'utf-8', function (err, code) {
            if (err) {
                error(err);
            } else {
                const Module = module.constructor;
                const m = new Module();
                m._compile(code, 'next.config.js');
                const a = m.exports;
                success(a)
            }
        });
    })
};
module.exports = new UepayConfig();
