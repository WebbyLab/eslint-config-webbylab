eslint-config-webbylab
----------------------

Eslint config that we use in WebbyLab

## How to use

1. Install config with eslint and eslint plugins

```
npm install --save-dev eslint-config-webbylab eslint@^7.0.0 eslint-plugin-fetch eslint-plugin-import eslint-plugin-no-require-lodash eslint-plugin-prefer-spread eslint-plugin-react@^7.1.0 eslint-plugin-more eslint-plugin-security @babel/eslint-parser @babel/preset-react
```


2. Create own `.eslintrc`

```
{
    "extends": "webbylab"
}
```
