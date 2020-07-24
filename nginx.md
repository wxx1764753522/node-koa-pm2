server {
    listen     3011;
    server_name  47.244.136.129;
    root html;
    index index.html index.htm;

    location /api/ {
        root /usr/share/nginx/html;
        index index.html index.htm;
        proxy_pass http://127.0.0.1:3000;
    }

    location / {
        proxy_pass http://127.0.0.1:7001;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
