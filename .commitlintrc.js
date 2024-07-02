const Config = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  rules: {
    'scope-case': [2, 'always', ['kebab-case']],
    'scope-empty': [2, 'never'],
    'header-max-length': [2, 'always', 100],
  },
  defaultIgnores: true,
  parserOpts: {
    headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['BT-'],
    },
  },
};

module.exports = Config;
