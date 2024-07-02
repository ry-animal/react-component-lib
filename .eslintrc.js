module.exports = {
  env: { browser: true },
  extends: [
    "@gamestop/eslint-config-nft",
    "plugin:storybook/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.js", "jest.*.js"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",

      {
        selector: ["objectLiteralProperty"],
        format: null,
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "max-lines-per-function": ["error", 200],
  },
  overrides: [
    {
      files: ["src/**/**.spec.ts*"],
      rules: {
        "max-lines-per-function": "off",
      },
    },
  ],
};
