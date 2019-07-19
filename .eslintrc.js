module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "standard",
    "plugin:vue/base"
  ],
  "globals": {
    "tools": false
  },
  "rules": {
    'no-control-regex': 'error',
    'semi': ["error", "always"]
  }
};