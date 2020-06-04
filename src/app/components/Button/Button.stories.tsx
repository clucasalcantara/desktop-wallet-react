import React from "react";
import { Button } from "./Button";

export default {
	title: "Button",
};

export const Primary = () => (
	<div className="inline-flex space-x-4">
		<Button color="primary" variant="solid">
			Solid
		</Button>
		<Button color="primary" variant="plain">
			Plain
		</Button>
	</div>
);

export const Success = () => (
	<div className="inline-flex space-x-4">
		<Button color="success" variant="solid">
			Solid
		</Button>
		<Button color="success" variant="plain">
			Plain
		</Button>
	</div>
);

export const Danger = () => (
	<div className="inline-flex space-x-4">
		<Button color="danger" variant="solid">
			Solid
		</Button>
		<Button color="danger" variant="plain">
			Plain
		</Button>
	</div>
);
