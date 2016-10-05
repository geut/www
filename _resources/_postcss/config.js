module.exports = {
    use: ['postcss-import', 'postcss-media-minmax', 'postcss-custom-properties', 'autoprefixer'],
    input: '_resources/_postcss/main.css',
    output: '_resources/css/main.css',
    watch: true,
    map: {
        inline: false
    }
};
