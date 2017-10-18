module.exports = {
    entry: ['babel-polyfill', './src/js/app.js'],
    output: {
        path: __dirname + '/assets/js',
        filename: "app.js"
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    },
    devtool: 'source-map',
}