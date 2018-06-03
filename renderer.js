const { ipcRenderer } = require ('electron');
document.addEventListener
(
    'keydown',
    (event) =>
    {
        if (event.key === 'Enter')
        {
            event.preventDefault ();
            ipcRenderer.send ('dismiss');
        }
    }
);
