module.exports = {
  branches: ['main'],
  tagFormat: 'v${version}',
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
    '@semantic-release/changelog',
    ['@semantic-release/exec', {
      prepareCmd: 'node -e "const fs=require(\'fs\');const pkg=require(\'./frontend/package.json\');pkg.version=\'${nextRelease.version}\';fs.writeFileSync(\'./frontend/package.json\',JSON.stringify(pkg,null,2));" && node -e "const fs=require(\'fs\');const pkg=require(\'./backend/package.json\');pkg.version=\'${nextRelease.version}\';fs.writeFileSync(\'./backend/package.json\',JSON.stringify(pkg,null,2));"'
    }],
    ['@semantic-release/git', {
      assets: [
        'package.json',
        'frontend/package.json',
        'backend/package.json',
        'CHANGELOG.md',
        'frontend/CHANGELOG.md',
        'backend/CHANGELOG.md'
      ],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
    '@semantic-release/github'
  ]
} 