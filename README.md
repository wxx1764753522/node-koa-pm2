
 echo "# node-koa-pm2" >> README.md  echo 命令写入 "XXX" 到 README.md
 git init -> 初始化一个版本仓库
 git add README.md -> 添加 README.md 到暂存区
 git commit -m "first commit" -> 提交修改 -m 注释 
 git commit -a -m "first commit" -> 跳过add文件暂存 添加注释提交
 git remote add origin https://github.com/wxx1764753522/node-koa-pm2.git  -> git 添加远程版本库origin
 git push -u origin master -> 推送当前更新到源分支
 -u用户进程的最大数量。