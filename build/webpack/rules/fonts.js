module.exports = {
    test: /\.(woff2?|woff|ttf|eot|svg|otf)$/,
    type: 'asset/resource',
    generator: {
        filename: 'fonts/[name][ext]'
    }
}
