#!/usr/bin/env node

// 1 - node
// 2 - file name
const raw = process.argv[2]
const key = process.argv[3]

const json = JSON.parse(raw)
console.log(json[key])
