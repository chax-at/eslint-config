# chax-at/eslint-config

Base eslint config for typescript projects

## Installation

```
npm install @chax-at/eslint-config --save-dev
```

### Peer dependencies

```
npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

## Usage

Add the config to the extends rule section of your `.eslintrc`

```json
{
  "extends": [
    "@chax-at/eslint-config"
  ]
}
```

## Example config

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": [
    "@chax-at/eslint-config"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "legacyDecorators": true,
      "modules": true
    },
    "ecmaVersion": 6,
    "project": "./tsconfig.json",
    "sourceType": "module",
    "tsconfigRootDir": "./"
  },
  "plugins": [
    "@typescript-eslint",
    "mocha"
  ]
}
```