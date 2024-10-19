// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import UnoCSS from "unocss/astro";
import compressor from "astro-compressor";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
	site: "https://documents.liria.work",
	output: "static",
	image: {
		domains: ["images.microcms-assets.io"],
	},
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
});
