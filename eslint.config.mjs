import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  stylistic.configs['recommended-flat'],
  {
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/semi': ['error', 'always']
    }
  }
];
