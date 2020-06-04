import tw, { css } from "twin.macro";

const baseStyle = [tw`flex overflow-hidden`];

const getSize = (size: string): any => {
	switch (size) {
		case "small":
			return css`
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
			`;
		case "default":
			return css`
				padding-top: 2.75rem;
				padding-bottom: 2.75rem;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
			`;
		case "large":
			return css`
				padding-top: 4.5rem;
				padding-bottom: 4.5rem;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
			`;
	}
};

export const getStyles = ({ size }: { size?: string }) => {
	return [getSize(size!), ...baseStyle];
};

export default getStyles;
