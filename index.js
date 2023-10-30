// 引入 Electron 模組的 app 和 BrowserWindow
const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
const { spawn, execFile } = require("child_process");
const path = require("path");
// const electronReload = require("electron-reload");
const url = require("url");

// 使用 electron-reload 模組來監看和自動重新載入指定的檔案
// electronReload(__dirname, {
//   electron: path.join(__dirname, "node_modules", ".bin", "electron"),
// });

// 創建視窗的函數
function createWindow() {
  // 創建一個新的瀏覽器視窗
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  // 載入並顯示 index.html 檔案
  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "index.html"), // 設定 index.html 的檔案路徑
  //     protocol: "file:", // 使用本地文件協議
  //     slashes: true, // 使用斜線
  //   })
  // );
  mainWindow.loadFile("index.html");
  ipcMain.on("execute-python", (event, data) => {
    // 调用 Python 脚本并传递输入
    let { input1, input2, input3 } = data;
    console.log("ipcMain", data);

    execFile(
      "./python/fast.exe",
      [input1, input2, input3],
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error}`);
          // 发送错误消息到渲染进程
          event.sender.send("python-error", error.message);
          return;
        }
        // Python 脚本执行成功，将输出发送回渲染进程
        // mainWindow.webContents.send("python-output", data.toString());
        console.log(`Python script output: ${stdout}`);
      }
    );
    // const pythonProcess = spawn("python", [
    //   "./python/fast.exe",
    //   input1,
    //   input2,
    //   input3,
    // ]);
    // 监听 Python 脚本的输出
    // pythonProcess.stdout.on("data", (data) => {
    //   console.log(data.toString());
    //   // 可以将 Python 输出发送回渲染进程，以供显示
    //   mainWindow.webContents.send("python-output", data.toString());
    // });
  });
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})