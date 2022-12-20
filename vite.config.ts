/// <reference types="vitest" />
import { resolve } from 'path';
import { configDefaults, defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'therun',
			fileName: 'index',
		},
		minify: 'esbuild',
		sourcemap: 'inline',
	},
	test: {
		exclude: [...configDefaults.exclude],
		coverage: {
			provider: 'c8',
		},
	},
	plugins: [
		dts({
			rollupTypes: true,
		}),
	],
});
