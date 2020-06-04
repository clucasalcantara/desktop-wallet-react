import React from "react";
import { ListDividedItem } from "./ListDividedItem";

export default {
	title: "Components / List Divided / List Divided Item",
};

const item = {
	isFloatingLabel: true,
	label: "New Profile",
	labelDescription: "Select Profile Image",
	itemLabelClass: "text-2xl font-semibold text-black",
	itemLabelDescriptionClass: "text-sm font-semibold text-gray-700",
	content: (
		<div className="flex flex-row mt-2">
			<div className="flex items-center justify-center w-24 h-24 mr-6 border-2 border-gray-300 border-dashed rounded"></div>
			{/* <!-- TODO (BP): use for avatar: background-image: url("data:image/svg+xml...") --> */}
			<div className="relative w-24 h-24 bg-gray-400 rounded">
				<img src="https://randomuser.me/api/portraits/men/3.jpg" className="object-cover rounded" />
			</div>
		</div>
	),
};

export const Default = () => (
	<div className="inline-flex space-x-4">
		<ListDividedItem {...item} />
	</div>
);