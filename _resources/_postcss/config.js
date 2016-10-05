module.exports = {
    use: ['postcss-import', 'autoprefixer', 'postcss-media-minmax'],
    input: '_resources/_postcss/main.css',
    output: '_resources/css/main.css',
    watch: true,
    map: {
        inline: false
    }
};
