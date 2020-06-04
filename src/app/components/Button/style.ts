import tw, { css } from "twin.macro";
// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

const { theme } = resolveConfig(tailwindConfig)

const baseStyle = tw`rounded py-3 px-4 focus:outline-none focus:shadow-outline font-semibold text-center transition-all ease-linear duration-100`;

const colors = {
	primary: css`
		--color: ${theme.colors.blue['600']};
		--color-shade: ${theme.colors.blue['700']};
		--color-tint: ${theme.colors.blue['500']};
		--color-contrast: ${theme.colors.blue['100']};
		--color-shadow: ${theme.colors.blue['200']};
	`,
	success: css`
		--color: ${theme.colors.green['600']};
		--color-shade: ${theme.colors.green['700']};
		--color-tint: ${theme.colors.green['500']};
		--color-contrast: ${theme.colors.green['200']};
		--color-shadow: ${theme.colors.green['200']};
	`,
	danger: css`
		--color: ${theme.colors.red['500']};
		--color-shade: ${theme.colors.red['600']};
		--color-tint: ${theme.colors.red['400']};
		--color-contrast: ${theme.colors.red['100']};
		--color-shadow: ${theme.colors.red['100']};
	`,
};

const getVariant = (name: string) => {
	switch (name) {
		case "solid":
			return css`
				background-color: var(--color);
				color: var(--color-contrast);
				&:hover {
					box-shadow: 2px 3px 10px 2px var(--color-shadow);
				}
			`;
		case "plain":
			return css`
				color: var(--color-shade);
				background-color: var(--color-contrast);
			`;
		case "outline":
			return css`
				color: var(--color-shade);
				box-shadow: 0 0 0 2px var(--color-shadow);
			`;
	}
};

export const getStyles = ({ variant, color }: { variant: string; color: string }) => {
	return [
		baseStyle,
		// @ts-ignore
		...colors[color],
		// @ts-ignore
		...getVariant(variant)
	];
};

export default getStyles;
