module.exports = {
    "plugins": [
        "import"
    ],

    "rules":{
        "import/no-unresolved": 2,
        "import/export": 2,
        "import/no-extraneous-dependencies": 2,
        "import/no-mutable-exports": 2,
        "import/no-commonjs": 2,
        "import/no-duplicates": 2,
        "import/imports-first": 2,
        "import/order": [2, {"groups": ["builtin", "external", "internal",  "parent", "sibling", "index" ]}],
        "import/newline-after-import": 2,
        "import/no-webpack-loader-syntax": 2,
        "import/no-named-default": 2

    }
};
