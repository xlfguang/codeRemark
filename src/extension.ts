/*
 * @Author: XLFguang 2684695148@qq.com
 * @Date: 2023-05-04 18:50:22
 * @LastEditors: XLFguang 2684695148@qq.com
 * @LastEditTime: 2023-05-08 21:48:50
 * @FilePath: \codeRemark\src\extension.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as vscode from "vscode";
import { getTreeList } from "./getTree";
import * as fs from "fs";
import * as path from "path";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const { workspaceFolders } = vscode.workspace;
  console.log(workspaceFolders);

  const addRemark = (args: any) => {
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
        getTreeList();
      });
  };


  let menusAddRemark = vscode.commands.registerCommand(
    "code-remark.menusAddRemark",
    (args) => addRemark(args)
  );
  let documentAddRemark = vscode.commands.registerCommand(
    "code-remark.documentAddRemark",
    (args) => addRemark(args)
  );
  context.subscriptions.push(documentAddRemark);
  context.subscriptions.push(menusAddRemark);

  context.subscriptions.push(
    vscode.commands.registerCommand("code-remark.ProjectTree", () => {
      getTreeList();
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
