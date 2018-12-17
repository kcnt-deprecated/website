# Portfolio version

## [1.0.3](https://github.com/kcnt-info/website/compare/v1.0.2...v1.0.3) (2018-12-09)

### Bug Fixes

- **admin:** redirect file should in published folder ([af1c0a0](https://github.com/kcnt-info/website/commit/af1c0a0))
- **changlog:** change type of content update ([54fa973](https://github.com/kcnt-info/website/commit/54fa973))
- **cms:** cannot set proficiency in languages ([dad2367](https://github.com/kcnt-info/website/commit/dad2367))
- **cms:** file name error ([67616ba](https://github.com/kcnt-info/website/commit/67616ba))

## [1.0.2](https://github.com/kcnt-info/website/compare/v1.0.1...v1.0.2) (2018-12-09)

## [1.0.1](https://github.com/kcnt-info/website/compare/v1.0.0...v1.0.1) (2018-12-09)

# 1.0.0 (2018-12-09)

- Build new version (#36) ([0d4e21b](https://github.com/kcnt-info/website/commit/0d4e21b)), closes [#36](https://github.com/kcnt-info/website/issues/36) [#28](https://github.com/kcnt-info/website/issues/28) [#32](https://github.com/kcnt-info/website/issues/32) [#35](https://github.com/kcnt-info/website/issues/35) [#29](https://github.com/kcnt-info/website/issues/29) [#34](https://github.com/kcnt-info/website/issues/34) [#33](https://github.com/kcnt-info/website/issues/33) [#37](https://github.com/kcnt-info/website/issues/37) [#38](https://github.com/kcnt-info/website/issues/38)
- Merge pull request #24 from dev ([74e0553](https://github.com/kcnt-info/website/commit/74e0553)), closes [#24](https://github.com/kcnt-info/website/issues/24)

### Bug Fixes

- **helper:** deployment script not trigger deployments github ([b5aa32d](https://github.com/kcnt-info/website/commit/b5aa32d))

### Features

- **cms:** seperate cms to 2 pages ([f1646e3](https://github.com/kcnt-info/website/commit/f1646e3))
- **setup:** setup project with multiple features ([5cd3809](https://github.com/kcnt-info/website/commit/5cd3809))

### Performance Improvements

- **url:** mark admin as sub domain ([222a181](https://github.com/kcnt-info/website/commit/222a181))

### Reverts

- remove all released version ([93af004](https://github.com/kcnt-info/website/commit/93af004))
- **changelogs:** clear revert release version ([3bb4d3e](https://github.com/kcnt-info/website/commit/3bb4d3e))

### BREAKING CHANGES

- yarn gh-pages:dev and gh-pages:deploy is changes to docs instead.
- Remove all codeclimate and snyk, and using sonar cloud instead.

- ci(analysis): fix analysis error in circle ci

- ci(config): override default config that make code error

- ci(sonar): build project from full docker instead

This will avoid node not found and git not found error message

- ci(caches): remove sharing caches system

- ci(artifacts): do not save sonar work as artifacts

The folder is too big. there need more than 5 minutes to save it all.

- ci(analysic): start analytic by travis instead

- build: trigger travis build
