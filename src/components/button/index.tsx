import React from "react";
import styled, { css } from 'styled-components';
// import tw from 'tailwind.macro'

type Props = {
    children: any,
    handleClick: func,
    size: "small" | "medium" | "large"
}

const StyledButton = styled.button.attrs(({ size, color, variant }) => {
    const baseClass = "focus:shadow-outline font-semibold text-center transition-all ease-linear duration-100"
    
    const colorsScheme = {
        primary: "bg-blue-700 text-blue-100",
        success: "bg-green-700 text-green-100",
        danger: "bg-red-500 text-white",
        light: "bg-gray-600 text-gray-100",
    }
    
    let appliedClass = '';

    switch(size) {
        case "small": {
            
            appliedClass = `text-sm px-2 py-1 ${colorsScheme[color]}`;
            break;
        }
        case "default": {
            appliedClass = `text-base px-4 py-2 ${colorsScheme[color]}`;
            break;
        }
        case "large": {
            appliedClass = `text-lg px-5 py-3 ${colorsScheme[color]}`;
            break;
        }
    }

    return { className: `${baseClass} ${appliedClass}` }
})`
    ${({ size }) => {
        switch(size) {
            case "small": {
                return css`
                    --circle-size: theme("spacing.8");
                `
            }
            case "default": {
                return css`
                    --circle-size: theme("spacing.12");
                `
            }
            case "large": {
                return css`
                    --circle-size: theme("spacing.16");
                `
            }
        }
    }}

    ${({ color }) => {
        switch(color) {
            case "primary": {
                return css`
                    --color: theme("colors.blue.600");
			        --shadow-color: theme("colors.blue.200");
                `
            }
            case "success": {
                return css`
                    --color: theme("colors.green.700");
			        --shadow-color: theme("colors.green.200");
                `
            }
            case "danger": {
                return css`
                    --color: theme("colors.red.600");
			        --shadow-color: theme("colors.red.100");
                `
            }
            case "light": {
                return css`
                    --color: theme("colors.gray.700");
			        --shadow-color: theme("colors.gray.200");
                `
            }
        }
    }}        
`

const Button = ({ children, size = "default", color="primary", handleClick }: Props) => (
    <StyledButton
        size={size}
        color={color}
        onClick={() => handleClick()} 
        className="Button">
		{children}
	</StyledButton>
)

export default Button;