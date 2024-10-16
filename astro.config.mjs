// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import UnoCSS from "unocss/astro";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		vue(),
		UnoCSS({
			injectReset: true,
		}),
		compressor(),
	],
	output: "static",
});
