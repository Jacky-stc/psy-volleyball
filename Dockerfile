FROM node:18-alpine as base

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY package.json package-lock.json /app/
RUN npm install

# 复制整个项目到工作目录
COPY . /app/

# 构建 Next.js 项目
RUN npm run build

# 暴露端口，用于 Nginx 反向代理
EXPOSE 3000

# 启动 Next.js 应用
CMD ["npm", "start"]