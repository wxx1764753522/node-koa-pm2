## 上传文件到服务器 FTP git 等
# 然后进入文件 npm i 加载依赖 #
# 尝试使用 node app.js 启动服务  通过 curl http://127.0.0.1:3000/api/ 测试服务启动情况 #

# 安装并且使用 pm2 用 pm2 启动node服务 # pm2 进程守护 资源负载平衡
pm2 start app.js -i max 
-i max 根据有效CPU数目启动最大进程数目 可以指定数量 -i 3 启动3个进程
-n server-koa 启动的服务的名称 server-koa

https://www.douban.com/note/314200231/ -> pm2 命令

https://blog.csdn.net/clearlxj/article/details/88708709 -> pm2管理eggjs

nginx  安装方式 源码安装 yum安装 yum install nginx

配置 nginx   80 443 端口可以不带端口访问域名  -> baidu.com
http://nginx.org/en/docs/ -> nginx 官网文档
cd /etc/nginx/conf.d  touch 创建需要配置的nginx文件 .conf文件

https://blog.csdn.net/qq_43432935/article/details/92013718 -> vim 修改文件操作