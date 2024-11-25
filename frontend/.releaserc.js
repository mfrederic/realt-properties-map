module.exports = {
  branches: ['main'],
  tagFormat: 'frontend-v${version}',
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
    }],
    '@semantic-release/release-notes-generator',
    "@semantic-release/changelog",
    ['@semantic-release/npm', {
      npmPublish: false,
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
  // Initialize version from package.json
  tagFormat: 'frontend-v${version}',
  initialVersionFromPackageJson: true
}; 