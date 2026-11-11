# 小样儿网站 Linux 部署说明

## 运行要求

- Linux x86_64 / arm64
- Node.js 20 或更高版本（推荐 Node.js 22 LTS）
- pnpm 11
- 建议使用 Nginx 反向代理并配置 HTTPS

本项目当前不依赖数据库，也不需要 `.env` 环境变量。

## 1. 解压并安装

```bash
tar -xzf youngsheep-site-linux-2026-11-03.tar.gz
cd youngsheep-site
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
```

## 2. 构建与启动

```bash
pnpm build
PORT=3000 HOSTNAME=127.0.0.1 pnpm start
```

生产环境建议交给 systemd 或 PM2 守护，不要长期在 SSH 会话里直接运行。

### PM2 示例

```bash
pnpm add -g pm2
PORT=3000 HOSTNAME=127.0.0.1 pm2 start pnpm --name youngsheep-site -- start
pm2 save
pm2 startup
```

## 3. Nginx 反向代理示例

```nginx
server {
    listen 80;
    server_name www.youngsheep.com.cn youngsheep.com.cn;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

配置完成后执行：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

随后使用 Certbot 或服务器现有证书方案为域名启用 HTTPS。

## 更新网站

上传并解压新版本后：

```bash
pnpm install --frozen-lockfile
pnpm build
pm2 restart youngsheep-site
```

## 验收地址

- 首页：`https://www.youngsheep.com.cn/`
- 金融项目：`https://www.youngsheep.com.cn/projects/financial-ai-service`
- 真实好花：`https://www.youngsheep.com.cn/projects/flower-curation`
- AI 文化导游：`https://www.youngsheep.com.cn/projects/ai-cultural-guide`

