module.exports = {
    use: ['postcss-import', 'postcss-media-minmax', 'postcss-custom-properties', 'postcss-clip-path-polyfill', 'postcss-color-function', 'autoprefixer'],
    input: '_resources/_postcss/main.css',
    output: '_resources/css/main.css',
    watch: true,
    map: {
        inline: false
    }
};
