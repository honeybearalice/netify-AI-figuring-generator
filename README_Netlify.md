# AI手办生成器 - Netlify部署指南

本指南将帮助您将AI手办生成器项目从Vercel迁移并部署到Netlify平台。

## 已完成的配置

我们已经为您完成了以下Netlify部署所需的配置：

1. 创建了`netlify.toml`配置文件，包含构建命令和路由重定向设置
2. 设置了Netlify函数目录`netlify/functions/`，创建了函数包装器
3. 添加了`serverless-http`依赖，用于在Netlify函数环境中运行Express应用

## 部署步骤

### 1. 准备工作

确保您已经：
- 拥有一个Netlify账户
- 已安装Git并配置好GitHub/GitLab/Bitbucket等代码托管服务
- 已将项目代码推送到代码托管平台

### 2. 手动部署到Netlify

1. 访问 [Netlify官网](https://www.netlify.com/) 并登录您的账户
2. 点击"New site from Git"
3. 选择您的代码托管服务（GitHub/GitLab/Bitbucket）
4. 授权Netlify访问您的仓库
5. 选择您的项目仓库
6. 在部署设置页面：
   - **Branch to deploy**: 选择您想要部署的分支（通常是`main`）
   - **Build command**: 保持默认的`npm run build`
   - **Publish directory**: 保持默认的`public`
7. 点击"Deploy site"

### 3. 配置环境变量

部署成功后，您需要配置豆包API的环境变量：

1. 在Netlify项目页面，点击"Site settings"
2. 在左侧导航栏中选择"Environment variables"
3. 点击"Add a variable"添加以下环境变量：
   - `DOUBAO_API_KEY`: 您的豆包API密钥
   - `DOUBAO_API_URL`: 豆包API的URL（默认为`https://ark.cn-beijing.volces.com/api/v3/images/generations`）
   - `DOUBAO_MODEL`: 豆包模型ID（默认为`ep-20250917182847-vj4mj`）
4. 点击"Deploy site"重新部署项目以应用新的环境变量

### 4. 验证部署

部署完成后，您可以通过以下方式验证：

1. 访问Netlify提供的URL（格式为`https://[your-site-name].netlify.app/`）
2. 尝试访问`https://[your-site-name].netlify.app/api/health`检查API是否正常工作
3. 如果需要，可以将自定义域名绑定到Netlify站点

## 注意事项

- 首次部署可能需要几分钟时间，请耐心等待
- 确保环境变量配置正确，特别是API密钥
- 如果遇到部署问题，请查看Netlify的构建日志获取详细错误信息
- Netlify也有免费套餐的资源限制，但通常比Vercel的部署限制更宽松

## 常见问题排查

- **API调用失败**: 检查环境变量`DOUBAO_API_KEY`是否正确配置
- **部署超时**: 可能是依赖安装时间过长，可以尝试清理`node_modules`和`package-lock.json`后重新部署
- **函数执行错误**: 检查`netlify/functions/server.js`文件是否正确配置

## 切换部署平台的好处

- 避免单一平台的资源限制
- 利用不同平台的优势和特性
- 增加部署的灵活性和可靠性
- 可以进行A/B测试不同平台的性能