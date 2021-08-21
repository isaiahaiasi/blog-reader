module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:import/typescript",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["*config*"] },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
  },
  ignorePatterns: [
    ".eslintrc.js",
    "postcss.config.js",
    "webpack.config.js",
    "tailwind.config.js",
    "public",
  ],
};
