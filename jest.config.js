module.exports = {
  // testRegex: "test/unit/.*.test.js$",
  testMatch: ["<rootDir>/test/unit/*.test.js"],
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue",
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    // process js with `babel-jest`
    "\\.[jt]sx?$": "babel-jest",
    "vee-validate/dist/rules": "babel-jest",
  },
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^~~/(.*)$": "<rootDir>/$1",
  },
  setupFiles: ["<rootDir>/test/unit/setup", "jest-localstorage-mock"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/.nuxt/**",
    "!**/components/graph-canvas/**",
    "!**/app/**",
    "!**/components/promotion-message-builder/**",
    "!**/components/import-promotion-message/**",
    "!**/components/main-footer/**",
    "!**/components/main-header/components/**",
    "!**/components/sortable-item/**",
    "!**/components/sortable-list/**",
    "!**/components/t-button/**",
    "!**/components/t-label/**",
    "!**/components/tailwind-input/**",
    "!**/components/cookie-consent/**",
    "!**/components/show-bookmarks/**",
    "!**/modules/**",
    "!**/static/**",
    "!**/tmp/**",
    "!**/coverage/**",
    "!**/dist/**",
    "!**/layouts/*.vue",
    "!**/layouts/_default/components/**",
    "!**/node_modules/**",
    "!**/middleware/**",
    "!**/pages/**",
    "!**/plugins/**",
    "!**/test/**",
    "!**/scripts/errors.js",
    "!**/*.config.js",
    "!**/components/**/script.js",
    "!**/components/number-input/**",
    "!**/components/campaign-cost/**",
    "!**/layouts/**/script.js",
    "!**/scripts/tutorial.js",
    "!**/store/global.js",
    "!**/store/profile.js",
    "!**/lib/vuex-pathify/**",
  ],
  coverageReporters: ["html", "text", "text-summary"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!vee-validate/dist/rules)"],
  globals: {
    "vue-jest": {
      pug: {
        doctype: "html",
      },
    },
  },
};
