import js from '@eslint/js';
import globals from 'globals';
export default [
js.configs.recommended,
{
files: ['src/**/*.js', 'test/**/*.js'],
languageOptions: {
ecmaVersion: 'latest',
sourceType: 'commonjs',
globals: { ...globals.node, ...globals.jest },
},
rules: {
'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
},
},
{
ignores: ['node_modules/', 'coverage/'],
},
];
