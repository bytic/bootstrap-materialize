module.exports = {
    test: /\.(png|jpe?g|gif)$/,
    type: 'asset/resource',
    generator: {
        filename: 'images/[name][ext]'
    }
}
