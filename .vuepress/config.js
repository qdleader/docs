import { defineUserConfig } from "vuepress"
import { defaultTheme } from "@vuepress/theme-default"
import { navbar } from "./navbar.js"
import { searchPlugin } from "@vuepress/plugin-search"
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { clipboardPlugin } from 'vuepress-plugin-clipboard'
// import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
	lang: "zh-CN",
	base: "/docs/",
	title: "你好， qdleader ！",
	description: "qdleader,前端面试题大全, 编程学习路线, 编程知识百科, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 求职, 面经",
	// plugins: [
	// 	autoCatalogPlugin({
	// 		// 不为 /foo/ 生成目录页
	// 		exclude: ["/foo/"],
	// 	}),
	// ],
	head: [
		// SEO
		[
			"meta",
			{
				name: "keywords",
				content: "qdleader,前端面试题大全, 编程学习路线, 编程知识百科, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 求职, 面经",
			},
		],
	],
	theme: defaultTheme({
		navbar,
		repo: "qdleader/qdleader",
		docsBranch: "master",
	}),
	resolve: {
		alias: [
			{
				// this is required for the SCSS modules
				find: /^~(.*)$/,
				replacement: "$1",
			},
		],
	},
	plugins: [
		searchPlugin({
			locales: {
				"/": {
					placeholder: "Search",
				},
				"/zh/": {
					placeholder: "搜索",
				},
			},
			hotKeys: ["s", "/", "enter"],
			// 排除首页
			isSearchable: (page) => page.path !== "/",
			// 允许搜索 Frontmatter 中的 `tags`
			getExtraFields: (page) => page.frontmatter.tags ?? [],
		}),
		backToTopPlugin(),
		nprogressPlugin(),
		clipboardPlugin({})
	],	
})
