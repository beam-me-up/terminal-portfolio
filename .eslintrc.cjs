/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
      "@remix-run/eslint-config",
      "@remix-run/eslint-config/node"
    ],
    rules: {
      "import/no-unresolved": "off",
      "import/namespace": "off"
    },
    ignorePatterns: ["dist", ".cache", "node_modules", "public/build"]
  };
  