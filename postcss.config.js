module.exports = {
    use: ['postcss-import', 'autoprefixer'],
    input: '_resources/css/main.css',
    output: '_resources/build/main.css',
    map: {
        inline: false
    }
};
