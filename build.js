const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { Generator } = require('npm-dts');

new Generator({
    output: 'dist/index.d.ts',
}).generate();

const config = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: 'inline',
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