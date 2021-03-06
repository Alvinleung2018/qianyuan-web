const withCSS = require('@zeit/next-css'),
    withSass = require('@zeit/next-sass'),
    cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");
    // ApolloConfig = require('./src/util/apollo');

if (typeof require !== 'undefined') {
    /**
     * 与antd整合时如果使用按需加载组件样式，服务端会报以下错误：
     *      "/work/palmg/website-standard-with-next/node_modules/antd/lib/style/index.css:6
     *      @font-face {
     *      Invalid or unexpected token"
     * 主要原因是加载器使用错误，用if语句中这一段代码可以修复。
     * @param file
     */
    require.extensions['.css'] = file => {
    }
}
module.exports = withCSS(withSass({
    publicRuntimeConfig:{
        uepayConfig:process.env.uepayConfig
    },
    distDir: 'dist', //工作&打包文件生成路径
    cssModules: true,
    cssLoaderOptions: {
        localIdentName: "[local]___[hash:base64:5]",
        getLocalIdent: (context, localIdentName, localName, options) => {
            let hz = context.resourcePath.replace(context.rootContext, "");
            if (/node_modules/.test(hz) || /style.css/.test(hz)) {
                return localName;
            } else {
                return cssLoaderGetLocalIdent(
                    context,
                    localIdentName,
                    localName,
                    options
                );
            }
        }
    },
    webpack: function (cfg, opt) {
        const originalEntry = cfg.entry;
        cfg.entry = async () => {
            const entries = await originalEntry();
            if (
                entries['main.js'] &&
                !entries['main.js'].includes('./config/polyfills.js')
            ) {
                entries['main.js'].unshift('./config/polyfills.js')
            }
            return entries
        };
        //解析图片，图片位置放static目录下
        cfg.module.rules.push({
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        });
        return cfg
    }
}));

