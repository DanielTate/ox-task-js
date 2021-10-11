const esbuild = require('esbuild')

module.exports = function js(args) {

	args.options.files.forEach((opts) => {
		let callback = false

		if(opts.callback) {
			callback = opts.callback
		}

		delete opts.callback

		esbuild.build(opts).then(() => {
			if(callback) {
				callback()
			}
		})
	});
}
