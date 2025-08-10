# RIME · 雾凇服务器文档

这是 RIME · 雾凇 Minecraft 服务器的官方文档站点，使用 VitePress 构建。

## 📖 关于服务器

RIME · 雾凇是一个专注于科技整合包的Minecraft服务器，提供两个特色区服：

- **🚀 ATM10 区服**: 适合新手和追求多样化体验的玩家
- **⚙️ GTNH 区服**: 适合资深玩家和追求极致挑战的玩家

## 🔗 相关链接

- **服务器地址**: `mc.abreeze.icu`
- **QQ交流群**: 567367746
- **官方网站**: [rime.abreeze.icu](https://rime.abreeze.icu/)
- **文档站点**: [docs.abreeze.icu](https://docs.abreeze.icu/)

## 🛠️ 开发

### 环境要求

- Node.js 16+
- npm 或 yarn

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

### 项目结构

```
├── docs/
│   ├── .vitepress/
│   │   └── config.mts          # VitePress 配置
│   ├── index.md               # 首页
│   ├── getting-started.md     # 快速开始
│   ├── tutorial.md            # 入服教程
│   ├── faq.md                 # 常见问题
│   ├── atm10.md              # ATM10 区服介绍
│   ├── gtnh.md               # GTNH 区服介绍
│   ├── rules.md              # 服务器规则
│   └── contact.md            # 联系我们
├── package.json
└── README.md
```

## 📝 贡献

欢迎为文档站点贡献内容！请通过以下方式参与：

1. Fork 本仓库
2. 创建特性分支
3. 提交你的修改
4. 发起 Pull Request

## 📄 许可证

本项目使用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

© 2025 RIME · 雾凇. 保留所有权利。
