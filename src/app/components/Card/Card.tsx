import React from "react";
import tw, { styled } from "twin.macro";

type CardProps = {
	as?: React.ElementType;
	children: React.ReactNode;
};

export const Card = styled.div<CardProps>`
	${tw`p-6 border-2 border-blue-100 rounded-md text-gray-800`}
`;
