Demonstrates the problem that watchEvents are being ignored.

Repro steps:

1) npm install and run browser-sync-repro.js or use npm start.
2) Add a file (like test.js) to the js folder. Notice that browser-sync restarts. This is fine due to watchEvents having `'add'` in it.
3) Delete the same file. Notice that browser-sync reloads again even though watchEvents does **not** have `'unlink'`

These are the repro steps for https://github.com/BrowserSync/browser-sync/issues/1367
