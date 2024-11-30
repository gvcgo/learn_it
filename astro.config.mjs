import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import solidJs from "@astrojs/solid-js";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://go.learnit.us.kg",
	integrations: [
		starlight({
			title: 'learn-it',
			social: {
				github: 'https://github.com/gvcgo/learn_it',
			},
			sidebar: [
				{
					label: '基础学习',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '计算机基础', slug: 'books/books' },
						{ label: 'MySQL原理', slug: 'books/mysql' },
						{ label: 'Redis原理', slug: 'books/redis' },
						{ label: 'git学习', slug: 'books/git' },
						{ label: 'Kafka/RocketMQ原理', slug: 'books/kafka' },
						{ label: 'Elasticsearch原理', slug: 'books/elasticsearch' },
						{ label: '后端架构', slug: 'books/architecture' },
					],
				},
				{
					label: '各类工具',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '编程相关', slug: 'tools/programming' },
						{ label: 'AI工具', slug: 'tools/ai' },
						{ label: '其他工具', slug: 'tools/tools' },
					],
				},
				{
					label: '社区网站',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '程序员常去的社区和网站', slug: 'community/community' },
					],
				},
				{
					label: '编程语言',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'go相关', slug: 'languages/go' },
						{ label: 'python相关', slug: 'languages/python' },
						{ label: 'java相关', slug: 'languages/java' },
						{ label: 'typescript相关', slug: 'languages/typescript' },
						{ label: '其他', slug: 'languages/languages' },
					],
				},
				{
					label: 'DevOps',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'docker', slug: 'devops/docker' },
						{ label: 'k8s', slug: 'devops/k8s' },
					],
				},
				{
					label: 'AI学习',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '大模型学习', slug: 'ai/ai' },
					],
				},
			],
			defaultLocale: 'root',
			locales:{
				root: { label: '简体中文', lang: 'zh-CN' },
			},
			customCss: ['./src/assets/landing.css'],
		}),
		solidJs(), robotsTxt(), sitemap(),
	],
});
