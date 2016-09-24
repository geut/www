module.exports = {
    use: ['postcss-import', 'autoprefixer'],
    input: '_resources/_postcss/main.css',
    output: '_resources/css/main.css',
    map: {
        inline: false
    }
};
