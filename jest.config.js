module.exports =
 {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,

  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'document/coverage/',

  reporters:
   [
    'default',
     [
      './node_modules/jest-html-reporter',
       {
        pageTitle: 'Test Report',
        outputPath: 'document/test-report.html',
       },
     ],
   ],
 };
