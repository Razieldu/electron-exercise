const { ipcRenderer } = require("electron");

// 其他代码...

function executePython() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  // 发送输入给 Electron 主进程
//   console.log(input1,input2,input3)
  ipcRenderer.send("execute-python", { input1, input2, input3 });
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
}
