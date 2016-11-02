module.exports = {
    use: ['postcss-import', 'postcss-media-minmax', 'postcss-custom-properties', 'postcss-clip-path-polyfill', 'postcss-color-function', 'autoprefixer'],
    input: 'src/resources/_postcss/main.css',
    output: 'dest/resources/css/main.css',
    watch: true,
    map: {
        inline: false
    }
};
