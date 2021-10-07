const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//webpack会将所有的配置写到module.exports中

module.exports = {
    mode: 'development',
    //入口文件
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        //告诉webpack别转成箭头函数,babel会处理  箭头函数ie低版本识别不了
        environment: {
            arrowFunction: false
        }

    },
    //指定webpack都打包哪些文件
    module: {
        //指定一些规则
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.less$/i,
                use:['style-loader','css-loader','less-loader',],
            },
           {
                test: /\.(jpg|png|gif)$/,
                loader:'url-loader',
           }
        ]
    },

    //配置webpack插件
    plugins: [
        //每次打包先清除之前的bundle.js 然后再重新生成
        new CleanWebpackPlugin(),
        // new HTMLWebpackPlugin()  这样会默认在bundle.js同级目录下生成index.html并引入
        new HTMLWebpackPlugin(
            {
                //指定自己的html文件 会帮你自动引入bundle.js
                template: './src/index.html'
            }
        )
    ],
    //用来设置引用模块 如果不设置 index没法引入module.ts 
    resolve: {
        extensions: ['.ts', '.js']
    }

}