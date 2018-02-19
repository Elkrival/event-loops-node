// console.log('this is informative');
// console.info('this is more information')
//
// console.error('this is an error');
// console.warn('but this is only a warning');
const fs = require('fs')
const Console = require('console').Console
const output = fs.createWriteStream('./stdout.log')
const errorOutput = fs.createWriteStream('./stderr.log')
// custom simple logger
const logger = new Console(output, errorOutput)
const count = 5
logger.log('count: %d', count);
