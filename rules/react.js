module.exports = {
    "plugins": [
        "react"
    ],

    "rules":{
        "react/jsx-boolean-value": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-curly-spacing": [2, "never"], //  couses warning "can't resolve reference #/definitions/basicConfig from id #"
        "react/jsx-handler-names": 2,
        "react/jsx-indent-props": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-key": 2,
        "react/jsx-max-props-per-line": [2, {maximum: 3}],
        "react/jsx-no-bind": [2, {
            "ignoreRefs": true,
            "allowBind": true
        }],

        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-wrap-multilines":  [2, {declaration: true, assignment: true, return: true}],

        // "react/forbid-component-props": [2, { "forbid": ["className", "style"] }], // Bug in plugin. Cannot run with this rule
        "react/no-find-dom-node": 2,
        "react/no-render-return-value": 2,
        "react/require-render-return": 2,

        "react/no-danger": 2,
        "react/no-deprecated": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-is-mounted": 2,
        "react/no-multi-comp": 2,
        "react/no-string-refs": 2,
        "react/no-unknown-property": 2,
        "react/prefer-es6-class": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": [2, {
            "order": [
                "lifecycle",
                "/^handle.+$/",
                "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                "everything-else",
                "/^render.+$/",
                "render"
            ]
        }],
        "react/style-prop-object": 2,
        "react/no-unused-prop-types": 2,
        "react/no-unescaped-entities": 2,
        "react/no-children-prop": 2,
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-tag-spacing": 2,
        "react/require-default-props": 2,
        "react/no-array-index-key": 2,
        "react/forbid-foreign-prop-types": 2,
        "react/void-dom-elements-no-children": 2,
        "react/no-unescaped-entities": 2,
        "react/jsx-no-target-blank": 2,
        "react/jsx-no-comment-textnodes": 2,
        "react/jsx-key": 2,
        "react/no-string-refs": 2,
        "react/no-danger-with-children": 2,
        "react/no-will-update-set-state": 2,
        "react/default-props-match-prop-types": 2,
        "react/no-redundant-should-component-update": 2,
        "react/jsx-closing-tag-location": 2
    }
};
