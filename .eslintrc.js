module.exports = {
  "root": true,
  "extends": "airbnb-base",
  "overrides": {
    "files": ["src/**/*.js", "tests/**/*.js"],
    "rules": {
      "class-methods-use-this": "off"
    }
  }
};