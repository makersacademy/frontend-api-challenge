module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:testing-library/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "testing-library", "jest-dom"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
