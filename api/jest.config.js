module.exports = {
  // Test all files either suffixed with "-test.js", "-test.jsx", "-test.ts", "-test.tsx", or
  // having ".test.js", ".test.jsx", ".test.ts", ".test.tsx" extensions
  testRegex: '.*[-.]test\\.(js|ts)x?$',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
