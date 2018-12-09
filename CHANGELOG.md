# Portfolio version

## [1.0.1](https://github.com/kamontat/Portfolio/compare/v1.0.0...v1.0.1) (2018-12-09)

# 1.0.0 (2018-12-09)


* Build new version (#36) ([0d4e21b](https://github.com/kamontat/Portfolio/commit/0d4e21b)), closes [#36](https://github.com/kamontat/Portfolio/issues/36) [#28](https://github.com/kamontat/Portfolio/issues/28) [#32](https://github.com/kamontat/Portfolio/issues/32) [#35](https://github.com/kamontat/Portfolio/issues/35) [#29](https://github.com/kamontat/Portfolio/issues/29) [#34](https://github.com/kamontat/Portfolio/issues/34) [#33](https://github.com/kamontat/Portfolio/issues/33) [#37](https://github.com/kamontat/Portfolio/issues/37) [#38](https://github.com/kamontat/Portfolio/issues/38)
* Merge pull request #24 from dev ([74e0553](https://github.com/kamontat/Portfolio/commit/74e0553)), closes [#24](https://github.com/kamontat/Portfolio/issues/24)


### Bug Fixes

* **helper:** deployment script not trigger deployments github ([b5aa32d](https://github.com/kamontat/Portfolio/commit/b5aa32d))


### Features

* **cms:** seperate cms to 2 pages ([f1646e3](https://github.com/kamontat/Portfolio/commit/f1646e3))
* **setup:** setup project with multiple features ([5cd3809](https://github.com/kamontat/Portfolio/commit/5cd3809))


### Performance Improvements

* **url:** mark admin as sub domain ([222a181](https://github.com/kamontat/Portfolio/commit/222a181))


### Reverts

* remove all released version ([93af004](https://github.com/kamontat/Portfolio/commit/93af004))
* **changelogs:** clear revert release version ([3bb4d3e](https://github.com/kamontat/Portfolio/commit/3bb4d3e))


### BREAKING CHANGES

* yarn gh-pages:dev and gh-pages:deploy is changes to docs instead.
* Remove all codeclimate and snyk, and using sonar cloud instead.

* ci(analysis): fix analysis error in circle ci

* ci(config): override default config that make code error

* ci(sonar): build project from full docker instead

This will avoid node not found and git not found error message

* ci(caches): remove sharing caches system

* ci(artifacts): do not save sonar work as artifacts

The folder is too big. there need more than 5 minutes to save it all.

* ci(analysic): start analytic by travis instead

* build: trigger travis build
