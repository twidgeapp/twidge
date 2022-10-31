const withTM = require('next-transpile-modules')([
    '@twidge/utils',
    '@twidge/components',
]);

module.exports = withTM({
    swcMinify: true,
    reactStrictMode: true,
});
