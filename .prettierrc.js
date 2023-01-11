/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  // `pnpm` has auto-loading issue with prettier plugins, loads plugins manually to avoid the issue.
  plugins: [require('prettier-plugin-tailwindcss')],
};
