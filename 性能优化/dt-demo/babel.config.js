module.exports = {
    presets: [ // 常用的babel插件在preset中做一个集合，只要调一下就可以使用
        [
            '@babel/preset-env',
            {
                modules: false, // 不需要转成其他的模块化语法，保留es6的模块化语法
                // 避免tree-shacking能起作用
                "targets": {
                    "browsers": [">0.25%"] // 市场份额大于百分之0.25的浏览器都要做到支持
                },
                "useBuiltIns": "usage", // 按需载入polyfill
                "bugfixes": true
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        "@babel/plugin-transform-runtime",
    ]
};