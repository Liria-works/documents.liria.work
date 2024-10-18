import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			collections: {
				custom: {
					liria:
						'<svg role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(0.576894,0,0,0.576894,-39.3695,-27.0018)"><path d="M716.083,529.14L518.595,331.652L392.053,458.194L590.612,656.754L321.329,926.037L573.748,926.703L843.697,656.754L843.308,656.365L955.756,543.917L828.531,416.692L716.083,529.14ZM321.329,457.237L435.92,342.646L309.378,216.104L68.244,457.237L389.999,778.992L516.541,652.45L321.329,457.237ZM597.679,181.645L470.454,54.42L343.268,181.606L470.493,308.831L597.679,181.645Z"/></g></svg>',
					booth:
						'<svg role="img" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(0.1,0,0,0.1,-19.2,-19.2)"><path d="M773.828,389.068L773.828,438.341L832,489.487L832,611.427L773.828,611.427L773.828,832L717.139,832L717.139,790.983C717.139,690.28 629.722,608.612 521.875,608.536L521.707,608.536C521.445,608.536 521.198,608.563 520.963,608.563C455.026,608.963 401.695,658.964 401.695,720.644L401.683,831.946L324.033,832L324.033,586.141L286.004,586.141C266.227,586.141 250.172,570.098 250.172,550.306L250.172,327.26L192,327.26L192,250.007L250.172,250.007L250.172,227.833L326.272,227.833L326.272,478.653L438.138,214.382L475.077,214.446L541.093,353.238L608.227,192L650.744,192L773.828,389.068Z"></path></g></svg>',
				},
			},
		}),
		presetTypography({
			cssExtend: {
				":not(pre) > code::before,:not(pre) > code::after": {
					content: "''",
					"background-color": "#6B7280",
				},
			},
		}),
		presetWebFonts({
			fonts: {
				// ...
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
