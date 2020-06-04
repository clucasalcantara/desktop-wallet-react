import React from "react";
import { styled } from "twin.macro";
import { getStyles } from "./style";

type ButtonProps = {
	color: string;
	variant: string;
} & React.ButtonHTMLAttributes<any>;

export const Button = styled.button<ButtonProps>(getStyles);
