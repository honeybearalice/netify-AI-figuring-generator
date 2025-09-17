
# 🎭 AI手办生成器

> 基于豆包AI的智能手办生成平台，将您的照片转换为精美的3D手办模型

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-figurine-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 功能特性

### 🎨 多样化风格
- **⭐ 真人定制手办** - 高度还原真实照片的专业级手办
- **👤 真人风格** - 写实风格手办制作
- **🎪 卡通风格** - 可爱Q版造型设计
- **🌸 动漫风格** - 日式动漫角色风格
- **🏛️ 古风风格** - 传统东方美学设计
- **🏙️ 现代风格** - 都市时尚造型
- **🤖 赛博朋克** - 未来科技感设计

### 🎯 智能定制选项
- 📸 **智能照片识别** - 自动识别人物特征
- 🐕 **宠物还原** - 完美还原照片中的宠物
- 🎒 **配饰保留** - 精确还原背包、帽子、眼镜等配饰
- 👗 **服装更换** - 8种服装风格可选
- ⭕ **底座设计** - 6种精美底座样式
- 🖥️ **场景布置** - 专业手办展示场景

### 🤖 AI技术
- 🧠 **豆包AI驱动** - 国产领先AI图像生成技术
- 📝 **智能提示词** - 专业手办制作提示词模板
- 🎨 **高质量渲染** - 专业级3D渲染效果
- ⚡ **快速生成** - 平均30秒完成生成

## 🚀 快速开始

### 📋 环境要求
- Node.js >= 14.0.0
- npm >= 6.0.0
- 豆包AI API密钥

### 🔧 本地开发

1. **克隆项目**
```bash
git clone https://github.com/yourusername/ai-figurine-generator.git
cd ai-figurine-generator
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**
```bash
# 复制环境变量模板
cp .env.example .env

# 编辑 .env 文件，填入你的豆包API密钥
DOUBAO_API_KEY=your_doubao_api_key_here
DOUBAO_MODEL=your_model_id_here
```

4. **启动开发服务器**
```bash
npm run dev
```

5. **访问应用**
打开浏览器访问 `http://localhost:3000`

## 🌐 部署指南

### Vercel 部署（推荐）

