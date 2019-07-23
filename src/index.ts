/* eslint-disable global-require, import/first, import/no-extraneous-dependencies */
// eslint-disable-next-line prettier/prettier
try { require('source-map-support').install(); } catch (e) { /* NOP */ }
import { app, BrowserWindow } from 'electron';
import module from './module';
/* eslint-enable global-require, import/first, import/no-extraneous-dependencies */

async function main() {
  await new Promise((resolve, reject) => app.once('ready', resolve));
  app.on('window-all-closed', app.quit.bind(app));
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    show: false,
    webPreferences: {
      nodeIntegration: true, // TODO: 不要なら消して無効にする
    },
  });
  win.on('ready-to-show', () => {
    win.show();
  });
  win.loadURL(`file://${__dirname}/public/index.html`);
  await module();
}

main().catch((e) => {
  console.error(e.stack || e);
});
