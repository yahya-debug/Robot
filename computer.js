const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
require('./server.js');

let main;
function name() {
  main = new BrowserWindow({ width: 800, height: 600, icon: path.join(__dirname, '/public/logo.png'), webPreferences: { nativeWindowOpen: true } });
  main.loadURL('http://localhost:2000/');
  main.setMenuBarVisibility(false);
  main.setIcon(path.join(__dirname, 'public/logo.png'));
  main.on('closed', () => {
    main = null
  });
}

app.on('ready', name);
