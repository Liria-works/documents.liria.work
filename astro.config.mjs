// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import UnoCSS from "unocss/astro";
import compressor from "astro-compressor";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	output: "static",
	integrations: [
		mdx(),
		vue(),
		UnoCSS({
			injectReset: true,
		}),
		compressor(),
	],
	markdown: {
		remarkPlugins: [remarkToc, remarkBreaks],
		gfm: true,
	},
	adapter: vercel(),
});
