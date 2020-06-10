const establish = async () => {
    const uepay = require('./uepayConfig');
    await uepay.init().catch(err => {
        console.log(err)
    });

    const isLocal = uepay.runtimeLocal;
    if (uepay.config.runtimeLocal) {
        process.env.uepayConfig = JSON.stringify(uepay.config.localConfig);
    } else {
        const apollo = require('./apolloConfig');
        await apollo.init(uepay.config.appId);
        process.env.uepayConfig = JSON.stringify(apollo.config);
    }
};
const r = establish();
module.exports = establish;



