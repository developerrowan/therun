const { build } = require("esbuild");
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { Generator } = require('npm-dts');

new Generator({
    entry: 'src/index.ts',
    output: 'dist/index.d.ts',
}).generate();

const config = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    plugins: [nodeExternalsPlugin()],
};

build({
    ...config,
    platform: 'node',
    outfile: 'dist/index.js',
});

build({
    ...config,
    platform: 'neutral',
    format: 'esm',
    outfile: 'dist/index.esm.js'
});