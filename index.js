const {app, ipcMain, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const setup = require('./lib/setup.js');
const gso = setup.gameSetup("ivan", "koschei");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 620, height: 800})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'Client/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Send GSO to be rendered
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('GSO', gso);
  })
  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
    app.quit()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

