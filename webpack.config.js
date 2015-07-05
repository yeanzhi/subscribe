/**
 * Created by ÑÜÇç on 2015/7/5.
 */

'use strict';
var path = require('path');

module.exports = {
    entry: [
        "./src/entry.js"
    ],
    output: {
        path: path.join(__dirname, 'src/out'),
        publicPath: './src/out/',
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png|gif)$/, loader: "url?limit=8192"}
        ]
    }
};