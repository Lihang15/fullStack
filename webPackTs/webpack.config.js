const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//webpack会将所有的配置写到module.exports中

module.exports={
    mode : 'development',
    //入口文件
    entry:'./src/index.ts',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
        //告诉webpack别转成箭头函数,babel会处理  箭头函数ie低版本识别不了
        environment:{
            arrowFunction:false
        }
        
    },
    //指定webpack都打包哪些文件
    module:{
        //指定一些规则
        rules:[
            {
               //匹配当前目录下.ts文件结尾的文件 使用ts-loader 加载ts相关 babel配置转成低版本浏览器能识别的代码 
               test:/\.ts$/,
               //这个规则需要用到的工具
               use:[
                   {
                    loader:"babel-loader",
                    options:{
                            presets:[
                                ["@babel/preset-env", {
                                    // targets:{
                                    //     'edge':'94'
                                    // },
                                    targets:'defaults',
                                    //可以处理promise
                                    "corejs":"3",
                                    //按需要引入
                                    "useBuiltIns":"usage"
                                }]
                                
                            ]
                    }
                
                    },'ts-loader'],
               //排除node-module文件
               exclude:/node-module/
            }
        ]
    },

    //配置webpack插件
    plugins:[
        //每次打包先清除之前的bundle.js 然后再重新生成
        new CleanWebpackPlugin(),
        // new HTMLWebpackPlugin()  这样会默认在bundle.js同级目录下生成index.html并引入
        new HTMLWebpackPlugin(
            {
                //指定自己的html文件 会在bundle.js同级目录 生成一个index.html同样的文件 并帮你自动引入bundle.js
                template:'./src/index.html'
            }
        )
    ],
    //用来设置引用模块 如果不设置 index没法引入module.ts 
    resolve:{
        extensions:['.ts','.js']
    }

}