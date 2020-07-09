const modoDev = process.env.NODE_ENV !== 'production' // dessa forma, se eu colocar run start = modoDev, run build = modoProduction
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', // se for V = dev, se for F = prod
    entry: './src/principal.js', // entrada, onde eu pegarei os arquivos
    output: { // saída, onde saíra os arquivos para irem para o navegador
        filename: 'principal.js',
        path: __dirname + '/public' // dirname é a pasta raiz, ou seja dentro da pasta webpack criar uma new folder + nome da pasta
    },
    devServer: { // WebServer
        contentBase: "./public",
        port: 8080
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
         new MiniCssExtractPlugin({
             filename: 'estilo.css',
         }),
         new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{ // regras do webpack, aqui onde vou colocar os loaders para funcionar tudo
            test: /\.s?[ac]ss$/, // desse jeito com REJEX, roda css, scss, sass.
            use: [
                MiniCssExtractPlugin.loader, // faz a mesma coisa que o debaixo
                // 'style-loader', // Add o CSS na DOM injetando a tag <style>
                'css-loader', // interpreta @import, url() ...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}