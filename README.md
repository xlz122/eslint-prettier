# vite-react 配置 eslint + prettier

## 简介

typescript eslint preeiter 所用插件安装在开发环境即可。

yarn add xxx --dev

## typescript 所用插件

* typescript

## eslint + prettier 所用插件

* eslint
* @typescript-eslint/parser (缺少后报错 eslint module)
* @typescript-eslint/eslint-plugin (缺少后报错 eslint module)
* eslint-plugin-react (缺少后报错 eslint module)
* eslint-config-react-app (缺少后报错 .eslintrc.js - react-hooks)

* prettier
* eslint-plugin-prettier (缺少后报错 prettier module)

* vite 独有
* vite-plugin-eslint

## vite.config.ts(启用eslint)

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.tsx', 'src/**/*.ts']
    })
  ]
});
```
## 运行

启动项目

```
yarn install
```

```
yarn dev
```

项目打包

```
yarn build
```
