module.exports = function override(config, env) {
    try {
        config.module.rules[2].oneOf.unshift({
            test: /\.md$/,
            use: [{
                loader: 'raw-loader',
            }]
        })
    } catch (error) {
        throw error;
    }

    return config;
}