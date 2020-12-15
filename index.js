const {app, BrowserWindow} = require('electron')

function createWindow() {
    const window = new BrowserWindow({
        width:800,
        height:700,
        webPreferences:{
            nodeIntegration: true
        }
    })
    window.loadFile('main.html');
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if (process.platform !== 'darwin') {
        app.quit()
      }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })