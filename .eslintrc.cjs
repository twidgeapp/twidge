module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
    },
    plugins: ['@typescript-eslint'],
    root: true,
};

