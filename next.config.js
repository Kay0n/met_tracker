module.exports = {
    reactStrictMode: true,

    // prevents serveronly modules to be loaded on the client
    // mitigates "Error: Can't resolve 'modulename'"
    webpack: (config, { isServer }) => {
    if (!isServer) {
        config.resolve.fallback = {
            fs: false,
            crypto: false,
            path: false
        }
    }

    return config;
    }
}
