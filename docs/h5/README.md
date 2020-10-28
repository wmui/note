---
sidebar: auto
---

# H5

## H5端组件库

方案：Vant（有赞）、CubeUI（滴滴）、mint-ui（饿了么）

推荐：[Vant](https://youzan.github.io/vant/#/zh-CN/quickstart)

推荐理由：代码体积较小、API设计丰富、提供小程序版本（vant-weapp）、维护积极

## PC端组件库

方案：ElementUI（饿了么）、Iview（社区）、ant-design-vue（社区）

推荐：[ant-design-vue](https://www.antdv.com/docs/vue/introduce)

推荐理由：蚂蚁金服Ant Design指定的 Vue 版组件库、共享Ant Design设计体系、丰富的组件和API

## 小程序端组件库

方案：Vant-weapp（有赞）、WeUI（微信）、TaroUI（京东、多端）

推荐：[Vant-weapp](https://vant-contrib.gitee.io/vant-weapp/#/intro)

推荐理由：提供丰富的开箱即用组件、API设计同Vant一致（降低了学习成本）、维护积极

## Git 提交

[Git提交规范文档 - 阮一峰](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

```bash
feat：新功能（feature）

fix：修补bug

docs：文档（documentation）

style： 格式（不影响代码运行的变动）

refactor：重构（即不是新增功能，也不是修改bug的代码变动）

test：增加测试

chore：构建过程或辅助工具的变动
```

## .editorconfig

[EditorConfig](https://editorconfig.org/)

```bash
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
end_of_line = lf
insert_final_newline = true
```

::: tip 说明
使用两个空格、使用utf-8字符集、去除结尾的空格、文件结束加空行
:::

## 语义化版本号

[Semantic Version](https://semver.org/)


版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

- 主版本号：当你做了不兼容的 API 修改，
- 次版本号：当你做了向下兼容的功能性新增，
- 修订号：当你做了向下兼容的问题修正


## 图标管理

方案：[iconfont](https://www.iconfont.cn/)

![](/iconfont.png)

::: tip 使用方式
[点击查看使用方式](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)
:::

推荐理由：图标集中式管理、减少开发与UI的沟通成本、项目利于维护、提升开发效率。（特殊图标可通过蓝湖切图下载）

## ESLint 规范

问题：统一 JavaScript 书写规范，规避潜在的bug。

方案：airbnb、standard

推荐：[airbnb javascript](https://github.com/airbnb/javascript)

推荐理由：使用和下载量最高、社区活跃、维护积极

### 安装

```bash
# 主要用于.vue文件，检查vue语法
vue add @vue/cli-plugin-eslint

# 主要用于.js文件，检查js语法
npm install @vue/eslint-config-airbnb -s
```

::: tip
[点击查看vue对应规则](https://eslint.vuejs.org/rules/)

[点击查看eslint:recommended对应规则](https://eslint.org/docs/rules/)
:::


```js
// .eslintrc.js
module.exports = {
  "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended",
      "@vue/airbnb"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {
      "linebreak-style": 'off',
      "vue/html-closing-bracket-newline": [
        "error",
        {
          "singleline": "never",
          "multiline": "always"
        }
      ],
      "vue/order-in-components": "off",
      "vue/html-self-closing": "off",
      "vue/prop-name-casing": "off",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
      "vue/multiline-html-element-content-newline": "off",
      "no-console": "off",
      "no-debugger": "off",
      "semi": [
        "error",
        "never"
      ],
      "no-extra-semi": "off",
      "quotes": [
        "error",
        "single"
      ],
      "no-unused-vars": "off",
      "consistent-return": "off",
      "camelcase": "off",
      "import/extensions": "off",
      "no-nested-ternary": "off",
      "max-len": "off",
      "no-unused-expressions": "off",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "import/no-cycle": "off",
      "import/prefer-default-export": "off",
      "no-underscore-dangle": "off",
      "no-return-assign": "off",
      "no-new": "off",
      "func-names": "off",
      "prefer-arrow-callback": "off",
      "import/no-unresolved": "off",
      "indent": "off",
      "arrow-parens": "off",
      "global-require": "off"
    }
}
```

## CSS 规范

预处理器：scss、less、stylus

推荐：less

推荐理由：简单易上手，部分已有项目使用了less。使用less的库有vant、iview、ant-design-vue。

css命名方式：推荐 [BEM](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)，使用BEM的库有vant、weui等

```js
// vue.config.js
module.exports = {
  ...
  publicPath: process.env.VUE_APP_PATH,
  // eg: 添加全局scss
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/style/variable.scss";
          @import "~@/assets/style/reset.scss";
          @import "~@/assets/style/base.scss";
        `,
      },
    },
  },
  // eg: 设置端口
  devServer: {
    port: 9000,
    proxy: { // 访问 http://127.0.0.1:9000/v1/test 代理到 http://www.test.com/v1/test
      '/v1': {
        target: 'http://www.test.com',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // eg: 修改标题
  chainWebpack: (config) => {
    config
    .plugin('html')
    .tap((options) => {
      options[0].title = '支付'
      return options
    })
  },
  ...
}
```


## Node服务

测试环境：http://node.test.service.primecare.net.cn/

正式环境：https://node.service.primecare.net.cn/

作用：接口代理、下载pdf、BFF代理层等

## h5项目发布

1. 在cos客户端上创建对应项目的文件夹

2. 在项目根目录下添加 node 上传脚本

```js
const uploadQcloud = require('qcloud-upload')

const options = {
  Bucket: 'sbl-1257135381',
  Region: 'ap-guangzhou',
  SecretId: 'AKIDjT7RH9DE6sY3Rg7o7MUZXK9qOowylmaX',
  SecretKey: 'nU1TluwnU5d97zf3VSL7jAWhR8jz61lO',
  prefix: 'payment/dev/dist', // 上传到油漆桶的哪个文件夹
  src: './dist', // 上传哪个文件夹到油漆桶
  overWrite: 1, // 覆盖上传
}
uploadQcloud(options)
```

## 其他

错误监控、持续集成等用到再说
