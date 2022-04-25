module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "comma-dangle": [2, "never"],
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "react/react-in-jsx-scope": "off",

    "jsx-a11y/label-has-associated-control": ["error", {
      required: {
        some: ["nesting", "id"]
      }
    }],
    "jsx-a11y/label-has-for": ["error", {
      required: {
        some: ["nesting", "id"]
      }
    }]
  }
};
