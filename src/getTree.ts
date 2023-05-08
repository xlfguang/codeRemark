/*
 * @Author: XLFguang 2684695148@qq.com
 * @Date: 2023-05-08 21:08:45
 * @LastEditors: XLFguang 2684695148@qq.com
 * @LastEditTime: 2023-05-08 22:22:58
 * @FilePath: \codeRemark\src\getTree.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { WorkspaceFolder, workspace, window } from "vscode";
import { resolve } from "path";
import { Stats, appendFileSync, readdirSync, statSync } from "fs";
import { verify } from "crypto";

export const getTreeList = async () => {
  let ancestor: string = "";
  let pathName: string = "";
  // workspaceFolders 为工作区列表
  const { workspaceFolders } = workspace;
  //selectFolder 为当前选中的工作区文件夹根目录
  let selectFolder!: WorkspaceFolder;
  if (!workspaceFolders) {
    window.showInformationMessage("请打开文件夹并重试");
    return;
  }

  if (workspaceFolders.length === 1) {
    selectFolder = workspaceFolders[0];
  } else {
    selectFolder = workspaceFolders[0];
  }
  let name = selectFolder.name;
  let folder = selectFolder.uri.fsPath.replace(name, "");
  console.log(name);
  console.log(folder);
  traverseFolder(folder, name);
};

export const traverseFolder = (ancestor: string, pathName: string = "",) => {
  const acPath: string = resolve(ancestor, pathName);
  const files: string[] = readdirSync(acPath);
  console.log(files);
  files.forEach((item: string) => {
  
    // 文件状态
    const fileStat: Stats = statSync(resolve(acPath, item));
    // 判断是否是目录文件
    const isDirectory: boolean = fileStat.isDirectory();
    
    
    
    
  
   
});
};
