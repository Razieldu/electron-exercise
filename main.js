// 引入 Electron 模組的 app 和 BrowserWindow
const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
const { spawn } = require("child_process");
const path = require("path");
const electronReload = require("electron-reload");
const url = require("url");

// 使用 electron-reload 模組來監看和自動重新載入指定的檔案
electronReload(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

let mainWindow;

// 創建視窗的函數
function createWindow() {
  // 創建一個新的瀏覽器視窗
  mainWindow = new BrowserWindow({
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
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"), // 設定 index.html 的檔案路徑
      protocol: "file:", // 使用本地文件協議
      slashes: true, // 使用斜線
    })
  );
  ipcMain.on("execute-python", (event, data) => {
    // 调用 Python 脚本并传递输入
    let { input1, input2, input3 } = data;
    console.log("ipcMain",data)
    const pythonProcess = spawn("python", [
      "./python/fast.py",
      input1,
      input2,
      input3,
    ]);

    // 监听 Python 脚本的输出
    pythonProcess.stdout.on("data", (data) => {
      console.log(data.toString());
      // 可以将 Python 输出发送回渲染进程，以供显示
      mainWindow.webContents.send("python-output", data.toString());
    });
  });
  // mainWindow.webContents.openDevTools();
}
// 當應用程式就緒時，創建視窗
app.on("ready", createWindow);

// 在所有視窗關閉時退出應用程式（除非在 macOS 上）
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit(); // 退出應用程式
  }
});

// 當應用程式被啟動時，如果沒有視窗存在則創建一個新視窗（通常在 macOS 上）
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow(); // 創建新視窗
  }
});
