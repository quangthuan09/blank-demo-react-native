/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            globalReturn: false,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
    ],
    rules: {
        "react/jsx-filename-extension": [2, {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }],
        indent: [
            "error",
            4,
            {
                "ObjectExpression": 1,
                "ImportDeclaration": 1,
            },
        ],
        "comma-dangle": [
            2,
            "always-multiline",
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        quotes: [
            "error",
            "double",
        ],
        semi: [
            "error",
            "never",
        ],
        "react/prop-types": "off",
        "no-multi-spaces": [
            "error", {
                ignoreEOLComments: true,
            },
        ],
        "object-curly-newline": [
            "error", {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 1,
                },
                ObjectPattern: {
                    multiline: true,
                },
            }],
        "object-property-newline": "error",
        "object-curly-spacing": [
            "error", "always",
        ],
        "template-curly-spacing": ["error", "always"],
        "max-len": ["error", {
            code: 160,
            comments: 120,
        }],
        "block-scoped-var": "error",
        "curly": ["error", "multi", "consistent"],
        "no-var": "error",
        "sort-imports": ["error", {
            "ignoreCase": true,
            "ignoreDeclarationSort": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
            "allowSeparatedGroups": false,
        }],
        "comma-style": ["error", "last"],
        "func-call-spacing": ["error", "never"],
        "multiline-ternary": ["error", "always"],
        "no-multiple-empty-lines": ["error", {
            "max": 1,
            "maxBOF": 0,
        }],
        "space-before-function-paren": ["error", "always"],
    },
}
