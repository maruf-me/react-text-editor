module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
};

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2020: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     '@typescript-eslint/recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.js'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//     'react/react-in-jsx-scope': 'off',
//     '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
// }
