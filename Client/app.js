const {ipcRenderer} = require('electron')
ipcRenderer.on('GSO', (event, arg) => {
  console.log(event, arg) // prints "pong"
  renderGame(arg);
})

function renderGame(gso){

}