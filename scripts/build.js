const pkg = require('../package.json');
const { build } = require('esbuild');
const { resolve } = require('path');

const env = process.argv[2];
const AVAILABLE_ENVS = ['dev', 'prod'];
if (!AVAILABLE_ENVS.includes(env)) {
  console.error('invalid env');
  process.exit(1);
}

const isDev = env === 'dev';

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: [isDev ? resolve(__dirname, '../src/index.ts') : resolve(__dirname, '../src/index.ts')],
  outfile: isDev ? resolve(__dirname, '../dist/bundle.dev.js') : resolve(__dirname, '../dist/bundle.prod.js'),
  minify: isDev ? false : true,
  sourcemap: isDev ? true : false,

  define: { 'process.env.NODE_ENV': `"${process.env.NODE_ENV}"` },
  target: 'es2022',
  platform: 'node',
  color: true,
  bundle: true,
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
};

build(options)
  .then(() => {
    console.log('Build completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error(JSON.stringify(error, null, 2));
    process.exit(1);
  });
