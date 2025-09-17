# Netlify详细部署步骤指南

本指南将详细解答您的问题，并提供从Netlify界面开始的完整部署步骤。

## 问题解答

### 1. 在Netlify界面上应该点击哪个选项？

根据您提供的Netlify界面截图，您需要点击右上角的"Add new project"按钮，然后从下拉菜单中选择"Import an existing project"选项，开始部署流程。

### 2. 什么是"配置好GitHub/GitLab/Bitbucket等代码托管服务"？

代码托管服务是用来存储、管理和版本控制您的项目代码的平台。常见的包括：
- **GitHub**：最流行的代码托管平台
- **GitLab**：提供更多企业级功能的平台
- **Bitbucket**：由Atlassian开发，特别适合与Jira等工具集成

"配置好"意味着您需要：
1. 在这些平台之一注册账户
2. 创建一个代码仓库
3. 将本地项目代码推送到这个远程仓库

## 详细部署步骤

### 第一步：准备您的代码

确保您的项目代码已经推送到GitHub/GitLab/Bitbucket等代码托管平台。如果您还没有这样做，请按照以下步骤操作：

```bash
# 在本地项目目录中初始化Git（如果尚未初始化）
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "准备部署到Netlify"

# 关联到远程仓库（示例使用GitHub）
git remote add origin https://github.com/您的用户名/您的仓库名.git

# 推送到远程仓库
git push -u origin main
```

### 第二步：在Netlify上导入项目

1. 登录Netlify账户，进入项目页面
2. 点击右上角的"Add new project"按钮
3. 从下拉菜单中选择"Import an existing project"
4. 在"Connect to Git provider"页面，选择您的代码托管服务（GitHub/GitLab/Bitbucket）
5. 授权Netlify访问您的代码仓库

### 第三步：选择仓库并配置部署设置

1. 在"Pick a repository"页面，浏览并选择您刚才创建的项目仓库
2. 点击"Configure your site"按钮
3. 在配置页面，确认以下设置：
   - **Branch to deploy**：选择`main`分支
   - **Build command**：保持为`npm run build`
   - **Publish directory**：保持为`public`
4. 点击页面底部的"Deploy site"按钮

### 第四步：配置环境变量

部署开始后，您需要配置豆包API所需的环境变量：

1. 等待部署过程开始（可能需要几秒钟）
2. 点击页面顶部的"Site settings"链接
3. 在左侧导航栏中，找到并点击"Environment variables"
4. 点击"Add a variable"按钮，添加以下环境变量：
   - **变量名**：`DOUBAO_API_KEY`
   - **值**：输入您的豆包API密钥
   - 点击"Save"
5. 重复第4步，添加另外两个环境变量：
   - `DOUBAO_API_URL`：值为`https://ark.cn-beijing.volces.com/api/v3/images/generations`
   - `DOUBAO_MODEL`：值为`ep-20250917182847-vj4mj`

### 第五步：重新部署以应用环境变量

1. 返回项目概览页面
2. 点击"Trigger deploy"按钮
3. 选择"Deploy site"选项
4. 观察部署过程，等待部署完成

### 第六步：验证部署是否成功

1. 部署完成后，点击项目页面顶部显示的URL（格式为`https://[随机字符串].netlify.app/`）
2. 测试API是否正常工作：在URL后添加`/api/health`，例如`https://[随机字符串].netlify.app/api/health`
3. 如果返回类似以下的JSON响应，表示部署成功：
   ```json
   {
     "status": "ok",
     "message": "豆包API集成服务运行正常",
     "hasApiKey": true
   }
   ```

## 常见问题排查

1. **部署失败并显示依赖安装错误**
   - 解决方案：确保您的`package-lock.json`文件已包含`serverless-http`依赖

2. **API调用返回500错误**
   - 解决方案：检查环境变量`DOUBAO_API_KEY`是否正确配置

3. **页面显示404错误**
   - 解决方案：确认`netlify.toml`文件中的重定向规则是否正确

4. **部署成功但功能不正常**
   - 解决方案：查看Netlify的日志，了解具体错误信息

## 部署成功后

部署成功后，您可以：
- 自定义域名（在"Domain settings"中配置）
- 设置持续部署（每次推送到代码仓库时自动重新部署）
- 查看部署历史和日志
- 配置更多高级选项

如果您在部署过程中遇到任何问题，请随时参考Netlify的[官方文档](https://docs.netlify.com/)或查看部署日志获取更多信息。