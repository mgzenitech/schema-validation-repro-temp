const stylisticJs = require("@stylistic/eslint-plugin-js");
const jsoncPlugin = require("eslint-plugin-jsonc");
const eslintPluginJsonSchemaValidator = require('eslint-plugin-json-schema-validator');

const jsonRules = [
  ...jsoncPlugin.configs["flat/all"],
  {
    files: ["**/*.json", "**/*.json5", "**/*.jsonc"],
    rules: {
      "jsonc/key-name-casing": [
        "error",
        {
          "ignores": ["."]
        }
      ],
      "jsonc/no-comments": [
        "off"
      ],
      "jsonc/sort-array-values": [
        "off"
      ],
      "jsonc/sort-keys": [
        "error",
        "asc",
        {
          "caseSensitive": false,
          "natural": true,
        }
      ],
      "jsonc/array-bracket-newline": [
        "error",
        {
          "multiline": true,
          "minItems": 1
        }
      ],
      "jsonc/array-element-newline": [
        "error",
        {
          "minItems": 1
        }
      ],
      "jsonc/indent": [
        "error",
        2
      ],
    }
  },
  {
    files: ["**/*.json", "**/*.json5", "**/*.jsonc"],
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      "@stylistic/js/max-len": [
        "error",
        {
          "code": 120
        }
      ],
      "@stylistic/js/no-multiple-empty-lines": [
        "error",
        {
          max: 0,
          maxBOF: 0,
          maxEOF: 1
        }
      ],
      "@stylistic/js/no-trailing-spaces": [
        "error"
      ],
      "@stylistic/js/eol-last": [
        "error"
      ],
      "@stylistic/js/spaced-comment": [
        "error"
      ],
      "@stylistic/js/linebreak-style": [
        "error"
      ],
    }
  },
  ...eslintPluginJsonSchemaValidator.configs['flat/recommended'],
  {
    files: ["**/*.json", "**/*.json5", "**/*.jsonc"],
    rules: {
      "json-schema-validator/no-invalid": [
        "error",
        {
          schemas: [
            {
              fileMatch: ["./.vscode/settings.1.globals.ui.json"],
              schema: "https://raw.githubusercontent.com/wraith13/vscode-schemas/master/en/latest/schemas/settings/folder.json"
            }
          ],
          "useSchemastoreCatalog": false
        }
      ]
    }
  }
];

module.exports = [
  ...jsonRules,
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    }
  }
];
