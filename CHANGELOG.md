# Portfolio version

## [1.1.1](https://github.com/kcnt-info/website/compare/v1.1.0...v1.1.1) (2018-12-18)


### Features

* **content:** create Projects “2018-12-18-portfolio-website” [cms] ([7440963](https://github.com/kcnt-info/website/commit/7440963))

# [1.1.0](https://github.com/kcnt-info/website/compare/v1.0.4...v1.1.0) (2018-12-18)


* Merge pull request #69 from kcnt-info/dev ([d682ee2](https://github.com/kcnt-info/website/commit/d682ee2)), closes [#69](https://github.com/kcnt-info/website/issues/69) [#52](https://github.com/kcnt-info/website/issues/52) [#58](https://github.com/kcnt-info/website/issues/58) [#61](https://github.com/kcnt-info/website/issues/61) [#59](https://github.com/kcnt-info/website/issues/59) [#60](https://github.com/kcnt-info/website/issues/60) [#64](https://github.com/kcnt-info/website/issues/64) [vuejs/vuepress#1098](https://github.com/vuejs/vuepress/issues/1098) [#63](https://github.com/kcnt-info/website/issues/63) [#62](https://github.com/kcnt-info/website/issues/62) [#68](https://github.com/kcnt-info/website/issues/68)


### BREAKING CHANGES

* do not use tailwindcss and change to bulma instead

* feat(content): update language of net

* fix(css): i don't want to load bulma on every pages

* fix(404): make custom 404 with netlify website

* build(dep): remove unused libraries

* refactor(deps): move renovate configuration out as sharable config repo

* docs(readme): remove code quality badge because unsolvable issue

Code quality badge always show as fail because unknown coverage result has updated to server

* perf(helper): remove commit script, use committ instead

* build(docs): remove document website out, to kcnt-info/documents

* style(changelog): update markdown

## [1.0.4](https://github.com/kamontat/Portfolio/compare/v1.0.3...v1.0.4) (2018-12-09)

### Bug Fixes

* **deployments:** url must be https:// format error with github ([f4cb417](https://github.com/kamontat/Portfolio/commit/f4cb417))
* **redirect:** redirect file been delete due to nuxt generate command ([62952dc](https://github.com/kamontat/Portfolio/commit/62952dc))

## [1.0.3](https://github.com/kamontat/Portfolio/compare/v1.0.2...v1.0.3) (2018-12-09)

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
