/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const defaultConfig = require("tailwindcss/defaultConfig");
const tailwindUI = require("@tailwindcss/ui");

const alphaThemePlugin = () => {
	const variants = ["primary", "success", "danger", "warning", "neutral"];
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
			"theme-primary-dark": "var(--theme-color-primary-contrast)",
			"theme-primary-light": "var(--theme-color-primary-contrast)",
			"theme-primary-100": "var(--theme-color-primary-100)",
			"theme-primary-200": "var(--theme-color-primary-200)",
			"theme-primary-300": "var(--theme-color-primary-300)",
			"theme-primary-400": "var(--theme-color-primary-400)",
			"theme-primary-500": "var(--theme-color-primary-500)",
			"theme-primary-600": "var(--theme-color-primary-600)",
			"theme-primary-700": "var(--theme-color-primary-700)",
			"theme-primary-800": "var(--theme-color-primary-800)",
			"theme-primary-900": "var(--theme-color-primary-900)",

			"theme-success": "var(--theme-color-success)",
			"theme-success-contrast": "var(--theme-color-success-contrast)",
			"theme-success-dark": "var(--theme-color-success-dark)",
			"theme-success-light": "var(--theme-color-success-light)",
			"theme-success-100": "var(--theme-color-success-100)",
			"theme-success-200": "var(--theme-color-success-200)",
			"theme-success-300": "var(--theme-color-success-300)",
			"theme-success-400": "var(--theme-color-success-400)",
			"theme-success-500": "var(--theme-color-success-500)",
			"theme-success-600": "var(--theme-color-success-600)",
			"theme-success-700": "var(--theme-color-success-700)",
			"theme-success-800": "var(--theme-color-success-800)",
			"theme-success-900": "var(--theme-color-success-900)",

			"theme-warning": "var(--theme-color-warning)",
			"theme-warning-contrast": "var(--theme-color-warning-contrast)",
			"theme-warning-dark": "var(--theme-color-warning-dark)",
			"theme-warning-light": "var(--theme-color-warning-light)",
			"theme-warning-100": "var(--theme-color-warning-100)",
			"theme-warning-200": "var(--theme-color-warning-200)",
			"theme-warning-300": "var(--theme-color-warning-300)",
			"theme-warning-400": "var(--theme-color-warning-400)",
			"theme-warning-500": "var(--theme-color-warning-500)",
			"theme-warning-600": "var(--theme-color-warning-600)",
			"theme-warning-700": "var(--theme-color-warning-700)",
			"theme-warning-800": "var(--theme-color-warning-800)",
			"theme-warning-900": "var(--theme-color-warning-900)",

			"theme-danger": "var(--theme-color-danger)",
			"theme-danger-contrast": "var(--theme-color-danger-contrast)",
			"theme-danger-dark": "var(--theme-color-danger-dark)",
			"theme-danger-light": "var(--theme-color-danger-light)",
			"theme-danger-100": "var(--theme-color-danger-100)",
			"theme-danger-200": "var(--theme-color-danger-200)",
			"theme-danger-300": "var(--theme-color-danger-300)",
			"theme-danger-400": "var(--theme-color-danger-400)",
			"theme-danger-500": "var(--theme-color-danger-500)",
			"theme-danger-600": "var(--theme-color-danger-600)",
			"theme-danger-700": "var(--theme-color-danger-700)",
			"theme-danger-800": "var(--theme-color-danger-800)",
			"theme-danger-900": "var(--theme-color-danger-900)",
			
			"theme-neutral": "var(--theme-color-neutral)",
			"theme-neutral-contrast": "var(--theme-color-neutral-contrast)",
			"theme-neutral-dark": "var(--theme-color-neutral-dark)",
			"theme-neutral-light": "var(--theme-color-neutral-light)",
			"theme-neutral-100": "var(--theme-color-neutral-100)",
			"theme-neutral-200": "var(--theme-color-neutral-200)",
			"theme-neutral-300": "var(--theme-color-neutral-300)",
			"theme-neutral-400": "var(--theme-color-neutral-400)",
			"theme-neutral-500": "var(--theme-color-neutral-500)",
			"theme-neutral-600": "var(--theme-color-neutral-600)",
			"theme-neutral-700": "var(--theme-color-neutral-700)",
			"theme-neutral-800": "var(--theme-color-neutral-800)",
			"theme-neutral-900": "var(--theme-color-neutral-900)",
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
						iconColor: theme("colors.theme-medium-light"),
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
