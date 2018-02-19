const Console = require('console').Console
const cons = new Console(process.stdout, process.stderr)
cons.log('testing')

const cons2 = new console.Console(process.stdout, process.stderr)
cons2.error('test')
