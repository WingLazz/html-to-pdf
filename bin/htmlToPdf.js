#!/usr/bin/env node
const program = require('commander')

const htmlToPdf = require('../index')

program.option('-f --filePath <filePath>', 'local html file to transform, required when remoteUrl is empty')
  .option('-r --remoteUrl <remoteUrl>', 'remote html url to transform, required when filePath is empty')
  .option('-o --outputPath <outputPath>', 'output file path, optional, default to `${__dirname}/output.pdf`')
  .option('-p --pdfOpts <pdfOpts>', 'transform options, default to {format: "A4", printBackground: true}')

program.parse(process.argv)

htmlToPdf({
  filePath: program.filePath,
  remoteUrl: program.remoteUrl,
  outputPath: program.outputPath,
  pdfOpts: program.pdfOpts && JSON.parse(program.pdfOpts) || {}
})