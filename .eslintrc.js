module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    // eslint-plugin-vue overrides
    "vue/attribute-hyphenation": ["always", {
      "ignore": ["iconClass"]
    }],
    "no-console": "off",
    "vue/no-v-html": "off"
  }
}
