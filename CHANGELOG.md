# 1.0.0 (2018-12-07)


### Features

* **setup:** setup project with multiple features ([5cd3809](https://github.com/kamontat/Portfolio/commit/5cd3809))


* Merge pull request #24 from dev ([74e0553](https://github.com/kamontat/Portfolio/commit/74e0553)), closes [#24](https://github.com/kamontat/Portfolio/issues/24)


### BREAKING CHANGES

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
