#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const dir = path.join(process.cwd(), '.next')

try {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
    console.log('Removed .next')
  } else {
    console.log('.next not found, nothing to clean')
  }
} catch (err) {
  console.error('Failed to remove .next:', err)
  process.exitCode = 1
}