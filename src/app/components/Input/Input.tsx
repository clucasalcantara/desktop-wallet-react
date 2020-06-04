import React from "react";

type Props = {
	type: string;
	label: string;
	name: string;
};

const Input = ({ type, label, name }: Props) => (
	<div className="flex flex-col">
		<label className="mb-2 text-theme-medium">
			{label}
			<div className="flex relative items-center">
				<input className="flex-1 border border-theme-light rounded-md h-12 w-full" type={type} name={name} />
				{/* {innerSlot && 
                <button v-if="icon" className="absolute right-0 mr-4 h-12 text-blue-600">
                    <SvgIcon :name="icon" view-box="0 0 20 20" />
                </button>
            } */}
			</div>
		</label>
	</div>
);

Input.defaultProps = {
	type: "text",
	label: "Input Label",
	name: "input",
};

export default Input;
