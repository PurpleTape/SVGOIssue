const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    chainWebpack: (config) => {
        config.module
            .rule('svg')
            .use('svgo-loader')
            .loader('svgo-loader')
            .options({
                configFile: false,
                plugins: [
                    'preset-default',
                ],
            });
    },
});
