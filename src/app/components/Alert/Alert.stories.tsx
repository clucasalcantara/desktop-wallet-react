import React from "react";
import Alert from "./Alert";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
	title: "Components / Alert",
	decorators: [withKnobs],
};

const editableProps = {
	title: text("Title", "Alert Title"),
	children: text("Content", "Content"),
	size: select(
		"Alert size",
		{
			Small: "small",
			Default: "default",
			Large: "large",
		},
		"default",
	),
	status: select(
		"Alert status",
		{
			Warning: "warning",
			Success: "success",
			Danger: "danger",
		},
		"warning",
	),
};

export const Default = () => (
	<div className="p-4">
		<Alert {...editableProps} />
	</div>
);
