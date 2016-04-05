module.exports = {
    entry: __dirname + '/js/app.js',
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                },
            }
        ],
    },
};
