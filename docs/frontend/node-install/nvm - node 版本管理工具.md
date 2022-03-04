> 官方 Github：[nvm-sh/nvm: Node Version Manager](https://github.com/nvm-sh/nvm)

- Install & Update Script

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

- 下载完成后加入系统环境

```shell
source ~/.bashrc
```

- 查看 nvm 版本 list

```shell
nvm list-romote
```

- 安装需要的node版本

```shell
nvm install 16
```

- 查看当前机器已安装版本号

```shell
nvm list
```

- 切换node版本

```shell
nvm use 16
```

- 设置默认的node版本

```shell
nvm alias default v16.14.0
```

