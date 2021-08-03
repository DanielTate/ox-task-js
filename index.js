const esbuild = require('esbuild')

module.exports = function js(args) {
    const options = args.options
    esbuild.build(options)
}