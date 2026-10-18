# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

推送到 `master` 分支后，由 GitHub Actions（`.github/workflows/documentation.yml`）自动构建并发布到
GitHub Pages（自定义域名 <https://notes.frankfeekr.cn>），也可以在该 workflow 的 Actions 页面手动触发。

也可以在本地手动发布（备选方式）：

Using SSH:

```
$ USE_SSH=true yarn deploy
```
·
Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.









# 文档说明

## 正则替换

```
# \[#\]\(.+\)

# 
```



