module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
    projectFolderIgnoreList: ["node_modules", "public"]
  },
  rules: {
      "@typescript-eslint/naming-convention": "off"
      "import/no-extraneous-dependencies": "off"
  }
};