const repl = require('repl');
const context = repl.start({prompt:'>🤢> ',
                           ignoreUndefined: true,
                           replMode: repl.REPL_MODE_STRICT}).context;
/* Preload Modules*/
context.request = require('request')
context.underscore = require('underscore')
context.q = require('q')