1. **推送到GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **配置Vercel**
- 访问 [vercel.com](https://vercel.com)
- 点击 "New Project" 导入GitHub仓库
- 在环境变量中配置：
  - `DOUBAO_API_KEY`: 你的豆包API密钥
  - `DOUBAO_MODEL`: 你的模型ID

3. **一键部署**
点击部署按钮，几分钟内完成上线！

### 其他部署平台

<details>
<summary><strong>Netlify 部署</strong></summary>

```bash
# 安装Netlify CLI
npm install -g netlify-cli

# 构建项目
npm run build

# 部署到Netlify
netlify deploy --prod --dir=public
```
</details>

<details>
<summary><strong>Railway 部署</strong></summary>

1. 连接GitHub仓库到Railway
2. 配置环境变量
3. 自动部署完成
</details>

<details>
<summary><strong>Docker 部署</strong></summary>

```bash
# 构建Docker镜像
docker build -t ai-figurine-generator .

# 运行容器
docker run -p 3000:3000 -e DOUBAO_API_KEY=your_key ai-figurine-generator
```
</details>

## 📖 使用说明

### 🎯 基础使用流程

1. **📸 上传照片**
   - 支持JPG、PNG、GIF格式
   - 最大文件大小：10MB
   - 建议分辨率：1024x1024以上

2. **🎭 选择风格**
   - 推荐使用"真人定制手办"获得最佳效果
   - 每种风格都有专门优化的AI提示词

3. **🎨 自定义选项**
   - 选择是否保留宠物和配饰
   - 调整人物比例（Q版/写实/萌版）
   - 更换服装风格
   - 选择底座样式

4. **🖥️ 场景设置**
   - 选择是否显示建模过程
   - 添加包装盒展示
   - 配置桌面场景

5. **🎨 生成手办**
   - 点击生成按钮
   - 等待AI处理（约30秒）
   - 下载或分享结果

### 💡 最佳实践

#### 📸 照片要求
- ✅ **清晰度高** - 确保人物面部清晰
- ✅ **光线充足** - 避免过暗或过亮
- ✅ **构图完整** - 包含完整的人物形象
- ✅ **背景简洁** - 减少复杂背景干扰
- ❌ 避免模糊、暗光、遮挡严重的照片

#### 🎭 风格选择
- **真人定制** - 适合纪念品、个人收藏
- **卡通风格** - 适合儿童、可爱主题
- **动漫风格** - 适合二次元爱好者
- **古风风格** - 适合传统文化主题

#### 🎨 自定义建议
- **保留配饰** - 让手办更有个性
- **情景底座** - 增加故事性和展示效果
- **Q版比例** - 平衡写实度和可爱度

## 🛠️ API 文档

### 生成手办 API

**接口地址:** `POST /api/generate`

**请求参数:**
```json
{
  "prompt": "详细的提示词描述",
  "image": "base64编码的图片数据",
  "style": "风格类型 (custom/realistic/cartoon/anime/ancient/modern/cyberpunk)",
  "options": {
    "keepPets": true,
    "keepAccessories": true,
    "sceneBase": true,
    "proportion": "q-realistic",
    "clothing": "casual",
    "base": "transparent",
    "showScreen": true,
    "showBox": true,
    "showDesk": true
  }
}
```

**响应格式:**
```json
{
  "success": true,
  "imageUrl": "生成的图片URL",
  "prompt": "实际使用的提示词"
}
```

**错误响应:**
```json
{
  "error": "错误描述信息"
}
```

### 健康检查 API

**接口地址:** `GET /api/health`

**响应格式:**
```json
{
  "status": "ok",
  "message": "服务运行正常",
  "hasApiKey": true
}
```

## 🗂️ 项目结构

```
ai-figurine-generator/
├── 📁 public/                 # 前端静态文件
│   └── 📄 index.html         # 主页面
├── 📄 server.js              # 后端服务器
├── 📄 package.json           # 项目依赖
├── 📄 .env                   # 环境变量 (需要创建)
├── 📄 .env.example           # 环境变量模板
├── 📄 vercel.json            # Vercel部署配置
├── 📄 netlify.toml           # Netlify部署配置
├── 📄 Dockerfile             # Docker配置
├── 📄 .gitignore             # Git忽略文件
└── 📄 README.md              # 项目文档
```

## 🔧 技术栈

### 前端技术
- **HTML5** - 语义化标记
- **Tailwind CSS** - 现代CSS框架
- **Vanilla JavaScript** - 原生JS实现
- **响应式设计** - 支持各种设备

### 后端技术
- **Node.js** - JavaScript运行时
- **Express.js** - Web应用框架
- **Multer** - 文件上传处理
- **豆包AI API** - 图像生成服务

### 部署平台
- **Vercel** - 全栈应用部署
- **Netlify** - 静态网站部署
- **Railway** - 容器化部署
- **Docker** - 容器化支持

## 🎯 路线图

### 🚀 Version 1.0 (当前版本)
- [x] 基础手办生成功能
- [x] 6种风格模板
- [x] 自定义选项配置
- [x] 豆包AI集成
- [x] 响应式设计

### 📋 Version 1.1 (计划中)
- [ ] 用户账户系统
- [ ] 生成历史记录
- [ ] 批量生成功能
- [ ] 更多风格模板
- [ ] 图片编辑功能

### 🔮 Version 2.0 (未来版本)
- [ ] 3D预览功能
- [ ] 手办定制商城
- [ ] 社区分享功能
- [ ] 多语言支持
- [ ] 移动App版本

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 🐛 报告问题
在 [Issues](https://github.com/yourusername/ai-figurine-generator/issues) 页面报告bug或提出功能建议。

### 💡 提交改进
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 📝 改进文档
- 修复错别字
- 添加使用示例
- 翻译文档
- 改进API文档

## ❓ 常见问题

<details>
<summary><strong>Q: 为什么生成失败？</strong></summary>

可能的原因：
1. 豆包API密钥未正确配置
2. 上传的图片格式不支持
3. 网络连接问题
4. API配额用完

解决方案：
1. 检查 `.env` 文件中的API密钥
2. 确保图片为JPG/PNG格式
3. 检查网络连接
4. 检查豆包API使用量
</details>

<details>
<summary><strong>Q: 如何获得更好的生成效果？</strong></summary>

建议：
1. 使用清晰、光线充足的照片
2. 选择合适的风格模板
3. 保持背景简洁
4. 尝试不同的自定义选项
5. 使用"真人定制手办"风格
</details>

<details>
<summary><strong>Q: 支持批量生成吗？</strong></summary>

当前版本暂不支持批量生成，该功能在Version 1.1中计划实现。
</details>

<details>
<summary><strong>Q: 生成的图片版权归谁？</strong></summary>

根据豆包AI的使用条款，用户对自己生成的内容拥有版权。但请注意不要使用他人的照片进行商业用途。
</details>

## 📄 许可证

本项目采用 MIT 许可证。查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [豆包AI](https://doubao.com) - 提供强大的AI图像生成能力
- [Tailwind CSS](https://tailwindcss.com) - 优秀的CSS框架
- [Vercel](https://vercel.com) - 优秀的部署平台
- 所有贡献者和用户的支持

## 📞 联系我们

- **项目主页:** [GitHub](https://github.com/yourusername/ai-figurine-generator)
- **问题反馈:** [Issues](https://github.com/yourusername/ai-figurine-generator/issues)
- **邮箱:** your.email@example.com
- **社交媒体:** [@yourusername](https://twitter.com/yourusername)

---

<div align="center">

**🎭 让AI为您创造独一无二的手办作品！**

[开始使用](https://your-deployed-url.vercel.app) • [查看文档](#) • [报告问题](https://github.com/yourusername/ai-figurine-generator/issues)

Made with ❤️ by [Your Name]

</div>
