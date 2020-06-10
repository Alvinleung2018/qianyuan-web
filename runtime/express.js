const express = require('express'),
    next = require('next'),
    //建立Uepay初始化配置
    establish = require('./establish'),
    //环境指示器
    env = process.env.NODE_ENV !== 'production';
(async () => {
    await establish();

    // 创建一个服务端运行的Next app
    const app = next({env}),
        // 请求处理器
        handle = app.getRequestHandler(),
        config = JSON.parse(process.env.uepayConfig);

    const port = config['port'] || 3000;

    app.prepare()
        .then(() => {
            const server = express();
            server.get('*', (req, res) => {
                return handle(req, res);
            });
            server.listen(port, (err) => {
                if (err) throw err;
                console.log(`> Ready on http://localhost:${port}`)
            })
        }).catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });
})();