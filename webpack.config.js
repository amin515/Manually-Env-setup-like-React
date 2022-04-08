
const path = require('path');
const HtmlWebpack = require('html-webpack-plugin')

module.exports = {
    mode : "development",
    entry : path.resolve(__dirname, 'src/index.js'),
    output : {
        path : path.resolve(__dirname, 'bundle'),
        filename : 'bundle.js',
        assetModuleFilename : '[name][ext]',
        clean : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.(css|scss)$/,
                use : ['style-loader','css-loader','sass-loader']
                
            },
            {
                test : /\.(jpg|jpeg|gif|png|webp)$/i,
                type : 'asset/resource'
                
            }

        ]
    },
    devServer : {
      static : {
          directory : path.resolve(__dirname, 'bundle')
      },
      port : 3000,
      hot : true,
      open : true,
      compress : true,
      historyApiFallback : true
    },
    plugins : [
        new HtmlWebpack({
            title : 'React app enviorment',
            filename : 'index.html',
            template : path.resolve(__dirname, 'public/index.html')
        })
    ]
}