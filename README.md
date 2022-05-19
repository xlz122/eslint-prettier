# vue-cli 配置 eslint + prettier

## 简介

typescript eslint preeiter 所用插件安装在开发环境即可。

yarn add xxx --dev

## typescript 所用插件

* typescript
* @vue/cli-plugin-typescript

## eslint + prettier 所用插件

* eslint
* @typescript-eslint/eslint-plugin (缺少后报错 eslint module)
* @typescript-eslint/parser (缺少后报错 eslint module)
* @vue/cli-plugin-eslint (缺少后不报错 eslint无效)
* @vue/eslint-config-typescript (缺少后报错 .eslintrc.js - @vue/typescript/recommended)
* eslint-plugin-vue (缺少后报错 eslint module)

* prettier
* eslint-config-prettier (缺少后报错 prettier module)
* eslint-plugin-prettier (缺少后报错 prettier module)

## 运行

启动项目

```
yarn install
```

```
yarn serve
```

项目打包

```
yarn build
```
