// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {



  context.subscriptions.push(
    vscode.commands.registerCommand("code-remark.askQuestion", async () => {
      let answer = await vscode.window.showInformationMessage(
        "How was your day ?",
        "good",
        "bad"
      );
      if (answer === "bad") {
        vscode.window.showInformationMessage("sorry to hear it");
      } else {
        console.log({ answer });
      }
    })
  );


  

  let disposable2 = vscode.commands.registerCommand(
    "code-remark.addTest",
    (args) => {
      vscode.window
        .showInputBox({
          // 这个对象中所有参数都是可选参数
          password: false, // 输入内容是否是密码
          ignoreFocusOut: true, // 默认false，设置为true时鼠标点击别的地方输入框不会消失
          placeHolder: "输入文件备注", // 在输入框内的提示信息
          prompt: "输入后自动在跟目录处创建MD文件并且备注好文件的信息", // 在输入框下方的提示信息
         
        })
        .then(function (msg) {
          console.log("用户输入：" + msg);
		  const path = vscode.workspace.workspaceFolders
		  if(path){
			console.log(path);
			
			let prjectName = path[0].name
			console.log(prjectName);
			
			console.log(args);
			console.log(args.path);
		  }
		  
		  
        })
    }
  );
  context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
