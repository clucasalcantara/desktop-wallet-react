import React from "react";
import Alert from "./Alert";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
	title: "Components / Alert",
	decorators: [withKnobs],
};

const editableProps = {
	title: text("Title", "Title"),
	children: text("Content", "Content"),
	size: select(
		"Size",
		{
			Small: "small",
			Default: "default",
			Large: "large",
		},
		"default",
	),
	status: select(
		"Variant",
		{
			Primary: "primary",
			Warning: "warning",
			Success: "success",
			Danger: "danger",
		},
		"warning",
	),
};

export const Default = () => (
	<Alert {...editableProps} />
);
