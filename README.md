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

## Developers

To test changes locally:

* run `npm link` in the cloned eslint-config project directory
* run `npm link @chax-at/eslint-config` in the project you want to test your config
* make sure you rerun the above command after an `npm install`
* run `npm unlink @chax-at/eslint-config` after you are done
