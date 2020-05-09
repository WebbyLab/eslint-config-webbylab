module.exports = {
    extends: [
        './rules/base',
        './rules/fetch',
        './rules/import',
        './rules/no-require-lodash',
        './rules/prefer-spread',
        './rules/react',
        './rules/security',
        './rules/more',
        ].map(require.resolve),
    rules: {}
};
