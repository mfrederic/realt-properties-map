module.exports = {
  branches: ['main'],
  tagFormat: 'frontend-v${version}',
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { type: 'feat', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'docs', release: 'patch' },
        { type: 'style', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'perf', release: 'patch' },
        { type: 'test', release: 'patch' }
      ]
    }],
    '@semantic-release/release-notes-generator',
    "@semantic-release/changelog",
    ['@semantic-release/npm', {
      npmPublish: false,
      pkgRoot: 'frontend'
    }],
    ['@semantic-release/github', {
      assets: [],
      addReleases: 'bottom'
    }],
    ['@semantic-release/git', {
      assets: ['package.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      pkgRoot: 'frontend'
    }]
  ],
  // Force initial version
  createInitialReleaseFromPackageVersion: true
}; 