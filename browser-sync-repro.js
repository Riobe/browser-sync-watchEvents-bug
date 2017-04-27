'use strict';

const browserSync = require('browser-sync');

let config = {
  server: true,
  files: [
    './index.html',
    'js/**/*.js'
  ],
  watchEvents: ['add', 'change']
};

let instance = browserSync.create();
instance.init(config);
