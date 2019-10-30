// Need these files to load the index.html file
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');


let win; //global reference to the window object. if we odn't have this the window will close automatically when the javascript object is garbage collected.

// init win
function createWindow() {
    // Create browser window
    win = new BrowserWindow({width: 800, height: 600, icon:__dirname+'/img/sysinfo.png'});

    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open devtools
    win.webContents.openDevTools();

    // CLose window
    win.on('closed', () => {
        win = null;
    })
}

// Run create window function
app.on('ready', createWindow);



// Quit when all windows are closed
app.on('window-all-closed', () => {
    // If they're on a Mac
    if(process.platform !== 'darwin') {
        app.quit();
    }
})