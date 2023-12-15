const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
              }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
}