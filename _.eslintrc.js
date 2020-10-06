module.exports =
 {
  // root: true,
  // env:
  //  {
  //   node: true,
  //   browser: true,
  //   es6: true,
  //  },
  // extends:
  //  [
  //   'plugin:vue/recommended',
  //   '@vue/standard',
  //  ],
  // globals:
  //  {
  //   // Atomics: 'readonly',
  //   // SharedArrayBuffer: 'readonly',
  //   // jQuery: 'readonly',
  //   // '$': 'readonly',
  //   _: 'readonly',
  //  },
  // parserOptions:
  //  {
  //   parser: 'babel-eslint',
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  //  },
  // rules:
  //  {
  //   // // Generic.
  //   // strict:                                        ['error',  'global'],
  //   // 'block-spacing':                               ['error'],
  //   // quotes:                                        ['error', 'single'],
  //   // 'space-infix-ops':                             ['error'],
  //   // 'space-in-parens':                             ['error', 'never'],
  //   // 'array-bracket-spacing':                       ['error', 'never'],
  //   // 'object-curly-spacing':                        ['error', 'always'],
  //   // 'computed-property-spacing':                   ['error', 'never'],
  //   // 'template-curly-spacing':                      ['error', 'never'],
  //   // 'quote-props':                                 ['error', 'as-needed'],
  //   // 'object-shorthand':                            ['error', 'always'],
  //   // 'key-spacing':                                 ['error', { beforeColon: false, afterColon: true, mode: 'minimum' }],
  //   // 'switch-colon-spacing':                        ['error', { before: false, after: true }],
  //   // 'comma-style':                                 ['error', 'last'],
  //   // 'comma-spacing':                               ['error', { before: false, after: true }],
  //   // 'keyword-spacing':                             ['error', { before: true, after: true }],
  //   // 'space-unary-ops':                             ['error', { words: true, nonwords: false }],
  //   // 'space-before-blocks':                         ['error', 'always'],
  //   // 'linebreak-style':                             ['error', 'unix'],
  //   // 'eol-last':                                    ['error', 'never'],

  //   // 'no-console':                                  ['off'],

  //   // // Function.
  //   // 'func-style':                                  ['error', 'declaration', { allowArrowFunctions: true }],
  //   // 'func-call-spacing':                           ['error', 'never'],
  //   // 'space-before-function-paren':                 ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
  //   // 'arrow-spacing':                               ['error', { before: true, after: true }],
  //   // 'generator-star-spacing':                      ['error', { before: true, after: false }],

  //   // // Class.
  //   // 'lines-between-class-members':                 ['error', 'always'],
  //   // 'no-class-assign':                             ['error'],
  //   // 'no-useless-constructor':                      ['error'],
  //   // 'no-useless-rename':                           ['error'],

  //   // // New.
  //   // 'new-parens':                                  ['error'],
  //   // 'no-array-constructor':                        ['error'],
  //   // 'no-new-object':                               ['error'],
  //   // 'no-new-wrappers':                             ['error'],
  //   // 'no-new-symbol':                               ['error'],

  //   // // Language.
  //   // 'no-lonely-if':                                ['error'],
  //   // 'no-mixed-operators':                          ['error'],
  //   // 'no-multi-assign':                             ['error'],
  //   // 'no-unneeded-ternary':                         ['error'],
  //   // 'no-var':                                      ['error'], // Use `let` or `const`.
  //   // 'prefer-const':                                ['error'],
  //   // 'operator-assignment':                         ['error', 'always'],
  //   // 'no-fallthrough':                              ['off', { commentPattern: 'break' }], // Doesn't work. Needs to be 'off'.
  //   // 'max-statements-per-line':                     ['error', { max: 1 }],

  //   // // Comments.
  //   // 'spaced-comment':                              ['error', 'always'],
  //   // // 'capitalized-comments':                        ['error'],

  //   // // Unsure.
  //   // 'no-underscore-dangle':                        ['warn'],  // Use the new private # sign.
  //   // // 'one-var':                                     ['warn',  'never'],
  //   // 'nonblock-statement-body-position':            ['error', 'beside'],
  //   // // padding-line-between-statements
  //   // // prefer-rest-params

  //   // 'no-tabs':                                     ['error'],
  //   // 'no-mixed-spaces-and-tabs':                    ['error'],
  //   // // 'indent':                       ['error', 4, { SwitchCase: 1, VariableDeclarator: 'first', MemberExpression: 0, FunctionDeclaration: { parameters: 'first' }, CallExpression: { arguments: 'first' }, ArrayExpression: 1, ObjectExpression: 1, }],
  //   // // 'brace-style':                  ['error', 'allman'],

  //   // 'require-atomic-updates':                      ['off'],
  //   // 'no-control-regex':                            ['off'],
  //   // 'no-new-func':                                 ['off'],
  //   // 'operator-linebreak':                          ['off'],

  //   // 'no-multi-spaces':                             ['off'],
  //   // 'no-multiple-empty-lines':                     ['off'],
  //   // 'padded-blocks':                               ['off'],

  //   // indent:                                        ['off'],
  //   // 'vue/script-indent':                           ['off'],
  //   // 'vue/html-indent':                             ['error', 2],

  //   // camelcase:                                     ['off'],
  //   // 'vue/camelcase':                               ['off'],

  //   // 'brace-style':                                 ['off'],
  //   // 'vue/brace-style':                             ['off'],

  //   // 'vue/array-bracket-spacing':                   ['error'],
  //   // 'vue/arrow-spacing':                           ['error'],
  //   // 'vue/block-spacing':                           ['error'],
  //   // 'vue/comma-dangle':                            ['error', 'always-multiline'],
  //   // 'vue/dot-location':                            ['error'],
  //   // 'vue/eqeqeq':                                  ['error'],
  //   // 'vue/key-spacing':                             ['error'],
  //   // 'vue/keyword-spacing':                         ['error'],
  //   // 'vue/no-deprecated-scope-attribute':           ['error'],
  //   // 'vue/no-deprecated-slot-attribute':            ['error'],
  //   // 'vue/no-deprecated-slot-scope-attribute':      ['error'],
  //   // 'vue/no-empty-pattern':                        ['error'],
  //   // 'vue/no-irregular-whitespace':                 ['error'],
  //   // 'vue/no-reserved-component-names':             ['error'],
  //   // 'vue/no-static-inline-styles':                 ['error'],
  //   // 'vue/no-unsupported-features':                 ['error'],
  //   // 'vue/object-curly-spacing':                    ['error', 'always'],
  //   // 'vue/padding-line-between-blocks':             ['error'],
  //   // 'vue/space-infix-ops':                         ['error'],
  //   // 'vue/space-unary-ops':                         ['error'],
  //   // 'vue/valid-v-slot':                            ['error'],
  //   // 'vue/no-template-shadow':                      ['off'],
  //   // 'vue/html-closing-bracket-newline':            ['error', { singleline: 'never', multiline: 'never' }],
  //   // 'vue/v-bind-style':                            ['error', 'longform'],
  //   // 'vue/v-on-style':                              ['error', 'longform'],
  //   // 'vue/multiline-html-element-content-newline':  ['off'],
  //   // 'vue/max-attributes-per-line':                 ['off'],
  //   // 'vue/singleline-html-element-content-newline': ['off'],
   },

  overrides:
   [
     {
      env:
       {
        jest: true,
       },
      files:
       [
        '**/*.test.js',
        '**/__test__/*.{j,t}s?(x)',
        '**/test/unit/**/*.spec.{j,t}s?(x)',
       ],
     },
   ],
 };
