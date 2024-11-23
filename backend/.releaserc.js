module.exports = {
  branches: ['main'],
  tagFormat: 'backend-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    "@semantic-release/changelog",
    ['@semantic-release/github', {
      assets: []
    }]
  ]
}; 