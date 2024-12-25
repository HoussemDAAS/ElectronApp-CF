const { contextBridge, ipcRenderer } = require('electron')
const os=require('os');
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
contextBridge.exposeInMainWorld('electron', {
  homedir: () => os.homedir(),
  osVersion: () => os.version(),
  architecture: () => os.arch(),
});