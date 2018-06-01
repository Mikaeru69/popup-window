const { app, BrowserWindow, globalShortcut, ipcMain } = require ('electron');
let mainWindow = null;
function onAppReady ()
{
    mainWindow = new BrowserWindow
    (
        {
            width: 600,
            height: 600,
            show: false,
            frame: false
        }
    );
    mainWindow.loadURL (`file://${__dirname}/index.html`);
    mainWindow.once ('closed', () => { mainWindow = null; });
    mainWindow.on ('blur', () => { mainWindow.hide (); });
    app.once ('window-all-closed', () => { app.quit (); });
    app.on ('activate', () => { mainWindow.show (); });
    app.dock.hide ();
    globalShortcut.register ("CommandOrControl+Alt+P", () => { mainWindow.show (); });
    ipcMain.on ('dismiss', () => { app.hide (); });
}
app.once ('ready', onAppReady);
