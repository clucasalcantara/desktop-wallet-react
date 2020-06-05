import React from "react";
import { FormError } from "../Form/FormError";

type Props = {
	type: string;
	label: string;
	name: string;
	error: string;
	innerSlot?: React.ReactNode;
	ref?: any;
};

const Input = ({ type, label, name, error, innerSlot }: Props) => (
	<div className="flex flex-col">
		<label className="text-theme-medium">
			{label}
			<div className="mt-2 pb-2 flex relative items-center">
				<input
					className="flex-1 border border-theme-neutral-light rounded-md h-12 w-full"
					type={type}
					name={name}
				/>
				{innerSlot && <div className="absolute right-0 mr-4 mt-1">{innerSlot}</div>}
			</div>
		</label>
		{error && <FormError error={error} />}
	</div>
);

Input.defaultProps = {
	type: "text",
	label: "Input Label",
	name: "input",
};

export { Input };
