# vite-vue 配置 eslint + prettier

## 简介

typescript eslint preeiter 所用插件安装在开发环境即可。

yarn add xxx --dev

## typescript 所用插件

* typescript

## eslint + prettier 所用插件

* eslint
* @vue/eslint-config-typescript (缺少后报错 .eslintrc.js - @vue/typescript/recommended)
* eslint-plugin-vue (缺少后报错 eslint module)

* prettier
* eslint-config-prettier (缺少后报错 prettier module)
* eslint-plugin-prettier (缺少后报错 prettier module)

* vite 独有
* vite-plugin-eslint

## 启用eslint(vite.config.ts)

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.ts']
    })
  ]
});

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
