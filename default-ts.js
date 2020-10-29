module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit",
        "overrides": {
          "constructors": "no-public",
          "properties": "off"
        }
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "off",
      {
        "allowArgumentsExplicitlyTypedAsAny": false,
        "allowDirectConstAssertionInArrowFunctions": true,
        "allowHigherOrderFunctions": true,
        "allowTypedFunctionExpressions": true
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "ArrayExpression": "first",
        "CallExpression": {
          "arguments": "first"
        },
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "ObjectExpression": "first",
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "format": [
          "PascalCase"
        ],
        "prefix": [
          "I"
        ],
        "selector": "interface"
      }
    ],
    "@typescript-eslint/no-dupe-class-members": [
      "error"
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        "ignoreParameters": true,
        "ignoreProperties": true
      }
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unnecessary-condition": [
      "error"
    ],
    "@typescript-eslint/no-unused-expressions": [
      "error"
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/semi": [
      "error"
    ],
    "arrow-body-style": "off",
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "block-scoped-var": "warn",
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline",
        "imports": "always-multiline",
        "objects": "always-multiline"
      }
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "func-call-spacing": "error",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "indent": [
      "error",
      2,
      {
        "ArrayExpression": "first",
        "CallExpression": {
          "arguments": "first"
        },
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "ObjectExpression": "first",
        "SwitchCase": 1
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "after": true,
        "before": true,
        "overrides": {
          "catch": {
            "after": false
          },
          "for": {
            "after": false
          },
          "if": {
            "after": false
          },
          "switch": {
            "after": false
          },
          "while": {
            "after": false
          }
        }
      }
    ],
    "linebreak-style": "off",
    "lines-between-class-members": "off",
    "max-classes-per-file": "off",
    "max-len": [
      "warn",
      {
        "code": 220
      }
    ],
    "no-await-in-loop": "off",
    "no-console": [
      "warn",
      {
        "allow": [
          "error"
        ]
      }
    ],
    "no-continue": "off",
    "no-dupe-class-members": "warn",
    "no-else-return": "warn",
    "no-empty-function": "off",
    "no-nested-ternary": "warn",
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-plusplus": "off",
    "no-restricted-syntax": [
      "error",
      {
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        "selector": "ForInStatement"
      },
      {
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        "selector": "LabeledStatement"
      },
      {
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        "selector": "WithStatement"
      }
    ],
    "no-return-assign": "error",
    "no-shadow": "warn",
    "no-undef": "warn",
    "no-unused-expressions": [
      "off"
    ],
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-shorthand": [
      "error",
      "properties"
    ],
    "padded-blocks": "off",
    "prefer-const": [
      "error",
      {
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-destructuring": [
      "warn",
      {
        "array": false,
        "object": true
      }
    ],
    "prefer-template": "error",
    "quotes": "off",
    "semi": [
      "off"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "template-curly-spacing": [
      "error",
      "never"
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
}