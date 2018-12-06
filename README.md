<!-- Title -->
<h1 align="center">
  Our Portfolio Website
</h1>

<p align="center">
  <strong>This is our Portfolio Website repository.</strong><br>
  We start this project from scratch, through hundred of libraries to found the right ones.
</p>

<h3 align="center">
  <a href="https://kamontat.github.io/Portfolio/docs">Documentation</a>
  <span> · </span>
  <a href="https://kamontat.space">Websites</a>
  <span> · </span>
  <a href="https://kamontat.github.io/Portfolio/docs/development">Developments</a>
  <span> · </span>
  <a href="https://waffle.io/kamontat/Portfolio">Waffle</a>
  <span> · </span>
  <a href="https://kcnt.slack.com">Slack</a>
</h3>

<h4 align="center">
  <a href="#planning">Planing</a>
  <span> · </span>
  <a href="#ci-status">CI Status</a>
  <span> · </span>
  <a href="#website-status">Website Status</a>
  <span> · </span>
  <a href="#project-information">Project Information</a>
</h4>

## Planning

We using [Waffle.io](Waffle.io), that allow us to integrate with Github Issues automatically.
The Task management I follow project [Agile Methodologies](https://en.wikipedia.org/wiki/Agile_software_development). We have main board that contains multiple columns. ([Get start with Waffle](https://help.waffle.io/getting-started/getting-started-guide-creating-and-using-waffle-boards))

### Index [![Inbox Waffle.io](https://img.shields.io/waffle/label/kamontat/Portfolio/status%3A%20inbox.svg?style=flat-square)](https://waffle.io/kamontat/Portfolio)

"New issues added in GitHub or Waffle are automatically added to the Inbox column.  This is a great place for new requests, ideas, and bugs." -- [Waffle's definition](https://help.waffle.io/getting-started/getting-started-guide-creating-and-using-waffle-boards)

So it mean any issue that open without specify column, with appear here.

### Backlog [![Backlog Waffle.io](https://img.shields.io/waffle/label/kamontat/Portfolio/status%3A%20backlog.svg?style=flat-square)](https://waffle.io/kamontat/Portfolio)

"A place to keep issues that are good ideas but are being saved for later." -- [Waffle's definition](https://help.waffle.io/getting-started/getting-started-guide-creating-and-using-waffle-boards)

We use this column for prioritize and plan the work to be done (Include every [Must have](https://en.wikipedia.org/wiki/MoSCoW_method) method and [Should have](https://en.wikipedia.org/wiki/MoSCoW_method) method method).

### In progress [![In progress Waffle.io](https://img.shields.io/waffle/label/kamontat/Portfolio/status%3A%20in%20progress.svg?style=flat-square)](https://waffle.io/kamontat/Portfolio)

"Issues that are, well, in progress.  Normally used for active development.  Some teams create additional columns for design, testing, etc." -- [Waffle's definition](https://help.waffle.io/getting-started/getting-started-guide-creating-and-using-waffle-boards)

This is a in progress column, which any card on the columns is on [Work In Process](https://en.wikipedia.org/wiki/Work_in_process) status

### Review [![Review Waffle.io](https://img.shields.io/waffle/label/kamontat/Portfolio/status%3A%20review.svg?style=flat-square)](https://waffle.io/kamontat/Portfolio)

"Issues that have an open Pull Request that are being reviewed by other team member(s) to get feedback." -- [Waffle's definition](https://help.waffle.io/getting-started/getting-started-guide-creating-and-using-waffle-boards)

This is only for a contributor, before the pull request will accepted I (or my team) need to review issue on this column first. 

### Done [![Done Waffle.io](https://img.shields.io/waffle/label/kamontat/Portfolio/status%3A%20done.svg?style=flat-square)](https://waffle.io/kamontat/Portfolio)

"Issues that are done and shipped.  Depending on your team, this may also include finishing documentation, marketing, etc." -- [Waffle's definition](https://help.waffle.io/getting-started/getting-started-guide-creating-and-using-waffle-boards)

This will contain all for the features that already deployed in the main website.

## CI Status

| Name | Description | Badge |
|------|-------------|-------|
| David DM | Check the version of package.json (dependencies) | [![David](https://img.shields.io/david/kamontat/Portfolio.svg?style=flat-square)](https://david-dm.org/kamontat/Portfolio) |
| David DM | Check the version of package.json (devDependencies) | [![David dev](https://img.shields.io/david/dev/kamontat/Portfolio.svg?style=flat-square)](https://david-dm.org/kamontat/Portfolio?type=dev) |
| Circle CI | Integration Test and E2E test (master branch) | [![CircleCI master branch](https://img.shields.io/circleci/project/github/kamontat/Portfolio/master.svg?style=flat-square&label=circleci)](https://circleci.com/gh/kamontat/Portfolio) |
| Circle CI | Integration Test and E2E test (dev branch) | [![CircleCI dev branch](https://img.shields.io/circleci/project/github/kamontat/Portfolio/dev.svg?style=flat-square&label=circleci%20dev)](https://circleci.com/gh/kamontat/Portfolio/tree/dev) |
| Code climent | Rate project maintainabilitiy | [![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/kamontat/Portfolio.svg?style=flat-square)](https://codeclimate.com/github/kamontat/Portfolio) |
| Code climate | Show a number of code smell that might be a issues | [![Code Climate issues](https://img.shields.io/codeclimate/issues/kamontat/Portfolio.svg?style=flat-square)](https://codeclimate.com/github/kamontat/Portfolio) |
| Snyk | Dependencies Security for package.json | [![Known Vulnerabilities](https://snyk.io/test/github/kamontat/Portfolio/badge.svg?style=flat-square)](https://snyk.io/test/github/kamontat/Portfolio) |

## Website Status

| Website                       | Status   |
|-------------------------------|----------|
| Main website                  | [![Uptime Robot main status](https://img.shields.io/uptimerobot/status/m781574236-3dc4f2438bec1f4dd3ba983a.svg?style=flat-square&label=website)](https://kamontat.space) |
| Website 30 days ratio         | [![Uptime Robot main ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m781574236-3dc4f2438bec1f4dd3ba983a.svg?style=flat-square&label=website%2030%20days)](https://kamontat.space) |
| Develop website               | [![Uptime Robot develop status](https://img.shields.io/uptimerobot/status/m781574551-a6fa71a95951a6d6e499c19d.svg?style=flat-square&label=dev.website)](https://dev.kamontat.space) |
| Develop website 30 days ratio |  [![Uptime Robot develop ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m781574551-a6fa71a95951a6d6e499c19d.svg?style=flat-square&label=dev.website%2030%20days)](https://dev.kamontat.space) |
| Document website              | [![Doc website status](https://img.shields.io/website-up-down-green-red/https/kamontat.github.io/Portfolio/docs.svg?label=docs&style=flat-square)](https://kamontat.github.io/Portfolio) |

## Project Information

|       |       |
|-------|-------|
| [![GitHub last commit](https://img.shields.io/github/last-commit/kamontat/Portfolio.svg?style=flat-square)](https://github.com/kamontat/Portfolio) | [![GitHub commit activity the past week, 4 weeks, year](https://img.shields.io/github/commit-activity/y/kamontat/Portfolio.svg?style=flat-square)](https://github.com/kamontatPortfolio) |
| [![GitHub commits (since latest release)](https://img.shields.io/github/commits-since/kamontat/Portfolio/latest.svg?style=flat-square)](https://github.com/kamontat/Portfolio) | [![GitHub repo size in bytes](https://img.shields.io/github/repo-size/kamontat/Portfolio.svg?style=flat-square)](https://github.com/kamontat/Portfolio) |
[![GitHub release](https://img.shields.io/github/release/kamontat/Portfolio.svg?style=flat-square)](https://github.com/kamontat/Portfolio/releases) | [![GitHub Release Date](https://img.shields.io/github/release-date/kamontat/Portfolio.svg?style=flat-square)](https://github.com/kamontat/Portfolio/releases) |
| [![GitHub package version](https://img.shields.io/github/package-json/v/kamontat/Portfolio.svg?style=flat-square)](https://github.com/kamontat/Portfolio) | [![GitHub tag](https://img.shields.io/github/tag/kamontat/Portfolio.svg?style=flat-square)](https://github.com/kamontat/Portfolio/tags) |

## Licenses

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamontat%2FPortfolio.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamontat%2FPortfolio?ref=badge_large)