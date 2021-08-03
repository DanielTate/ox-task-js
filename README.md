# ox-task-js

ox-task-js is a task that compiles scss using esbuild under the hood.

Example:
```js
ox._add(js)

ox.js({
    log: true,
    watch: 'src/app.js',
    options: {
        entryPoints: ['src/app.js'],
        bundle: true,
        minify: true,
        sourcemap: true,
        logLevel: 'debug',
        outfile: 'build/app.js',
    }
})
```