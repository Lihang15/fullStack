module.exports = {
    entry: "./a.js",
    output: {
        path: __dirname,
        filename: "main.js"
    },
    mode : 'development',
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style-loader!css-loader" }
    //     ]
    // }
    module: {
        rules: [{
          // 打包图片
          test: /\.(jpg|png|gif)$/,
          use: {
            // loader: 'file-loader',
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
              limit: 8192,
            },
          },
        },
       {
         // 打包 css、less
          test: /\.(css)$/,
          use: [
           'style-loader', 
           {
             loader: 'css-loader',
             options: {
               importLoaders: 2,
            }
           },
           'less-loader',
           'css-loader',
           'style-loader'
         ],
       }],
      },
};