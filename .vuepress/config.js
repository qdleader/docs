import { defineUserConfig } from 'vuepress'

import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    // themeConfig: {
    //     sidebar: require('./side'),
    // },
    plugins: [
        autoCatalogPlugin({
          // 不为 /foo/ 生成目录页
          exclude: ["/foo/"],
        }),
      ],
})