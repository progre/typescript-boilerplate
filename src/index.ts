// prettier-ignore
// eslint-disable-next-line global-require, import/no-extraneous-dependencies
try { require('source-map-support').install(); } catch (e) { /* NOP */ }
// eslint-disable-next-line import/first
import module from './module';

async function main() {
  await module();
}

main().catch((e) => {
  console.error(e.stack || e);
});
