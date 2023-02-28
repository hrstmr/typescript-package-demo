module.exports = {
    singleQuote: true,
    tabWidth: 4,
    semi: true,
    printWidth: 100,
    bracketSameLine: true,
    trailingComma: 'es5',
    overrides: [
        {
            files: '**/*.mdx',
            options: {
                printWidth: 70,
                proseWrap: 'always',
            },
        },
    ],
};
