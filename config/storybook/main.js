const path = require('path');

module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },

    webpackFinal: async (config) => {
        // ✅ Добавляем алиас `@ → src`
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../../src'),
        };

        // // ✅ Добавляем расширения
        // config.resolve.extensions.push('.ts', '.tsx');

        // // ✅ Добавляем modules, если нужно
        // config.resolve.modules.push(path.resolve(__dirname, '../../src'));

        return config;
    },
};
