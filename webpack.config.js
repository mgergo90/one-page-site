// This library allows us to combine paths easily
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'onepage/themes/custom/onepage_theme/components/scripts/script.js'),
        path.resolve(__dirname, 'onepage/themes/custom/onepage_theme/components/scss/style.scss')
    ],
    output: {
        path: path.resolve(__dirname, 'onepage/themes/custom/onepage_theme/dist'),
        filename: 'script.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        js: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['es2015']
                            }
                        }
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                include: [
                    path.resolve(__dirname, 'onepage/themes/custom/onepage_theme/images')
                ],
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'public/images/',
                    publicPath: '/profiles/onepage/themes/custom/onepage_theme/dist/'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                include: [
                    path.resolve(__dirname, 'onepage/themes/custom/onepage_theme/fonts')
                ],
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'public/fonts/',
                    publicPath: '/profiles/onepage/themes/custom/onepage_theme/dist/'
                }
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};
