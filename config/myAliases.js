const path = require('path');

const myAliases = {
    theme: path.resolve('src/theme'),
    '@core/models': path.resolve('src/core/models'),
    '@core/store': path.resolve('src/core/store'),
    '@core/utils': path.resolve('src/core/utils'),
    '@core/ui': path.resolve('src/core/ui'),

    '@website/components': path.resolve('src/website/components'),
    '@website/utils': path.resolve('src/website/utils')
};

module.exports = myAliases;
