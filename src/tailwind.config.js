/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const defaultConfig = require("tailwindcss/defaultConfig");
const tailwindUI = require("@tailwindcss/ui");

const alphaThemePlugin = () => {
	const variants = ["primary", "success", "danger", "light", "dark"];
	const props = ["bg", "text", "border"];
	const attrs = ["background-color", "color", "border-color"];

	return variants.reduce((result, variant) => {
		const value = props.reduce((acc, prop, index) => {
			const key = `.${prop}-theme-${variant}-alpha`;
			const data = {
				[`${attrs[index]}`]: `rgba(var(--theme-color-${variant}-rgb), var(--${prop}-opacity))`,
			};

			return {
				...acc,
				[key]: data,
			};
		}, {});
		return { ...result, ...value };
	}, {});
};

module.exports = {
	theme: {
		colors: {
			logo: "#c9292c",
			transparent: "transparent",

			"theme-background": "var(--theme-background-color)",
			"theme-text": "var(--theme-text-color)",

			"theme-primary": "var(--theme-color-primary)",
			"theme-primary-contrast": "var(--theme-color-primary-contrast)",
			"theme-primary-shade": "var(--theme-color-primary-shade)",
			"theme-primary-tint": "var(--theme-color-primary-tint)",

			"theme-success": "var(--theme-color-success)",
			"theme-success-contrast": "var(--theme-color-success-contrast)",
			"theme-success-shade": "var(--theme-color-success-shade)",
			"theme-success-tint": "var(--theme-color-success-tint)",

			"theme-warning": "var(--theme-color-warning)",
			"theme-warning-contrast": "var(--theme-color-warning-contrast)",
			"theme-warning-shade": "var(--theme-color-warning-shade)",
			"theme-warning-tint": "var(--theme-color-warning-tint)",

			"theme-danger": "var(--theme-color-danger)",
			"theme-danger-contrast": "var(--theme-color-danger-contrast)",
			"theme-danger-shade": "var(--theme-color-danger-shade)",
			"theme-danger-tint": "var(--theme-color-danger-tint)",

			"theme-dark": "var(--theme-color-dark)",
			"theme-dark-contrast": "var(--theme-color-dark-contrast)",
			"theme-dark-shade": "var(--theme-color-dark-shade)",
			"theme-dark-tint": "var(--theme-color-dark-tint)",

			"theme-medium": "var(--theme-color-medium)",
			"theme-medium-contrast": "var(--theme-color-medium-contrast)",
			"theme-medium-shade": "var(--theme-color-medium-shade)",
			"theme-medium-tint": "var(--theme-color-medium-tint)",

			"theme-light": "var(--theme-color-light)",
			"theme-light-contrast": "var(--theme-color-light-contrast)",
			"theme-light-shade": "var(--theme-color-light-shade)",
			"theme-light-tint": "var(--theme-color-light-tint)",
		},
		extend: {
			opacity: {
				"10": "0.1",
				"15": "0.15",
				"50": "0.50",
				"85": "0.85",
				"90": "0.9",
			},
			inset: {
				full: "100%",
				"-1": "-0.25rem",
				"-2": "-0.5rem",
				"-3": "-0.75rem",
				"-4": "-1rem",
				"-5": "-1.25rem",
				"-6": "-1.5rem",
				"-8": "-2rem",
				"-10": "-2.5rem",
				"-12": "-3rem",
				"-16": "-4rem",
				"-20": "-5rem",
				"-24": "-6rem",
				"-32": "-8rem",
				"-40": -"10rem",
				"-48": "-12rem",
				"-56": "-14rem",
				"-64": "-16rem",
			},
			minWidth: {
				"200px": "200px",
				"1": "1%",
			},
			maxWidth: {
				"1/4": "25%",
				"8xl": "85rem",
			},
			maxHeight: {
				"17e": "4.25em",
				"18e": "4.5em",
				"128": "32rem",
			},
			height: {
				"1/2": "50%",
				"1/4": "25%",
				"1/3": "33.333333%",
			},
			width: {
				"128": "32rem",
				"144": "36rem",
			},
			padding: {
				10: "2.5rem",
				15: "3.75rem",
				18: "4.5rem",
			},
			margin: {
				"-14": "-3.5rem",
			},
			fontSize: {
				"8xl": "6rem",
			},
			borderWidth: {
				1: "1px",
				2: "2px",
				3: "3px",
				10: "10px",
			},
			borderRadius: {
				xl: "1rem",
			},
			fontFamily: {
				sans: ["Inter", ...defaultConfig.theme.fontFamily.sans],
			},
		},

		customForms: (theme) => ({
			default: {
				select: {
					icon: (iconColor) => `
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 16 15">
                    		<path fill="${iconColor}" d="M3.9 5.4L.7 1.9C.4 1.6.4 1.1.7.8s.7-.3 1 0l2.8 2.9L7.2.8c.3-.3.7-.3 1 0s.3.8 0 1.1L5 5.4c-.3.3-.7.3-1.1 0h0z"/>
						</svg>
					`,

					iconColor: theme("colors.theme-medium"),

					"&:hover": {
						iconColor: theme("colors.theme-medium-tint"),
					},
				},
			},
		}),
	},
	variants: {
		borderRadius: [...defaultConfig.variants.borderRadius, "first", "last"],
		borderWidth: [...defaultConfig.variants.borderWidth, "last"],
	},
	plugins: [tailwindUI, ({ addUtilities }) => addUtilities(alphaThemePlugin())],
};
